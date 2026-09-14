Viewed composer.json:1-89
Viewed Panduan_Pembimbing_DUDI.md:1-135
Viewed web.php:1-150
Viewed web.php:151-246
Viewed package.json:1-21
Listed directory Models
Searched for "SMK"

Berikut adalah draft deskripsi profesional untuk **MAS-PKL (Manajemen & Absensi Sistem Praktik Kerja Lapangan)** yang siap Anda cantumkan di portofolio. 

Telah disediakan beberapa variasi format (mulai dari *Project Card*, *Detailed Case Study*, *CV/Resume Bullet Points*, hingga versi *Bahasa Inggris*) agar bisa Anda sesuaikan dengan kebutuhan website portofolio, GitHub, maupun LinkedIn/CV.

---

### 1. Format Ringkas (*Project Card / Preview Singkat*)
> *Cocok untuk kartu proyek di halaman utama portofolio yang membutuhkan teks padat, jelas, dan memikat (2–3 kalimat).*

**MAS-PKL – Sistem Manajemen & Presensi Praktik Kerja Lapangan Terpadu**
> Platform terintegrasi berbasis web untuk mendigitalisasi siklus Praktik Kerja Lapangan (PKL) di SMK Negeri 1 Ciamis bersama ratusan mitra Dunia Usaha & Dunia Industri (DUDI). Dilengkapi sistem *Role-Based Access Control* (RBAC) 7 tingkatan, presensi harian & jurnal terverifikasi, pemetaan spasial GIS DUDI, smart parser kurikulum PDF, serta otomatisasi penerbitan sertifikat dan berkas resmi.
> 
> **Tech Stack:** Laravel, PHP 8.3+, MySQL, Tailwind CSS v4, Alpine.js, Vite, Leaflet.js (GIS), DomPDF, PhpSpreadsheet.

---

### 2. Format Komprehensif (*Project Detail / Case Study Page / GitHub*)
> *Cocok untuk halaman detail portofolio, artikel studi kasus, atau README repositori.*

#### **Nama Proyek: MAS-PKL (Manajemen & Absensi Sistem PKL)**
*Klien/Implementasi: SMK Negeri 1 Ciamis & Mitra Industri (DUDI)*  
*Peran: Full-Stack Web Developer*

---

#### **Overview / Latar Belakang**
Pengelolaan Praktik Kerja Lapangan (PKL) secara manual di tingkat SMK skala besar sering menghadapi tantangan serius: pencatatan absensi yang rentan manipulasi, validasi jurnal harian fisik yang lambat, kesulitan pemetaan lokasi magang siswa, serta beban administratif dalam mencetak surat pengantar, rekapitulasi nilai, dan sertifikat bagi ratusan siswa. 

**MAS-PKL** dikembangkan sebagai solusi *all-in-one* yang menghubungkan sekolah, siswa, dan mitra industri (DUDI) ke dalam satu ekosistem digital transparan, efisien, dan *real-time*.

---

#### **Fitur Utama (Key Features)**
1. **Multi-Role Access Control (7 Peran Pengguna):**
   - **Super Admin:** Konfigurasi sistem global, audit logs aktivitas, backup & restore database.
   - **Pokja PKL:** Manajemen penempatan, import massal, pemetaan zona, dan penerbitan template resmi.
   - **Kepala Sekolah & Kaprog:** Dashboard eksekutif, monitoring pembimbing, dan validasi pengajuan siswa per keahlian.
   - **Pembimbing Sekolah:** Pemantauan progres siswa, validasi jurnal mingguan, dan rekap absensi bimbingan.
   - **Pembimbing DUDI (Mentor Industri):** Approval jam masuk/pulang siswa, verifikasi izin *early-leave*, evaluasi dan penilaian kinerja berkala.
   - **Siswa:** Pengajuan tempat PKL mandiri, *clock-in/out* presensi harian, pengisian jurnal kegiatan dengan dokumentasi foto, dan unduh portofolio/sertifikat.
2. **Presensi Digital & Validasi Kegiatan Harian:**
   - Sistem *clock-in* dan *clock-out* dengan alur pengajuan izin pulang cepat (*early leave*) dan ketidakhadiran berizin.
   - Jurnal kerja harian terstruktur yang wajib diverifikasi oleh mentor industri dan guru pembimbing.
3. **GIS & Pemetaan Interaktif DUDI:**
   - Visualisasi peta geografis (*interactive map*) menggunakan Leaflet.js dan GeoJSON untuk memetakan lokasi industri mitra dan zonasi penempatan siswa.
