from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from app.db.session import get_db
from app.models.favorite import Favorite
from app.schemas.favorite import FavoriteAdd
from app.core.config import SECRET_KEY, ALGORITHM


router = APIRouter()

oauth2_scheme_favorites = OAuth2PasswordBearer(tokenUrl="login")


def get_current_user_id_for_favorites(
    token: str = Depends(oauth2_scheme_favorites)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Niepoprawny token",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")

        if user_id is None:
            raise credentials_exception

        return int(user_id)

    except JWTError:
        raise credentials_exception


# Pobieranie ulubionych zalogowanego użytkownika
@router.get("/")
def get_favorites(
    db: Session = Depends(get_db),
    current_user: int = Depends(get_current_user_id_for_favorites)
):
    return (
        db.query(Favorite)
        .filter(Favorite.user_id == current_user)
        .all()
    )


# Dodawanie produktu albo projektu do ulubionych
@router.post("/")
def add_favorite(
    fav: FavoriteAdd,
    db: Session = Depends(get_db),
    current_user: int = Depends(get_current_user_id_for_favorites)
):
    if fav.product_id is None and fav.project_id is None:
        raise HTTPException(
            status_code=400,
            detail="Musisz podać product_id albo project_id."
        )

    existing = (
        db.query(Favorite)
        .filter(
            Favorite.user_id == current_user,
            Favorite.product_id == fav.product_id,
            Favorite.project_id == fav.project_id
        )
        .first()
    )

    if existing:
        return {
            "msg": "Element jest już w ulubionych.",
            "favorite_id": existing.favorite_id
        }

    favorite = Favorite(
        user_id=current_user,
        product_id=fav.product_id,
        project_id=fav.project_id
    )

    db.add(favorite)
    db.commit()
    db.refresh(favorite)

    return {
        "msg": "Dodano do ulubionych.",
        "favorite_id": favorite.favorite_id
    }


# Usuwanie z ulubionych
@router.delete("/{favorite_id}")
def delete_favorite(
    favorite_id: int,
    db: Session = Depends(get_db),
    current_user: int = Depends(get_current_user_id_for_favorites)
):
    favorite = (
        db.query(Favorite)
        .filter(
            Favorite.favorite_id == favorite_id,
            Favorite.user_id == current_user
        )
        .first()
    )

    if not favorite:
        raise HTTPException(
            status_code=404,
            detail="Nie znaleziono ulubionego elementu."
        )

    db.delete(favorite)
    db.commit()

    return {
        "msg": "Usunięto z ulubionych."
    }