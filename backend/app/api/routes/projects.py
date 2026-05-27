from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.project import CustomProject
from app.schemas.project import ProjectCreate

router = APIRouter()

@router.post("/")
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    new_project = CustomProject(**project)
    db.add(new_project)
    db.commit()
    return {"msg": "created"}

@router.get("/")
def get_project(db: Session = Depends(get_db)):
    return db.query(CustomProject).all()