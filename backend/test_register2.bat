@echo off
echo Testing register endpoint...
curl -v -X POST http://127.0.0.1:8000/api/auth/register -H "Content-Type: application/json" -d "{\"full_name\":\"Test User\",\"email\":\"test@example.com\",\"mobile\":\"+911234567890\",\"role\":\"farmer\",\"password\":\"Test1234\"}"
echo.
echo.
echo Testing health...
curl -s http://127.0.0.1:8000/api/health
echo.
pause
