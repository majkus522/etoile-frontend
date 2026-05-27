from typing import Annotated
from fastapi import APIRouter, Depends, Header
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.order import Order
#from app.schemas.order import OrderCreate

# ================ #
# obsługa zamówień #
# ================ #
router = APIRouter()
'''
@router.post("/")
def add_order(
        order: OrderCreate,
        db: Session = Depends(get_db),
        user: Annotated[str | None, Header()] = None,
):
    new_order = Order(
        user_id = user.id,
        status = order.status,
        created_at = order.created_at,
    )

    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order
'''
@router.get("/")
def get_orders(db: Session = Depends(get_db)):
    return db.query(Order).all()