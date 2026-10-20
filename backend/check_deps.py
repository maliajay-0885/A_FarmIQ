import sys
results = []
for mod in ["fastapi", "sqlalchemy", "psycopg", "pydantic", "dotenv", "email_validator", "passlib", "uvicorn"]:
    try:
        __import__(mod)
        results.append(f"OK  {mod}")
    except ImportError as e:
        results.append(f"MISSING  {mod} -> {e}")
print("\n".join(results))
