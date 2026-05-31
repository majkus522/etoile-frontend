from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from app.db.session import get_db
from app.models.favorite import Favorite
from app.schemas.favorite import FavoriteAdd, FavoriteDelete
from app.core.security import get_current_user
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
        "msg": "ok",
        "favorite_id": favorite.favorite_id
    }

# ========== usuwanie postu z ulubionych ========== #
@router.delete("/")
def delete_favorite(
    fav: FavoriteDelete,
    token: Annotated[str | None, Header()] = None,
    db: Session = Depends(get_db)
):
    user_id = get_current_user(token, db)
    favorite = (
        db.query(Favorite)
        .filter(Favorite.favorite_id == fav.favorite_id and Favorite.user_id == user_id)
        .first()
    )

    if not favorite:
        raise HTTPException(
            status_code=404,
            detail="Nie znaleziono ulubionego elementu."
        )

    db.delete(favorite)
    db.commit()

    return {"msg": "ok"}

# ========== zwracanie wszystkich ulubionych postów dla konkretnego użytkownika ========== #
@router.get("/")
def get_favorites(token: Annotated[str | None, Header()] = None, db: Session = Depends(get_db)):
    user_id = get_current_user(token, db)
    return db.query(Favorite).filter(Favorite.user_id == user_id).all()