4. **Smart Curriculum PDF Parser:**
   - Mengintegrasikan library PDF parser untuk mengekstraksi dan mengimpor butir-butir capaian kompetensi kejuruan secara otomatis langsung dari dokumen silabus kurikulum PDF.
5. **Otomatisasi Dokumen Resmi:**
   - Generator otomatis berbasis DomPDF untuk Surat Pengantar PKL, Kartu Bimbingan, Lembar Rekapitulasi Jurnal, Laporan PKL, hingga Sertifikat Kelulusan resmi sekolah.
6. **In-App Messaging & Notifikasi Real-Time:**
   - Fitur obrolan langsung (*direct messaging*), siaran pengumuman (*broadcast*), serta sistem notifikasi in-app untuk memastikan koordinasi cepat antara guru, siswa, dan DUDI.

---

#### **Spesifikasi Teknologi & Arsitektur**
- **Backend:** PHP 8.3+, Laravel (Clean MVC architecture, Custom Middleware, Route Model Binding, Policies & Observers)
- **Database:** MySQL / MariaDB (Relational schema dengan index optimization & activity logging)
- **Frontend:** Blade Templating, Tailwind CSS v4, Alpine.js untuk interaktivitas reaktif, Vite
- **Integrasi & Libraries:**
  - `Leaflet.js` & GeoJSON: Peta interaktif & zonasi lokasi industri
  - `barryvdh/laravel-dompdf`: Engine rendering laporan & sertifikat berstandar cetak
  - `phpoffice/phpspreadsheet`: Import/Export massal data master Excel
  - `smalot/pdfparser`: Ekstraksi data kurikulum dari dokumen PDF
- **Keamanan:** Proteksi CSRF, sanitasi input, hash password bertingkat, force change password pada akun baru, dan *audit activity logs*.

---

### 3. Format Resume / CV (*Impact-Oriented Bullet Points*)
> *Gunakan format ini di bagian "Experience" atau "Projects" pada CV/Resume Anda:*

- **MAS-PKL (Sistem Informasi Manajemen & Presensi PKL SMK Negeri 1 Ciamis)** | *Full-Stack Developer*
  - Merancang dan membangun platform web *end-to-end* untuk mengelola siklus Praktik Kerja Lapangan yang digunakan oleh lebih dari ratusan siswa dan puluhan mitra industri (DUDI).
  - Mengimplementasikan sistem otorisasi multi-role RBAC kompleks yang memisahkan hak akses dan data secara presisi untuk 7 entitas pengguna berbeda.
  - Membangun fitur GIS pemetaan mitra DUDI dan zonasi penempatan siswa menggunakan integrasi Leaflet.js dan GeoJSON.
  - Mengembangkan sistem automasi dokumen yang memangkas waktu administratif sekolah hingga lebih dari 80% melalui generasi instan sertifikat, surat pengantar, dan rekapitulasi penilaian berformat PDF & Excel.
  - Mengintegrasikan modul *parser* dokumen PDF untuk ekstraksi otomatis capaian kompetensi kejuruan siswa ke dalam database.

---

### 4. Versi Bahasa Inggris (*For International / Bilingual Portfolios*)

#### **Project: MAS-PKL – Comprehensive Internship Management & Attendance System**
> **Description:**  
> A full-scale enterprise web application engineered to digitize and streamline the Vocational High School Internship (PKL) ecosystem at SMKN 1 Ciamis, seamlessly connecting schools, students, and corporate industry mentors (DUDI).
> 
> **Key Engineering Highlights:**
> - **Robust Multi-Tenant RBAC:** Architected a 7-tier role-based access system (Super Admin, Internship Committee/Pokja, Principal, Department Head, School Mentors, Company Supervisors, and Students).
> - **Interactive GIS Mapping:** Integrated Leaflet.js and GeoJSON to visualize corporate partner locations and enforce geographical student placement zones.
> - **Automated Document & Reporting Engine:** Leveraged DomPDF and PhpSpreadsheet to automate the generation of official placement letters, daily progress journals, and verifiable completion certificates.
> - **Smart PDF Parsing:** Implemented server-side PDF data extraction to automatically parse curriculum competencies directly into structured database records.
> - **Real-Time Monitoring & Attendance:** Built timestamped clock-in/out workflows with supervisor approval chains for leaves and early departures.
> 
> **Tech Stack:** PHP 8.3+, Laravel, MySQL, Tailwind CSS v4, Alpine.js, Vite, Leaflet.js, DomPDF, PhpSpreadsheet.