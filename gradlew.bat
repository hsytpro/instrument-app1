@echo off
set DIR=%~dp0
set WRAPPER_JAR=%DIR%\gradle\wrapper\gradle-wrapper.jar

if not exist "%WRAPPER_JAR%" (
  echo Missing gradle wrapper jar: %WRAPPER_JAR%
  echo Open this project in Android Studio; it will recreate wrapper files if needed.
  exit /b 1
)

java -classpath "%WRAPPER_JAR%" org.gradle.wrapper.GradleWrapperMain %*
