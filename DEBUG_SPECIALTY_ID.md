# إصلاح مشكلة Specialty ID

## المشكلة المكتشفة:
`Specialty ID: NaN` مما يعني أن `getSpecializationId()` لا يعمل بشكل صحيح.

## الحل المطبق:
تم إضافة كود debug في `AuthService` لطباعة القيم في console.

## للاختبار:

### 1. سجل خروج من النظام
### 2. سجل دخول مرة أخرى بأي مستخدم طبيب
### 3. افتح Developer Tools (F12)
### 4. اذهب إلى Console
### 5. ابحث عن الرسائل التالية:

#### عند تسجيل الدخول:
```
Doctor data from login: {specializationID: X, doctorID: Y}
SPECIALTY_KEY: doctor_specialty
DOCTOR_ID_KEY: doctorId
Saved specializationID: X
Saved doctorID: Y
```

#### عند تحميل السايد بار:
```
SPECIALTY_KEY: doctor_specialty
Raw specId from localStorage: X
Parsed specId: X
User Role: Doctor
User Name: omarale123
Specialty ID: X
Final Role: Doctor_Eye
```

### 6. أخبرني بالقيم التي تظهر في Console

## القيم المتوقعة:
- **specializationID**: يجب أن يكون رقم (1، 2، 3، 4، أو 5)
- **Raw specId from localStorage**: يجب أن يكون نفس الرقم كـ string
- **Parsed specId**: يجب أن يكون نفس الرقم كـ number
- **Final Role**: يجب أن يكون Doctor_Eye، Doctor_Internal، إلخ

## إذا كانت القيم صحيحة:
المشكلة محلولة والسايد بار يجب أن يعمل

## إذا كانت القيم خاطئة:
المشكلة في البيانات المرجعة من API أو في حفظ البيانات

**أرجو إرسال القيم التي تظهر في Console بعد تسجيل الدخول مرة أخرى.**
