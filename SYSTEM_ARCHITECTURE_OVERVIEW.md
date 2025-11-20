# نظرة عامة على بنية النظام - Military Health System

## 📋 نظرة عامة
نظام إدارة صحي عسكري مبني على Angular 20 مع دعم RTL (من اليمين لليسار) للغة العربية. يدير النظام عمليات الاستقبال، الفحوصات الطبية، الاستشارات، والملفات الطبية للمنتسبين.

---

## 🏗️ البنية المعمارية

### 1. **البنية الأساسية (Core)**
```
src/app/core/
├── guards/          # حماية المسارات (Route Guards)
├── interceptors/    # معالجة الطلبات HTTP
├── layout/          # مكونات التخطيط الأساسية
├── models/          # النماذج الأساسية
└── services/        # الخدمات الأساسية
```

#### **Guards (الحماية)**
- **`auth-guard.ts`**: يتحقق من:
  - وجود token صالح (Authentication)
  - صلاحيات المستخدم (Authorization) بناءً على الأدوار
  - إعادة التوجيه للصفحات المناسبة

#### **Interceptors (المعالجات)**
1. **`auth.interceptor.ts`**:
   - إضافة token لكل طلب HTTP تلقائياً
   - معالجة 401 Unauthorized
   - تجديد token تلقائياً عند انتهاء الصلاحية
   - Timeout للطلبات (30 ثانية)

2. **`loading.inspector.ts`**:
   - عرض/إخفاء مؤشر التحميل تلقائياً
   - مدة دنيا للعرض (300ms) لتجنب الوميض

#### **Layout Components (مكونات التخطيط)**
- **`layout.ts`**: التخطيط الرئيسي (Sidebar + Topbar + Content)
- **`sidebar.ts`**: القائمة الجانبية مع تحديد الأدوار:
  - Doctor_Eye, Doctor_Internal, Doctor_Surgery, Doctor_Orthopedics, Doctor_Ear
  - Admin, Receptionist, Supervisor, Diwan
- **`topbar.ts`**: شريط علوي مع معلومات المستخدم وخيارات تسجيل الخروج

#### **Services الأساسية**
- **`loading.service.ts`**: إدارة حالة التحميل (BehaviorSubject)

---

### 2. **الميزات (Features)**

#### **A. Authentication (المصادقة)**
```
features/auth/
├── components/
│   ├── login/           # صفحة تسجيل الدخول
│   └── unauthorized/    # صفحة غير مصرح
└── services/
    └── auth.service.ts  # خدمة المصادقة الرئيسية
```

**`auth.service.ts`** الوظائف:
- `login()`: تسجيل الدخول مع حفظ tokens
- `logout()`: تسجيل الخروج
- `isAuthenticated()`: التحقق من صحة token
- `isAuthorizated()`: التحقق من الصلاحيات
- `getUserRole()`: جلب دور المستخدم
- `getSpecializationId()`: جلب ID التخصص (للأطباء)
- `getDoctorId()`: جلب ID الطبيب
- حفظ في localStorage: access_token, refresh_token, doctor_specialty, doctorId

**التوجيه بعد تسجيل الدخول:**
- Admin → `/admin/dashboard`
- Receptionist → `/reception/applicants/add`
- Doctor → `/doctor/{specialty}` (eye/internal/surgery/orthopedics/ear)
- Diwan → `/archive`

---

#### **B. Reception (الاستقبال)**
```
features/reception/
├── components/
│   ├── applicants-list/      # قائمة المنتسبين
│   └── add-edit-applicant/    # إضافة/تعديل منتسب
├── models/
│   ├── applicant.model.ts
│   └── applicants-statistics-response.model.ts
└── services/
    ├── applicant.service.ts
    └── marital-status.service.ts
```

**الوظائف:**
- إضافة/تعديل/عرض المنتسبين
- البحث والفلترة
- إحصائيات المنتسبين
- Pagination

**Routes:**
- `/reception/applicants` - قائمة المنتسبين
- `/reception/applicants/add` - إضافة منتسب جديد
- `/reception/applicants/:id` - تعديل منتسب

---

