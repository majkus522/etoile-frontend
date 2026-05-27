from typing import Annotated
from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.cart import Cart
from app.schemas.cart import CartCreate, CartUpdate, CartDelete

router = APIRouter()

# ========== dodawanie do koszyka ========== #
@router.post("/")
def add_to_cart(cart_item: CartCreate, db: Session = Depends(get_db)):
    db_cart = Cart(**cart_item.model_dump())
    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)
    return db_cart

# ========== zmiana ilości produktów w koszyku ========== #
@router.patch("/")
def update_cart(cart_item: CartUpdate, db: Session = Depends(get_db)):

    db_cart_item = (
        db.query(Cart)
        .filter(Cart.cart_item_id == cart_item.cart_item_id)
        .first()
    )

    if not db_cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")

    db_cart_item.quantity = cart_item.quantity
    db.commit()
    #db.refresh(db_cart_item)
    return {"msg": "ok"}

# ========== usuwanie z koszyka ========== #
@router.delete("/")
def delete_cart(
    cart_id: CartDelete,
    db: Session = Depends(get_db)
):
    cart_item = (
        db.query(Cart)
        .filter(Cart.cart_item_id == cart_id.cart_item_id)
        .first()
    )

    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")

    db.delete(cart_item)
    db.commit()

    return {"msg": "deleted"}

# ========== zwracanie koszyka użytkownika ========== #
@router.get("/")
def get_cart(user_id: Annotated[str | None, Header()] = None, db: Session = Depends(get_db)
):
    return db.query(Cart).filter(Cart.user_id == user_id).all()
