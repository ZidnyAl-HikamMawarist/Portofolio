Viewed package.json:1-32
Listed directory src
Viewed README.md:1-162

Berikut adalah beberapa format deskripsi proyek **EcoVision AI** yang siap Anda gunakan untuk **CV PKL**, portofolio online (Notion/GitHub/LinkedIn), maupun dokumen lampiran portofolio:

---

### Pilihan 1: Format CV Standar / ATS-Friendly (Sangat Direkomendasikan untuk CV PKL)

Gunakan format ini di bagian **Projects** / **Pengalaman Proyek** pada lembar CV Anda:

> **EcoVision AI – Smart Waste Classification & Sustainability Web App**  
> *Full-stack Developer & AI Integrator* | `Next.js 16`, `TypeScript`, `Tailwind CSS`, `Google Gemini API`, `MySQL`  
> * [Tautan GitHub / Demo jika ada]
>
> - **Merancang & mengembangkan** aplikasi web pemilah sampah berbasis AI multimodal menggunakan **Next.js 16 (App Router)** dan **TypeScript** untuk membantu klasifikasi sampah dan rekomendasi daur ulang.
> - **Mengintegrasikan Google Gemini 2.5 Flash Vision API** untuk menganalisis foto sampah secara *real-time*, menghasilkan identifikasi jenis sampah, masa urai, instruksi penanganan ramah lingkungan, serta estimasi kalkulasi *CO₂ offset*.
> - **Membangun AI Eco-Assistant & Testing Dashboard**, mencakup fitur chatbot interaktif multimodal serta modul validasi akurasi model berbasis pengujian dataset secara *batch*.
> - **Mengimplementasikan arsitektur *Dual Storage Mode***, memungkinkan aplikasi beroperasi dengan database **MySQL + autentikasi JWT (HTTP-only cookies)** untuk pengguna terdaftar, serta mode instan *Guest Mode* via **localStorage**.
> - **Menerapkan *clean architecture*** dengan pemisahan *service layer* (Factory Pattern), *Knowledge Engine* lokal untuk 9 kategori sampah, serta UI dwibahasa (ID/EN) dan *Dark Mode*.

---

### Pilihan 2: Format Ringkas (Jika Ruang di CV Terbatas)

Cocok jika Anda memiliki halaman CV yang padat (1 halaman):

> **EcoVision AI – Web Pemilah Sampah Cerdas Berbasis AI Multimodal**  
> *Tech Stack: Next.js 16, TypeScript, Google Gemini API, MySQL, Tailwind CSS*  
> - Mengembangkan platform klasifikasi sampah real-time dengan integrasi LLM Vision (Gemini 2.5 Flash) dan pelacak dampak lingkungan (*CO₂ offset*).
> - Mengimplementasikan sistem autentikasi JWT terproteksi dan fleksibilitas *Dual Storage* (MySQL & Browser LocalStorage).
> - Membangun fitur evaluasi model mandiri (*Batch Testing Dashboard*) untuk menguji dan memvalidasi akurasi klasifikasi gambar terhadap dataset.

---

### Pilihan 3: Format Deskripsi Portofolio Lengkap (Untuk Web Portfolio, Notion, atau LinkedIn)

Gunakan format ini di situs portofolio pribadi, README GitHub, atau postingan LinkedIn:

> ### 🌍 EcoVision AI — Solusi Cerdas Pengelolaan Sampah Berbasis AI
> 
> **Tentang Proyek:**  
> EcoVision AI adalah aplikasi web full-stack modern yang dirancang untuk mengatasi persoalan pemilahan sampah melalui kecerdasan artifisial. Proyek ini dikembangkan dengan standar kompetisi (Ekshibisi AI LKS Nasional) untuk menyajikan solusi ramah lingkungan yang edukatif dan interaktif.
> 
> **Peran & Tanggung Jawab:**  
> - Merancang arsitektur aplikasi end-to-end dari frontend, API routing, integrasi AI, hingga skema basis data.
> - Mengimplementasikan sistem *computer vision prompt engineering* menggunakan Gemini 2.5 Flash untuk deteksi objek sampah, estimasi masa urai, dan estimasi reduksi jejak karbon (CO₂).
> - Membangun dashboard evaluasi akurasi (*Model Testing*) yang memungkinkan pengujian massal dataset gambar untuk mengukur performa prediksi AI.
> - Mengembangkan sistem autentikasi aman berbasis JWT (HTTP-Only Cookie) dan mekanisme *fallback storage* (Guest Mode) agar aplikasi tetap dapat dicoba tanpa registrasi.
> 
> **Teknologi Utama:**  
> - **Frontend & Backend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
> - **Artificial Intelligence:** Google Gemini 2.5 Flash (`@google/genai`)
> - **Database & Auth:** MySQL 8 (`mysql2`), Database Migrations, JWT Authentication
> - **Desain & UX:** Responsive Layout, Dark/Light Mode, Bilingual (Indonesia & English)

---

### Pilihan 4: Elevator Pitch / Ringkasan Singkat (1–2 Kalimat)
Cocok untuk ditaruh di *Summary/Tentang Saya* atau *caption* media sosial:

> *"Mengembangkan **EcoVision AI**, platform web full-stack cerdas berbasis Next.js 16 dan Gemini Multimodal API yang mampu mengidentifikasi jenis sampah via foto, menghitung estimasi dampak jejak karbon, serta menyediakan chatbot edukasi lingkungan dengan dukungan arsitektur database MySQL dan Guest Mode."*

---

### 💡 Tips Menghadapi Wawancara PKL Terkait Proyek Ini:
Jika pewawancara menanyakan proyek ini saat interview, siapkan jawaban di 3 poin kuat:
1. **AI Integration**: Jelaskan bagaimana Anda memproses gambar dengan Gemini API dan mem-parsing hasilnya ke dalam format terstruktur (JSON/TypeScript types).
2. **Arsitektur Dual Storage**: Jelaskan mengapa Anda membuat mode MySQL + LocalStorage (memudahkan demo penguji tanpa setup DB, namun tetap siap produksi dengan database relasional).
3. **Problem Solving**: Proyek ini memiliki dampak nyata (edukasi pemilahan sampah dan pelacakan jejak karbon), bukan sekadar aplikasi CRUD biasa.