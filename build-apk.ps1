# Build APK Helper Script for Weekly Chores Household Hub
# Can be run from Antigravity terminal without opening Android Studio

$ErrorActionPreference = "Stop"

Write-Host "==> [1/3] Building Web Production Assets with Vite..." -ForegroundColor Cyan
$env:NODE_OPTIONS = "--max-old-space-size=4096"
& "C:\Users\thomv\Documents\Weekly Chores\node.exe" "./node_modules/vite/bin/vite.js" build

Write-Host "`n==> [2/3] Syncing Web Assets to Android Platform..." -ForegroundColor Cyan
& "C:\Users\thomv\Documents\Weekly Chores\node.exe" "./node_modules/@capacitor/cli/bin/capacitor" sync android

Write-Host "`n==> [3/3] Compiling Android APK with Gradle..." -ForegroundColor Cyan
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
Push-Location android
try {
    .\gradlew.bat assembleDebug
} finally {
    Pop-Location
}

$apkPath = Resolve-Path "android\app\build\outputs\apk\debug\app-debug.apk"
Write-Host "`n[SUCCESS] APK compiled successfully at:" -ForegroundColor Green
Write-Host "$apkPath" -ForegroundColor Yellow

$adb = "C:\Users\thomv\AppData\Local\Android\Sdk\platform-tools\adb.exe"
if (Test-Path $adb) {
    $devices = & $adb devices | Where-Object { $_ -match "\s+device$" }
    if ($devices) {
        Write-Host "`n==> Detected connected Android device. Installing APK..." -ForegroundColor Cyan
        & $adb install -r $apkPath
        Write-Host "[SUCCESS] App installed on phone!" -ForegroundColor Green
    } else {
        Write-Host "`n(Tip: Connect your phone via USB with USB Debugging enabled to auto-install)" -ForegroundColor DarkGray
    }
}
