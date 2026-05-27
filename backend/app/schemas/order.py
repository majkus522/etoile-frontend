from pydantic import BaseModel

class OrderCreate(BaseModel):
    user_id: int
    status: str
    created_at: datetime

class OrderUpdate(BaseModel):
    order_id: int
    user_id: int
    status: str
    created_at: datetime

class OrderDelete(BaseModel):
    order_id: int

class OrderGet(BaseModel):
    user_id: int