#### **C. Doctor (الأطباء)**
```
features/doctor/
├── components/
│   ├── eye-doctor.component/        # عيادة العيون
│   ├── internal-doctor.component/   # العيادة الداخلية
│   ├── surgery-doctor.component/    # الجراحة
│   ├── orthopedics-doctor.component/# العظام
│   ├── ear-doctor.component/        # الأنف والأذن
│   ├── Consultations/               # الاستشارات
│   └── Investigations/              # التحقيقات
├── services/
│   ├── eye-exam.service.ts
│   ├── internal-exam.service.ts
│   ├── surgical-exam.service.ts
│   ├── orthopedic-exam.service.ts
│   └── ear-clinic-exam.service.ts
└── models/                          # نماذج الفحوصات
```

**التخصصات الطبية:**
1. **Eye (العيون)**: `/doctor/eye`
   - فحوصات العيون
   - Refractions (انكسارات)
   - استشارات
   - فحوصات مؤجلة

2. **Internal (الداخلية)**: `/doctor/internal`
   - فحوصات داخلية
   - أدوية
   - استشارات

3. **Surgery (الجراحة)**: `/doctor/surgery`
   - فحوصات جراحية
   - سجلات
   - استشارات

4. **Orthopedics (العظام)**: `/doctor/orthopedics`
   - فحوصات عظام
   - فحوصات مؤجلة
   - استشارات

5. **Ear (الأنف والأذن)**: `/doctor/ear`
   - فحوصات الأنف والأذن
   - فحوصات مؤجلة
   - استشارات

**الخدمات المشتركة لكل تخصص:**
- إضافة/تعديل/عرض الفحوصات
- إدارة الاستشارات (Consultations)
- إدارة التحقيقات (Investigations)
- رفع الملفات (File Upload)
- Pagination والفلترة

---

#### **D. Admin (المسؤول)**
```
features/admin/
├── dashboard/              # لوحة التحكم
├── final-applicant-list/   # قائمة المنتسبين النهائية
└── services/
    └── final-decisions.service.ts
```

**Routes:**
- `/admin/dashboard` - لوحة التحكم
- `/admin/final` - القرارات النهائية

---

#### **E. Archive (الأرشيف)**
```
features/archive/
├── components/
│   ├── archive-list/       # قائمة الأرشيف
│   ├── applicant-profile/  # ملف المنتسب
│   └── edit-archive/       # تعديل الأرشيف
├── models/
│   └── archive.model.ts
└── services/
    └── archive.ts
```

**Route:**
- `/archive` - عرض الأرشيف (مخصص لـ Diwan)

---

#### **F. Supervisor (المشرف)**
```
features/supervisor/
├── components/
│   └── supervisor/         # لوحة المشرف
├── models/
│   └── final-decision.model.ts
└── services/
    └── decision.service.ts
```

**Route:**
- `/supervisor` - لوحة المشرف

---

### 3. **المكونات المشتركة (Shared)**

#### **Components**
- **`generic-table`**: جدول عام قابل لإعادة الاستخدام
  - Pagination
  - البحث والفلترة
  - إضافة/تعديل/حذف
  - Export
  - Bulk operations

- **`paginator`**: مكون Pagination مخصص

#### **Services**
- **`data-sharing.ts`**: مشاركة البيانات بين المكونات
- **`lookup.service.ts`**: جلب البيانات المرجعية (Results)
- **`file-upload.ts`**: رفع الملفات

#### **Models**
- **`paged-response.model.ts`**: نموذج الاستجابة مع Pagination
- **`column-def.model.ts`**: تعريف أعمدة الجدول
- **`result.model.ts`**: نموذج النتائج

---

## 🔐 نظام الأمان والصلاحيات

### **الأدوار (User Roles)**
```typescript
enum UserRoles {
  Admin = 'Admin',           // المسؤول
  Receptionist = 'Receptionist',  // أمين الاستقبال
  Doctor = 'Doctor',        // الطبيب
  Supervisor = 'Supervisor', // المشرف
  Diwan = 'Diwan'           // الديوان
}
```

### **آلية الحماية:**
1. **Authentication**: التحقق من token في كل طلب
2. **Authorization**: التحقق من الصلاحيات بناءً على الدور
3. **Route Guards**: حماية المسارات تلقائياً
4. **Token Refresh**: تجديد تلقائي عند انتهاء الصلاحية

---

## 🌐 التكامل مع API

### **Base URL**
```typescript
environment.apiUrl = "https://devdef-1.runasp.net"
```

