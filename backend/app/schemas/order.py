from pydantic import BaseModel

class OrderUpdate(BaseModel):
    order_id: int
    status: str

class OrderDelete(BaseModel):
    order_id: int