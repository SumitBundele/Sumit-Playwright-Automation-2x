# Open a URL in Playwright browser with debug inspector enabled
# Usage: .\open-browser.ps1 https://google.com

param(
    [Parameter(Position=0)]
    [string]$Url = "https://google.com",

    [Parameter(Position=1)]
    [string]$Browser = "chromium"
)

$env:PWDEBUG = "1"
npx playwright open -b $Browser $Url
