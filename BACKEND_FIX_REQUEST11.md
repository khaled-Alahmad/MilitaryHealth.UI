# طلب إصلاح من Backend - توحيد البيانات في `/api/Applicants/Details/{fileNumber}`

## 🔴 المشكلة الحالية

عند استدعاء `/api/Applicants/Details/{fileNumber}`، البيانات التالية تأتي `null` أو غير موجودة، بينما هي موجودة في `/api/Applicants?filter=xxx`:

### البيانات المفقودة في `/api/Applicants/Details/{fileNumber}`:

1. ❌ **`motherName`** → `null` (يجب أن يكون: `"777777"`)
2. ❌ **`dateOfBirth`** → `null` (يجب أن يكون: `"1978-06-16T00:00:00"`)
3. ❌ **`recruitmentCenter`** → `null` (يجب أن يكون: `"777"`)
4. ❌ **`bloodType`** → `null` (يجب أن يكون: `"A-"`)
5. ❌ **`queueNumber`** → `null` (يجب أن يكون: `4`)
6. ❌ **`maritalStatus`** → `null` (يجب أن يكون كائن `MaritalStatus` مع `maritalStatusID` و `description`)
7. ❌ **`createdAt`** → موجود لكن يجب التأكد من وجوده دائماً

### البيانات المفقودة في `finalDecision`:

8. ❌ **`receptionAddedAt`** → `null` (يجب أن يكون تاريخ إضافة القرار من الريسبشن)
9. ❌ **`supervisorAddedAt`** → `null` (يجب أن يكون تاريخ إضافة القرار من المشرف)
10. ❌ **`supervisorLastModifiedAt`** → `null` (يجب أن يكون تاريخ آخر تعديل من المشرف)
11. ⚠️ **`isExportedToRecruitment`** → موجود لكن يجب التأكد من قيمته الصحيحة
12. ❌ **`exportedAt`** → `null` (يجب أن يكون تاريخ التصدير عند التصدير)

---

## ✅ المطلوب

### 1. توحيد البيانات الأساسية

يجب أن يرجع `/api/Applicants/Details/{fileNumber}` **نفس البيانات** التي يرجعها `/api/Applicants?filter=xxx`:

```json
{
  "applicantID": 67,
  "fileNumber": "F0001057",
  "fullName": "77",
  "motherName": "777777",           // ✅ يجب أن يكون موجود
  "dateOfBirth": "1978-06-16T00:00:00", // ✅ يجب أن يكون موجود
  "recruitmentCenter": "777",      // ✅ يجب أن يكون موجود
  "bloodType": "A-",               // ✅ يجب أن يكون موجود
  "queueNumber": 4,                // ✅ يجب أن يكون موجود
  "maritalStatusID": 1,
  "maritalStatus": {               // ✅ يجب أن يكون كائن كامل
    "maritalStatusID": 1,
    "description": "أعزب"
  },
  "createdAt": "2025-11-19T00:39:41.057", // ✅ التأكد من وجوده
  // ... باقي الحقول
}
```

### 2. إصلاح بيانات `finalDecision`

يجب أن يحتوي `finalDecision` على جميع التواريخ المطلوبة:

```json
{
  "finalDecision": {
    "decisionID": 7,
    // ... باقي الحقول
    "receptionAddedAt": "2025-11-19T00:39:41.057",      // ✅ تاريخ إضافة من الريسبشن
    "supervisorAddedAt": "2025-11-20T10:30:00.000",     // ✅ تاريخ إضافة من المشرف
    "supervisorLastModifiedAt": "2025-11-20T15:45:00.000", // ✅ تاريخ آخر تعديل
    "isExportedToRecruitment": false,                    // ✅ حالة التصدير
    "exportedAt": null                                   // ✅ تاريخ التصدير (null إذا لم يتم التصدير)
  }
}
```

---

## 📋 ملخص التغييرات المطلوبة

### في DTO الخاص بـ `/api/Applicants/Details/{fileNumber}`:

1. ✅ إضافة `motherName` من جدول `Applicants`
2. ✅ إضافة `dateOfBirth` من جدول `Applicants`
3. ✅ إضافة `recruitmentCenter` من جدول `Applicants`
4. ✅ إضافة `bloodType` من جدول `Applicants`
5. ✅ إضافة `queueNumber` من جدول `Applicants`
6. ✅ إضافة `maritalStatus` ككائن كامل (ليس فقط `maritalStatusID`)
7. ✅ التأكد من وجود `createdAt`

### في DTO الخاص بـ `finalDecision`:

8. ✅ إضافة `receptionAddedAt` من جدول `FinalDecisions`
9. ✅ إضافة `supervisorAddedAt` من جدول `FinalDecisions`
10. ✅ إضافة `supervisorLastModifiedAt` من جدول `FinalDecisions`
11. ✅ التأكد من `isExportedToRecruitment` و `exportedAt`

---

## 🎯 النتيجة المتوقعة

بعد الإصلاح، يجب أن يكون `/api/Applicants/Details/{fileNumber}` **مطابق 100%** لبيانات `/api/Applicants?filter=xxx` من ناحية:
- البيانات الأساسية (motherName, dateOfBirth, recruitmentCenter, bloodType, queueNumber, maritalStatus)
- بيانات finalDecision (جميع التواريخ)

---

## 📝 ملاحظات

- يجب استخدام نفس الـ **Projection** أو **Select** المستخدم في `/api/Applicants`
- يجب التأكد من أن جميع الحقول المطلوبة موجودة في الـ DTO
- يجب التأكد من أن `maritalStatus` يُرجع ككائن كامل وليس فقط ID

---

**تاريخ الطلب:** 2025-11-20  
**الأولوية:** عالية 🔴  
**الحالة:** في انتظار الإصلاح

