Listed directory leosEvent
Viewed README.md:1-60
Viewed PLAN_README.md:1-231
Viewed composer.json:1-91
Viewed package.json:1-22
Viewed web.php:1-85
Listed directory Models
Listed directory Controllers
Listed directory Admin
Viewed PendaftaranController.php:1-100
Viewed PendaftaranController.php:140-180
Listed directory User
Viewed PageController.php:1-100
Viewed PageController.php:101-179
Viewed DuplicateCheckerService.php:1-151

Berikut adalah beberapa opsi format keterangan proyek **"Leo's Event"** yang dirancang khusus untuk kebutuhan **CV PKL (Praktek Kerja Lapangan / Magang)** maupun **Web Portofolio / GitHub**. 

Kamu bisa memilih format yang paling sesuai dengan layout CV kamu:

---

### 📌 Opsi 1: Format Standar CV (ATS-Friendly / Ringkas & Kuat)
*Cocok ditaruh di bagian **"Pengalaman Proyek" (Projects)** pada CV 1 halaman.*

> **Leo's Event – Sistem Informasi Manajemen Event & Pendaftaran Lomba Terpadu**  
> *Full-Stack Web Developer | Laravel 12, PHP, MySQL, Tailwind CSS, Alpine.js*
> - Mengembangkan platform manajemen lomba multi-event tahunan yang memfasilitasi alur pendaftaran peserta, publikasi jadwal, dan sistem engagement audiens secara terpusat.
> - Mengimplementasikan sistem deteksi pendaftaran ganda (*DuplicateCheckerService*) berbasis normalisasi string alfanumerik cerdas untuk mencegah redudansi peserta.
> - Membangun fitur automasi penutupan registrasi berbasis jadwal *Technical Meeting* (TM) serta generator Lembar Presensi / Daftar Hadir siap cetak format PDF (*DomPDF*).
> - Menyediakan modul import massal data peserta via Excel (*SimpleXLSX*) dengan sistem *batch rollback*, serta ekspor laporan pendaftar ke format Excel dan PDF.
> - Merancang fitur interaktif audiens seperti *Polling/Voting* peserta terfavorit dengan proteksi *rate-limiting*, serta *Virtual Cheer Wall* (pesan dukungan).
> - Mengembangkan Content Management System (CMS) admin yang dinamis untuk kustomisasi banner hero, FAQ, galeri dokumentasi, dan pengaturan alur pendaftaran.

---

### 📌 Opsi 2: Format Paragraf Ringkas (Untuk CV Desain / Kreatif)
*Cocok untuk bagian ringkasan proyek (Summary / Overview) di CV kreatif atau Canva:*

> **Leo's Event (Web-Based Event Management System)**  
> **Tech Stack:** Laravel 12, Tailwind CSS, Alpine.js, MySQL, DomPDF, Vite.  
> Aplikasi web terpadu untuk pengelolaan perlombaan dan event tahunan secara end-to-end. Memiliki fitur pendaftaran online cerdas dengan validasi anti-duplikat, otomatisasi penutupan registrasi saat *Technical Meeting*, sistem voting peserta terfavorit dengan proteksi spam, serta panel admin lengkap untuk import-ekspor data pendaftar (Excel/PDF) dan pencetakan otomatis lembar presensi lomba.

---

### 📌 Opsi 3: Format Detail (Untuk Lampiran Portofolio, GitHub README, atau Notion)
*Gunakan versi ini jika kamu melampirkan berkas portofolio terpisah, link GitHub, atau saat sesi wawancara PKL:*

#### 🎯 **Overview Proyek**
**Leo's Event** adalah platform berbasis web yang dibangun untuk mendigitalkan seluruh siklus pengelolaan event perlombaan, mulai dari publikasi informasi, pendaftaran peserta online, validasi data, hingga rekapitulasi data panitia di hari pelaksanaan.

#### 🛠️ **Teknologi yang Digunakan:**
- **Backend Framework:** Laravel 12 (PHP 8.2+)
- **Frontend & UI:** Blade Templating, Tailwind CSS, Alpine.js
- **Database & ORM:** MySQL, Eloquent ORM
- **Fitur Khusus / Library:**
  - *Barryvdh Laravel-DomPDF*: Otomasi cetak dokumen presensi A4 dan laporan PDF.
  - *SimpleXLSX & SimpleXLSXGen*: Import massal & ekspor data peserta via spreadsheet tanpa membebani memori server.
  - *Cache & Rate Limiting*: Mengoptimalkan performa halaman dan mengamankan sistem polling suara.

#### 🚀 **Fitur Utama yang Dikembangkan:**
1. **Smart Registration & Anti-Duplicate Engine**: Algoritma pencocokan alfanumerik otomatis untuk menyaring data nama, asal sekolah, dan nomor kontak yang terindikasi ganda.
2. **Automated TM Deadline**: Pendaftaran otomatis terkunci ketika waktu *Technical Meeting* telah tiba, meminimalisir pendaftar susulan ilegal.
3. **Presence Sheet & Report Generator**: Fitur satu-klik untuk mencetak lembar daftar hadir / presensi lomba format PDF yang rapi untuk panitia lapangan.
4. **Excel Import with Rollback Safety**: Panel admin mampu memasukkan ratusan peserta dari form luar sekaligus, lengkap dengan fitur pembatalan (*rollback*) per batch jika terjadi kesalahan file.
5. **Interactive Audience Engagement**: Modul *Virtual Cheer Wall* untuk pesan semangat dan sistem *Polling Peserta Favorit* dengan perlindungan anti-spam/throttling.
6. **Multi-Year Event Architecture**: Struktur data dirancang modular sehingga data event tahun-tahun sebelumnya tetap tersimpan rapi sebagai arsip digital.

---

### 💡 Tips Menjawab Saat Ditanya Interviewer PKL:
Jika pewawancara menanyakan: *"Apa tantangan terbesar dan kontribusi utamamu di proyek ini?"*, kamu bisa menjawab:
> *"Tantangan menarik di proyek ini adalah pada validasi data peserta. Saya merancang algoritma **DuplicateCheckerService** untuk mendeteksi kesamaan data peserta meskipun format penulisan nama atau sekolahnya sedikit berbeda. Selain itu, saya menambahkan fitur **Batch Rollback** pada import Excel agar jika admin salah upload file, data bisa dikembalikan dalam 1 klik tanpa merusak database."*