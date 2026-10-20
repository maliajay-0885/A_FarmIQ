"""
Run this with the venv Python to diagnose the registration error.
Usage: venv\Scripts\python.exe diagnose.py
"""
import sys
sys.path.insert(0, "venv")

import os, re
from dotenv import load_dotenv
from passlib.context import CryptContext
from sqlalchemy import create_engine, text, inspect
from sqlalchemy.engine import URL

load_dotenv()

database_url = URL.create(
    "postgresql+psycopg",
    username=os.getenv("DB_USER", "postgres"),
    password=os.getenv("DB_PASSWORD", ""),
    host=os.getenv("DB_HOST", "localhost"),
    port=int(os.getenv("DB_PORT", "5432")),
    database=os.getenv("DB_NAME", "FarmIQ"),
)

print("=== Connecting to DB ===")
engine = create_engine(database_url, pool_pre_ping=True)

with engine.connect() as conn:
    print("Connected OK")

    # Show tables
    insp = inspect(engine)
    tables = insp.get_table_names()
    print(f"Tables: {tables}")

    # Show users table columns if it exists
    if "users" in tables:
        cols = insp.get_columns("users")
        print("\nusers columns:")
        for c in cols:
            print(f"  {c['name']} : {c['type']}")

        # Show constraints
        uqs = insp.get_unique_constraints("users")
        print(f"\nUnique constraints: {uqs}")

        # Try inserting a test user
        pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto", bcrypt__rounds=4)
        hashed = pwd_context.hash("Test1234")
        try:
            conn.execute(text("""
                INSERT INTO users (full_name, email, mobile, role, password_hash, created_at)
                VALUES (:fn, :em, :mo, :ro, :pw, NOW())
            """), {"fn": "Diag User", "em": "diag@test.com", "mo": "+911234567890",
                   "ro": "farmer", "pw": hashed})
            conn.commit()
            print("\nTest INSERT succeeded!")
            # Clean up
            conn.execute(text("DELETE FROM users WHERE email='diag@test.com'"))
            conn.commit()
            print("Cleaned up test row.")
        except Exception as e:
            conn.rollback()
            print(f"\nINSERT failed: {type(e).__name__}: {e}")
    else:
        print("users table does NOT exist — will create it now")
        conn.execute(text("""
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                full_name VARCHAR(200) NOT NULL,
                email VARCHAR(320) NOT NULL UNIQUE,
                mobile VARCHAR(20) NOT NULL UNIQUE,
                role VARCHAR(50) NOT NULL,
                password_hash VARCHAR(256) NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW()
            )
        """))
        conn.commit()
        print("Created users table.")

print("\n=== Done ===")
