import sys
print("Python:", sys.executable)
print("Version:", sys.version)
results = []
for mod in ["fastapi", "sqlalchemy", "psycopg", "pydantic", "dotenv", "email_validator", "passlib", "uvicorn", "bcrypt"]:
    try:
        m = __import__(mod)
        ver = getattr(m, "__version__", "?")
        results.append(f"OK       {mod} {ver}")
    except ImportError as e:
        results.append(f"MISSING  {mod}")
print("\n".join(results))
