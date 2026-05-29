from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.project import CustomProject
from app.schemas.project import ProjectCreate


from app.api.routes.favorites import get_current_user_id_for_favorites

router = APIRouter()

@router.post("/create")
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user_id_for_favorites)
):
    db_project = CustomProject(
        user_id=current_user_id, 
        name=project.name,
        total_price=project.total_price,
        created_at=project.created_at
    )
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return {"msg": "Projekt zapisany", "project_id": db_project.project_id}