# InstrumentApp (Android APK)

این پروژه یک اپ اندروید (WebView) است که فایل‌های HTML شما را از داخل اپ اجرا می‌کند.
صداها از اینترنت (Soundfont CDN) لود می‌شوند، پس برای صدا نیاز به اینترنت دارید.

## ساخت APK با Android Studio (پیشنهادی)
1) Android Studio را نصب کن.
2) این پوشه را Open کن (همین فولدر InstrumentApp).
3) اگر Gradle Sync خواست، اجازه بده.
4) از منو: Build > Build Bundle(s) / APK(s) > Build APK(s)
5) فایل APK را در مسیر زیر می‌سازد:
   app/build/outputs/apk/debug/app-debug.apk  (یا release)

## ساخت از طریق ترمینال
- نیاز به Android SDK و ANDROID_HOME دارد
- داخل ریشه پروژه:
  ./gradlew assembleDebug

## نکته مهم
- فایل gradle-wrapper.jar داخل این بسته نیست. اگر Android Studio خطا داد:
  در Android Studio: File > Sync Project with Gradle Files
  (Android Studio خودش wrapper را درست/دانلود می‌کند.)
