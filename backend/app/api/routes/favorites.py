from typing import Annotated
from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.favorite import Favorite
from app.schemas.favorite import FavoriteAdd, FavoriteDelete
from app.core.security import get_current_user

# ============================================== #
# obsługa danych związanych z ulubionymi postami #
# ============================================== #

router = APIRouter()

# ========== dodawanie postu do ulubionych ========== #
@router.post("/")
def add_favorite(fav: FavoriteAdd, token: Annotated[str | None, Header()] = None,  db: Session = Depends(get_db)):
    user_id = get_current_user(token, db)
    favorite = Favorite(
        user_id=user_id,
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
            detail="Favorite not found"
        )

    db.delete(favorite)
    db.commit()

    return {"msg": "ok"}

# ========== zwracanie wszystkich ulubionych postów dla konkretnego użytkownika ========== #
@router.get("/")
def get_favorites(token: Annotated[str | None, Header()] = None, db: Session = Depends(get_db)):
    user_id = get_current_user(token, db)
    return db.query(Favorite).filter(Favorite.user_id == user_id).all()