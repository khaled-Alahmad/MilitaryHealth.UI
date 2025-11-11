@echo off
title Military Health System - Launcher
color 0E
cls
echo.
echo ====================================================
echo.
echo          نظام الصحة العسكرية
echo        Military Health System
echo.
echo ====================================================
echo.
echo [*] Auto-detecting available web server...
echo.

REM Check for Node.js
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Node.js detected!
    echo [+] Using http-server...
    echo.
    goto :nodejs
)

REM Check for Python
where python >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Python detected!
    echo [+] Using Python HTTP server...
    echo.
    goto :python
)

REM No server found
echo [X] No web server found!
echo.
echo Please install one of the following:
echo   1. Node.js (recommended): https://nodejs.org
echo   2. Python: https://www.python.org
echo.
echo Or use IIS / Apache / Nginx for production deployment.
echo.
pause
exit /b 1

:nodejs
echo Installing http-server (one-time setup)...
call npm install -g http-server >nul 2>&1

echo.
echo ====================================================
echo   Starting Application...
echo   URL: http://localhost:8080
echo ====================================================
echo.

timeout /t 2 /nobreak >nul
start http://localhost:8080
http-server -p 8080 -c-1
goto :end

:python
echo ====================================================
echo   Starting Application...
echo   URL: http://localhost:8080
echo ====================================================
echo.

timeout /t 2 /nobreak >nul
start http://localhost:8080
python -m http.server 8080
goto :end

:end

