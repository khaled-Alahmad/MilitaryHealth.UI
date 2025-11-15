# 🚀 دليل نشر التطبيق على كمبيوتر آخر

## 📦 الخطوة 1: بناء التطبيق

في الكمبيوتر الحالي، نفذ:

```bash
npm run build
```

سيتم إنشاء المجلد: `dist/browser/`

---

## 📁 الخطوة 2: نقل الملفات

### انسخ المجلد الكامل:
```
dist/browser/
```

### المحتويات المطلوبة:
- ✅ `index.html`
- ✅ جميع ملفات `.js`
- ✅ جميع ملفات `.css`
- ✅ `START.bat` ⭐ (تم إنشاؤه تلقائياً)
- ✅ `README_DEPLOYMENT.txt`

**انسخ المجلد كاملاً** إلى الكمبيوتر الثاني

---

## 🎯 الخطوة 3: التشغيل على الكمبيوتر الثاني

### الطريقة الأسهل (مستحسنة) ⭐

1. افتح المجلد `browser`
2. **اضغط دبل كليك** على: `START.bat`
3. ✅ سيفتح المتصفح تلقائياً!

البرنامج سيتحقق تلقائياً من:
- Node.js (الخيار الأول)
- Python (الخيار البديل)
- ويختار الأنسب تلقائياً!

---

## ⚙️ المتطلبات

### يجب أن يكون مثبت أحد الخيارات التالية:

#### الخيار 1️⃣: Node.js (مستحسن)
- تحميل من: https://nodejs.org
- حجم: ~30 MB
- سهل التثبيت

#### الخيار 2️⃣: Python
- تحميل من: https://www.python.org
- أو قد يكون مثبت مسبقاً على Windows

---

## 🔧 طرق تشغيل بديلة

### إذا لم يعمل START.bat:

#### استخدام Command Prompt:

**مع Node.js:**
```bash
cd path\to\browser
npx http-server -p 8080 -o
```

**مع Python:**
```bash
cd path\to\browser
python -m http.server 8080
```

ثم افتح المتصفح: `http://localhost:8080`

---

## 🌐 نشر على سيرفر حقيقي

### أ) Windows Server + IIS

1. افتح **IIS Manager**
2. Right-click على **Sites** → **Add Website**
3. في **Physical path**: اختر مجلد `browser`
4. في **Port**: ضع `80` أو `8080`
5. اضغط **OK**
6. Start الموقع
7. افتح: `http://server-ip`

### ب) Linux + Nginx

```bash
# 1. انسخ الملفات
sudo cp -r browser/* /var/www/html/military-health/

# 2. أنشئ ملف config
sudo nano /etc/nginx/sites-available/military-health

# 3. أضف:
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html/military-health;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# 4. فعّل الموقع
sudo ln -s /etc/nginx/sites-available/military-health /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### ج) Linux + Apache

```bash
# 1. انسخ الملفات
sudo cp -r browser/* /var/www/html/military-health/

# 2. أنشئ .htaccess
sudo nano /var/www/html/military-health/.htaccess

# 3. أضف:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# 4. أعد تشغيل Apache
sudo systemctl restart apache2
```

---

## ❌ حل المشاكل الشائعة

### المشكلة 1: "CORS Policy Error"
```
❌ الخطأ: Access to script blocked by CORS policy
✅ الحل: لا تفتح index.html مباشرة! استخدم START.bat
```

### المشكلة 2: "Node.js not found"
```
❌ الخطأ: 'node' is not recognized
✅ الحل: 
   1. ثبت Node.js من https://nodejs.org
   2. أعد تشغيل Command Prompt
   3. جرب مرة أخرى
```

### المشكلة 3: "Port 8080 already in use"
```
❌ الخطأ: Port 8080 is already in use
✅ الحل: 
   - غيّر البورت في START.bat
   - من: http-server -p 8080
   - إلى: http-server -p 8090
```

### المشكلة 4: "Application loads but shows blank page"
```
❌ المشكلة: الصفحة فاضية
✅ الحل:
   1. تأكد من build صحيح: npm run build
   2. تأكد من نسخ المجلد browser كاملاً
   3. افتح Console في المتصفح (F12) وشوف الأخطاء
```

---

## 📝 ملاحظات هامة

### ⚠️ لا تنسى:

1. **نسخ المجلد كاملاً** - لا تنسخ ملفات منفردة
2. **استخدام web server** - لا تفتح index.html مباشرة
3. **تحديث المتصفح** - استخدم Chrome أو Edge أو Firefox حديث
4. **البورت المناسب** - تأكد أن البورت متاح (8080 افتراضياً)

### ✅ مميزات START.bat:

- 🔍 يكتشف Node.js و Python تلقائياً
- 🚀 يثبت http-server تلقائياً (أول مرة فقط)
- 🌐 يفتح المتصفح تلقائياً
- 📊 يعرض رسائل واضحة بالعربي والإنجليزي

---

## 🎯 خطوات سريعة (TL;DR)

```bash
# في الكمبيوتر الأول:
npm run build

# انسخ المجلد: dist/browser/

# في الكمبيوتر الثاني:
# دبل كليك على: START.bat

# هيك خلص! 🎉
```

---

## 📞 الدعم الفني

إذا واجهت أي مشكلة:

- 📧 Email: support@militaryhealth.sy
- 📱 Phone: [رقم الدعم]
- 🕐 Hours: الأحد - الخميس، 8 ص - 4 م

---

## 📚 موارد إضافية

- [دليل المستخدم الكامل](./USER_MANUAL.md)
- [التوثيق التقني](./TECHNICAL_DOCUMENTATION.md)
- [Angular Deployment Guide](https://angular.io/guide/deployment)

---

**✅ تم إنشاء هذا الدليل بواسطة: فريق التطوير**  
**📅 آخر تحديث: نوفمبر 2025**

---

## 🎉 مبروك!

إذا وصلت لهنا ومشي معك، يعني التطبيق شغال! 🚀

**استمتع باستخدام نظام الصحة العسكرية** 🏥

