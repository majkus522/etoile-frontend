from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.product import Product
from app.schemas.product import ProductFilter

router = APIRouter()

@router.get("/")
def get_products(product_id: ProductFilter, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.category_id == product_id).all()