@echo off
REM Open a URL in Playwright browser with debug inspector enabled
REM Usage: open-browser.cmd https://google.com

if "%~1"=="" (
    set "URL=https://google.com"
) else (
    set "URL=%~1"
)

set "PWDEBUG=1"
npx playwright open %URL%