### **Endpoints الرئيسية:**
- `/api/auth/login` - تسجيل الدخول
- `/api/auth/refresh` - تجديد token
- `/api/auth/logout` - تسجيل الخروج
- `/api/Applicants` - إدارة المنتسبين
- `/api/EyeExams` - فحوصات العيون
- `/api/InternalExams` - الفحوصات الداخلية
- `/api/SurgicalExams` - الفحوصات الجراحية
- `/api/OrthopedicExams` - فحوصات العظام
- `/api/EarClinicExams` - فحوصات الأنف والأذن
- `/api/Consultations` - الاستشارات
- `/api/Investigations` - التحقيقات
- `/api/FileUpload/upload` - رفع الملفات
- `/api/Results` - النتائج
- `/api/Specializations` - التخصصات

---

## 🎨 التقنيات المستخدمة

### **Frontend Framework**
- Angular 20 (Standalone Components)
- TypeScript 5.9
- RxJS 7.8

### **UI Libraries**
- PrimeNG 20.0.1 (مكونات UI)
- PrimeFlex 4.0.0 (CSS Utilities)
- Bootstrap 5.3.7
- FontAwesome 7.0.0
- ngx-toastr 19.0.0 (الإشعارات)
- SweetAlert2 11.22.5 (الحوارات)

### **Utilities**
- jwt-decode 4.0.0 (فك تشفير JWT)
- @ng-select/ng-select 20.1.3 (قوائم منسدلة)

---

## 📁 هيكل المشروع الكامل

```
src/
├── app/
│   ├── core/                    # المكونات الأساسية
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── layout/
│   │   ├── models/
│   │   └── services/
│   │
│   ├── features/                # الميزات
│   │   ├── auth/               # المصادقة
│   │   ├── reception/          # الاستقبال
│   │   ├── doctor/             # الأطباء
│   │   ├── admin/              # المسؤول
│   │   ├── archive/            # الأرشيف
│   │   ├── supervisor/         # المشرف
│   │   └── applicants/         # المنتسبين
│   │
│   └── shared/                 # المكونات المشتركة
│       ├── components/
│       ├── models/
│       ├── pipes/
│       └── services/
│
├── assets/                      # الملفات الثابتة
├── environments/                # إعدادات البيئة
└── styles.scss                  # الأنماط العامة
```

---

## 🔄 تدفق العمل (Workflow)

### **1. تسجيل الدخول:**
```
User → Login Form → AuthService.login() 
→ API → JWT Token → localStorage 
→ Route based on Role
```

### **2. إضافة منتسب:**
```
Receptionist → Add Applicant Form 
→ ApplicantService.createApplicant() 
→ API → Success/Error Toast
```

### **3. فحص طبي:**
```
Doctor → Select Specialty → Exam Form 
→ ExamService.addExam() → API 
→ Consultation/Investigation if needed
```

### **4. عرض البيانات:**
```
Component → Service.getData$() 
→ API → PagedResponse 
→ Table Component → Pagination
```

---

## 🛠️ الميزات الرئيسية

1. **Lazy Loading**: تحميل المكونات عند الحاجة
2. **Standalone Components**: مكونات مستقلة بدون NgModules
3. **Reactive Forms**: نماذج تفاعلية
4. **RxJS Observables**: برمجة تفاعلية
5. **Type Safety**: TypeScript كامل
6. **RTL Support**: دعم اللغة العربية
7. **Responsive Design**: تصميم متجاوب
8. **Error Handling**: معالجة شاملة للأخطاء
9. **Loading States**: حالات تحميل واضحة
10. **Toast Notifications**: إشعارات للمستخدم

---

## 📝 ملاحظات مهمة

1. **Token Management**: Tokens محفوظة في localStorage
2. **Auto Refresh**: تجديد تلقائي للـ token عند 401
3. **Role-based Routing**: توجيه تلقائي بناءً على الدور
4. **Specialty Detection**: للأطباء، يتم تحديد التخصص من username أو specializationID
5. **File Upload**: رفع الملفات عبر FormData
6. **Pagination**: جميع القوائم تدعم Pagination
7. **Global Filtering**: بحث عام في الجداول

---

## 🚀 التشغيل

```bash
# التطوير
npm start

# البناء للإنتاج
npm run build:prod

# معاينة البناء
npm run preview
```

---

## 📊 إحصائيات المشروع

- **Total Components**: ~100+ مكون
- **Services**: ~15 خدمة
- **Routes**: ~50+ مسار
- **Models**: ~30 نموذج
- **Features**: 6 ميزات رئيسية

---

تم إنشاء هذا المستند بناءً على تحليل شامل لكود النظام.
