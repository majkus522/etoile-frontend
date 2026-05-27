from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.user import User
from app.core.config import SECRET_KEY, ALGORITHM

# ================================== #
# obsługa zabezpieczeń i autoryzacji #
# ================================== #

pwd_context = CryptContext(schemes=["bcrypt"])

# ========== hashowanie hasła ========== # -- nie wiem czy jest używane
def hash_password(password):
    return pwd_context.hash(password)

# ========== weryfikacja hasła ========== # -- nie wiem czy jest używane
def verify_password(password, hashed):
    return pwd_context.verify(password, hashed)

# ========== stworzenie tokenu zalogowanego użytkownika ========== #
def create_token(user_id: int):
    payload = {
        "sub": str(user_id),
        "exp": datetime.utcnow() + timedelta(hours=24*7)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token: str, db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Niepoprawny token",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: int = int(payload.get("sub"))

        if user_id is None:
            raise credentials_exception

    except JWTError as e:
        raise credentials_exception

    user = db.query(User).filter(User.user_id == user_id).first()
    if user is None:
        raise credentials_exception

    return user_id