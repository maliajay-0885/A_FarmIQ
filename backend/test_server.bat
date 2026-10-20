@echo off
echo Testing backend health endpoint...
curl -s http://127.0.0.1:8000/api/health
echo.
echo Testing via localhost...
curl -s http://localhost:8000/api/health
echo.
pause
