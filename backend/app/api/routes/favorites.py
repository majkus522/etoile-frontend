from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.favorite import Favorite

router = APIRouter()

@router.post("/add")
def add_favorite(data: dict, db: Session = Depends(get_db)):
    fav = Favorite(**data)
    db.add(fav)
    db.commit()
    return {"msg": "ok"}

@router.patch("/delete")
def delete_favorite(data: dict, db: Session = Depends(get_db)):
    fav = db.query(Favorite).get(data["id"])
    db.delete(fav)
    db.commit()
    return {"msg": "ok"}

@router.get("/all")
def get_favorites(db: Session = Depends(get_db)):
    return db.query(Favorite).all()