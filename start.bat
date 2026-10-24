@echo off
REM ============================================================
REM  Margly - one-click launcher
REM  Double-click this file to start the local website.
REM ============================================================

title Margly - dev server

REM Move to the folder this script lives in
cd /d "%~dp0"

REM Put the standard Node.js install location on PATH for this window
set "PATH=%ProgramFiles%\nodejs;%PATH%"

REM Make sure Node is available
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo [!] Node.js was not found at "%ProgramFiles%\nodejs".
  echo     Please install Node.js 18+ from https://nodejs.org and try again.
  echo.
  pause
  exit /b 1
)

REM Install dependencies the first time (if node_modules is missing)
if not exist "node_modules" (
  echo Installing dependencies, this may take a minute...
  call npm install
  if errorlevel 1 (
    echo.
    echo [!] npm install failed. See the messages above.
    pause
    exit /b 1
  )
)

echo.
echo Starting Margly...
echo The website will open at http://localhost:5173
echo Keep this window open while you use the site. Press Ctrl+C to stop.
echo.

REM Open the browser after a short delay so the server is ready
start "" cmd /c "timeout /t 3 >nul & start http://localhost:5173"

REM Start the dev server (this keeps running in this window)
call npm run dev
