@echo off
setlocal enabledelayedexpansion

echo Git commands.
echo       1. commit to the local repository
echo       2. Pull from existing repository.
echo       3. Push to existing repository. 
echo       4. Connect to existing repository, github-url.
echo       5. undo last commit.   

set /p runnCommand="select git command: "

if "%runnCommand%"=="1" (

    set /p commitMessage="Commit message: "

    git add .

    git status

    git commit -m "!commitMessage!"

    if errorlevel 1 (
        echo Commit failed.
        pause
        exit /b
    )
)

if "%runnCommand%"=="2" (

    git pull origin Main

    if errorlevel 1 (
        echo Pull failed.
        pause
        exit /b
    )

    echo Pull successful.
)

if "%runnCommand%"=="3" (

    set /p branch="repository branch: "

    git branch -M %branch%

    git push -u origin !branch!

    if errorlevel 1 (
        echo Push failed.
        pause
        exit /b
    )

    echo Push successful.
)

if "%runnCommand%"=="4" (

    set /p repoURL="Enter repository URL: "

    git remote remove origin 2>nul

    git remote add origin !repoURL!

    if errorlevel 1 (
        echo Setting repository URL failed.
        pause
        exit /b
    )

    echo Repository URL set successfully.

    git remote -v
)

if "%runnCommand%"=="5" (

    git reset --soft HEAD~1

    if errorlevel 1 (
        echo Undo last commit failed.
        pause
        exit /b
    )

    echo Last commit undone successfully.
)

pause