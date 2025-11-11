@echo off
title Military Health System - Python Web Server
color 0B
echo ====================================
echo   Military Health System
echo   نظام الصحة العسكرية  
echo ====================================
echo.
echo [+] Starting Python web server...
echo.

where python >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Python is NOT installed!
    echo.
    echo Please use START_APP.bat instead (requires Node.js)
    echo.
    pause
    exit /b 1
)

echo [OK] Python found!
echo.
echo ====================================
echo   Application is running at:
echo   http://localhost:8080
echo ====================================
echo.
echo Opening browser...
echo Press CTRL+C to stop the server
echo.

start http://localhost:8080
python -m http.server 8080

