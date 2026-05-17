@echo off
setlocal enabledelayedexpansion

echo Git commands.
echo       1. Pull from existing repository.
echo       2. Push to existing repository.
echo       3. Connect to existing repository, github-url.

set /p runnCommand="select git command (1, 2, 3): "

if "%runnCommand%"=="1" (

    git pull origin main

    if errorlevel 1 (
        echo Pull failed.
        pause
        exit /b
    )

    echo Pull successful.
)


if "%runnCommand%"=="2" (

    set /p commitMessage="Commit message: "

    git add .

    git commit -m "!commitMessage!"

    if errorlevel 1 (
        echo Commit failed.
        pause
        exit /b
    )

    git branch -M main

    git push -u origin main

    if errorlevel 1 (
        echo Push failed.
        pause
        exit /b
    )

    echo Push successful.
)

if "%runnCommand%"=="3" (

    set /p repoURL="Enter repository URL: "

    git remote remove origin 2>nul

    git remote add origin "%repoURL%"

    if errorlevel 1 (
        echo Setting repository URL failed.
        pause
        exit /b
    )

    echo Repository URL set successfully.

    git remote -v
)

pause