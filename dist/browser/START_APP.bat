@echo off
title Military Health System - Web Server
color 0A
echo ====================================
echo   Military Health System
echo   نظام الصحة العسكرية
echo ====================================
echo.
echo [+] Checking for Node.js...

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Node.js is NOT installed!
    echo.
    echo Please install Node.js from: https://nodejs.org
    echo Or use the portable version provided.
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js found!
echo.
echo [+] Installing http-server (first time only)...
call npm install -g http-server >nul 2>&1

echo [+] Starting web server...
echo.
echo ====================================
echo   Application is running at:
echo   http://localhost:8080
echo ====================================
echo.
echo The browser will open automatically...
echo Press CTRL+C to stop the server
echo.

start http://localhost:8080
http-server -p 8080 -c-1

