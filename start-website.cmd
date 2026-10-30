@echo off
cd /d "%~dp0"
call pnpm dev --host 127.0.0.1
pause
