from typing import Annotated
from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models import project
from app.models.cart import Cart

# ===================================== #
# obsługa danych związanych z koszykiem #
# ===================================== #

router = APIRouter(prefix="/cart", tags=["Cart"])

# ========== dodawanie do koszyka ========== #
@router.post("/")
def add_to_cart(
    product_id: int,
    project_id: int,
    quantity: int,
    user: Annotated[str | None, Header()] = None,
    db: Session = Depends(get_db)
):
    cart_item = Cart(
        product_id=product_id,
        project_id=project_id,
        quantity=quantity,
        user=user
    )

    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)

    return cart_item

# ========== zmiana ilości produktów w koszyku ========== #
@router.patch("/{cart_id}")
def update_cart(
    cart_id: int,
    quantity: int,
    db: Session = Depends(get_db)
):
    cart_item = db.query(Cart).filter(Cart.cart_item_id == cart_id).first()

    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")

    cart_item.quantity = quantity

    db.commit()
    db.refresh(cart_item)

    return cart_item

# ========== usuwanie z koszyka ========== #
@router.delete("/{cart_id}")
def delete_cart(
    cart_id: int,
    db: Session = Depends(get_db)
):
    cart_item = db.query(Cart).filter(Cart.cart_item_id == cart_id).first()

    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")

    db.delete(cart_item)
    db.commit()

    return {"msg": "deleted"}

# ========== zwracanie koszyka użytkownika ========== #
@router.get("/")
def get_cart(
    user: Annotated[str | None, Header()] = None,
    db: Session = Depends(get_db)
):
    if not user:
        raise HTTPException(status_code=400, detail="User header required")

    return db.query(Cart).filter(Cart.user_id == user).all()