from pydantic import BaseModel
from datetime import datetime

class ProjectCreate(BaseModel):
    user_id: int
    name: str
    total_price: float
    created_at: datetime