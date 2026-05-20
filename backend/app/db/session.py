from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# ==================================================== #
# ustanowienie sesji łącząńecj baze danych z backendem #
# ==================================================== #
DATABASE_URL = "postgresql+psycopg2://etoile_admin:supertajnehaslo123@postgres_db:5432/etoile_db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

# ========== pobranie połączenia z bazą ========== #
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()