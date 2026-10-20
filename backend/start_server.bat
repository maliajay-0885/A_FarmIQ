@echo off
title FarmIQ Backend Server
echo ============================================
echo   FarmIQ Backend Server
echo   Running on http://127.0.0.1:8000
echo   Press CTRL+C to stop
echo ============================================
echo.
cd /d "C:\Users\sarth\Downloads\FarmIQ-main\backend\venv"
"C:\Users\sarth\Downloads\FarmIQ-main\backend\venv\Scripts\uvicorn.exe" main:app --host 127.0.0.1 --port 8000 --reload
pause
