# 🎬 دليل سريع: معرض الفيديوهات

## ⚡ البدء السريع

### عرض معرض الفيديوهات
```
الرابط: #video-gallery
أو اضغط على "الفيديوهات" في القائمة
```

---

## 📝 إضافة فيديو جديد (30 ثانية)

### الخطوة 1: احصل على معرف الفيديو
```
من YouTube:
https://www.youtube.com/watch?v=ABC123XYZ
استخرج: ABC123XYZ
```

### الخطوة 2: أضف الكود
```html
<div class="video-item" data-filter="projects">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/ABC123XYZ" 
            title="عنوان"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="video-info">
        <h3>عنوان الفيديو هنا</h3>
        <p>وصف قصير للفيديو</p>
        <span class="video-category">المشاريع</span>
    </div>
</div>
```

### الخطوة 3: احفظ الملف
```
اضغط: Ctrl+S
```

**خلاص! الفيديو موجود الآن!** ✅

---

## 🏷️ التصنيفات المتاحة

| الكود | الاسم | مثال |
|------|-------|------|
| `projects` | المشاريع | أعمال سابقة |
| `tutorials` | دليل الصيانة | نصائح العناية |
| `testimonials` | تقييمات العملاء | آراء العملاء |
| `all` | جميع الفيديوهات | يظهر الكل |

**مثال:**
```html
data-filter="projects"      <!-- في المشاريع -->
data-filter="tutorials"     <!-- في الدروس -->
data-filter="testimonials"  <!-- في التقييمات -->
```

---

## 🎨 تخصيص التصنيفات

### إضافة تصنيف جديد

1. **أضف زر تصفية:**
```html
<button class="filter-btn" data-filter="my-category">
    اسم التصنيف
</button>
```

2. **استخدم نفس الاسم في الفيديوهات:**
```html
<div class="video-item" data-filter="my-category">
```

---

## 🌈 تغيير الألوان

### في ملف `css/style.css`، عدّل:

```css
:root {
    --primary-color: #1a7a4f;      /* اللون الأخضر الرئيسي */
    --secondary-color: #2a9968;    /* اللون الأخضر الثانوي */
    --accent-color: #f4a61a;       /* اللون الذهبي */
}
```

### أمثلة ألوان:
```css
الأزرق: #2196F3
الأحمر: #F44336
الأرجواني: #9C27B0
البرتقالي: #FF9800
الأخضر الفاتح: #4CAF50
```

---

## 🖼️ استخدام صورة بدل الفيديو

```html
<div class="video-item" data-filter="projects">
    <div class="video-wrapper">
        <div class="video-thumbnail" 
             style="background: url('صورة.jpg') center/cover;">
            <div class="play-button">▶</div>
            <span class="duration">4:30</span>
        </div>
    </div>
    <div class="video-info">
        ...
    </div>
</div>
```

---

## 📱 الحجم والاستجابة

| الجهاز | الحجم | العرض |
|--------|-------|-------|
| موبايل | 320px | عمود واحد |
| تابلت | 768px | عمودين |
| ديسكتوب | 1024px | 3 أعمدة |

---

## 🎯 أمثلة عملية

### مثال 1: فيديو مشروع

```html
<div class="video-item" data-filter="projects">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="video-info">
        <h3>حديقة منزل جديدة</h3>
        <p>مشروع تنسيق حديقة منزلية جديدة مع ديوانية</p>
        <span class="video-category">المشاريع</span>
    </div>
</div>
```

### مثال 2: فيديو تعليمي

```html
<div class="video-item" data-filter="tutorials">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/xyz123abc" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="video-info">
        <h3>كيفية الاعتناء بالثيل الصناعي</h3>
        <p>نصائح احترافية للحفاظ على الثيل الصناعي لفترة أطول</p>
        <span class="video-category">دليل الصيانة</span>
    </div>
</div>
```

### مثال 3: فيديو شهادة عميل

```html
<div class="video-item" data-filter="testimonials">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/test456def" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="video-info">
        <h3>رأي أحمد من الفروانية</h3>
        <p>عميل راضي جداً عن الخدمة والاحترافية</p>
        <span class="video-category">تقييمات العملاء</span>
    </div>
</div>
```

---

## ⚠️ أخطاء شائعة

### ❌ خطأ 1: معرف فيديو خاطئ
```
❌ https://youtu.be/ABC123
✅ ABC123 (فقط الجزء الأخير)
```

### ❌ خطأ 2: عدم إغلاق الـ iframe
```
❌ <iframe src="...">
✅ <iframe src="..."></iframe>
```

### ❌ خطأ 3: data-filter مختلف
```
❌ الزر: data-filter="projects"
❌ الفيديو: data-filter="Project"
✅ الاثنين متطابقين: projects
```

---

## 🔍 اختبار التصفية

### تحقق من:
1. اضغط على الزر "المشاريع" - يجب أن تظهر فقط المشاريع
2. اضغط على "دليل الصيانة" - يجب أن تظهر فقط دروس الصيانة
3. اضغط على "جميع الفيديوهات" - يجب أن تظهر كل الفيديوهات

إذا لم تعمل: تحقق من `data-filter` في الأزرار والفيديوهات

---

## 📊 نصائح الأداء

### استخدم فيديوهات YouTube
```
✅ موثوق
✅ سريع
✅ آمن
✅ بدون مشاكل الاستضافة
```

### تجنب الفيديوهات الضخمة
```
❌ فيديو بحجم 500MB = بطيء
✅ استخدم YouTube أو Vimeo
```

### حد أقصى من الفيديوهات
```
نصيحة: 6-12 فيديو أفضل من 100 فيديو
التركيز على الجودة > الكمية
```

---

## 🚀 ميزات متقدمة

### إضافة حلقة تشغيل
```html
<iframe 
    src="https://www.youtube.com/embed/ABC123?loop=1" 
    ...>
</iframe>
```

### إضافة قائمة تشغيل
```html
<iframe 
    src="https://www.youtube.com/embed/videoseries?list=PLxxxxxx" 
    ...>
</iframe>
```

### بدء الفيديو من ثانية معينة
```html
<iframe 
    src="https://www.youtube.com/embed/ABC123?start=30" 
    ...>
</iframe>
```

---

## 📞 الدعم

### للأسئلة:
- 📞 +965 6656 8372
- 📧 malmwd38@gmail.com
- 💬 WhatsApp

### للمشاكل:
1. تحقق من console (F12)
2. تأكد من `data-filter` متطابقة
3. تأكد من معرف الفيديو صحيح
4. احفظ الملف بعد التعديل

---

**هذا الدليل يكفي لـ 99% من الحالات!** ✨
