from typing import Annotated
from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.favorite import Favorite
from app.schemas.favorite import FavoriteAdd, FavoriteDelete

# ============================================== #
# obsługa danych związanych z ulubionymi postami #
# ============================================== #

router = APIRouter()

# ========== dodawanie postu do ulubionych ========== #
@router.post("/")
def add_favorite(fav: FavoriteAdd, db: Session = Depends(get_db)):
    db.add(fav)
    db.commit()
    return {"msg": "ok"}

# ========== usuwanie postu z ulubionych ========== #
@router.delete("/")
def delete_favorite(fav: FavoriteDelete, db: Session = Depends(get_db)):
    db.delete(db.query(Favorite).filter(Favorite.favorite_id == fav.favorite_id).first())
    db.commit()
    return {"msg": "ok"}

# ========== zwracanie wszystkich ulubionych postów dla konkretnego użytkownika ========== #
@router.get("/")
def get_favorites(user_id: Annotated[str | None, Header()] = None, db: Session = Depends(get_db)):
    return db.query(Favorite).filter(Favorite.user_id == user_id).all()