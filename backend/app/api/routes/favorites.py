from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.favorite import Favorite

# ============================================== #
# obsługa danych związanych z ulubionymi postami #
# ============================================== #

router = APIRouter()

# ========== dodawanie postu do ulubionych ========== #
@router.post("/")
def add_favorite(data: dict, db: Session = Depends(get_db)):
    fav = Favorite(**data)
    db.add(fav)
    db.commit()
    return {"msg": "ok"}

# ========== usuwanie postu z ulubionych ========== #
@router.delete("/{favorite_id}")
def delete_favorite(
        favorite_id: int,
        db: Session = Depends(get_db)
):
    favorite = db.query(Favorite).filter(Favorite.favorite_id == favorite_id).first()
    db.delete(favorite)
    db.commit()
    return {"msg": "ok"}

# ========== zwracanie wszystkich ulubionych postów dla konkretnego użytkownika ========== #
@router.get("/")
def get_favorites(
        user: Annotated[str | None, Header()] = None,
        db: Session = Depends(get_db)
):
    favorites = db.query(Favorite).filter(Favorite.user_id == user).all()
    return favorites