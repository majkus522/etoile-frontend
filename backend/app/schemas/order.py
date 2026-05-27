from pydantic import BaseModel

class OrderCreate(BaseModel):
    user_id: int
    status: str
    created_at: datetime
