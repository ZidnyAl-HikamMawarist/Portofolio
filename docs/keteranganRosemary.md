Viewed composer.json:1-99
Viewed web.php:1-28
Listed directory routes
Viewed auth.php:1-150
Viewed auth.php:151-260
Listed directory Porto
Viewed RoleSeeder.php:1-163
Listed directory Models
Viewed AppSetting.php:1-34
Listed directory seeders
Viewed AppSettingSeeder.php:1-55
Viewed ProductSeeder.php:1-60
Viewed LoginPin.php:1-60
Viewed LoginPin.php:60-130

Berikut adalah panduan dan materi deskripsi proyek **RoseMarry** yang dirancang khusus agar terlihat profesional, berbobot teknis tinggi, dan sangat memikat bagi industri/perusahaan tempat Anda mendaftar **PKL (Praktek Kerja Lapangan)**.

---

### 1. Format untuk Web Portofolio (Section Project Card & Detail Modal)

Gunakan format ini pada card proyek dan modal/halaman detail di web portofolio Anda:

#### **Judul Proyek**
> **RoseMarry — Smart POS & Teaching Factory ERP System**

#### **Tagline / Subtitle**
> *Sistem Manajemen Terpadu Point of Sale (POS), Inventaris & Produksi Teaching Factory Berbasis Laravel 12 & Livewire 3.*

#### **Ringkasan Proyek (Overview)**
> **RoseMarry** adalah aplikasi web mini-ERP dan Kasir (POS) yang dirancang untuk mengotomatisasi operasional unit usaha sekolah (*Teaching Factory* tata boga/kuliner/retail). Sistem ini mengintegrasikan presensi shift siswa secara otomatis saat login kasir berbasis PIN, pencatatan Bill of Materials (BOM) produksi, pelacakan inventaris bahan baku & produk jadi, hingga manajemen limbah (*waste tracking*) dan laporan keuangan real-time.

#### **Tech Stack (Badges/Tags)**
* **Backend:** PHP 8.2+, Laravel 12, Eloquent ORM
* **Frontend:** Livewire 3.7, Blade UI Kit, Alpine.js, Tailwind/Vanilla CSS
* **Security & Auth:** Dual Authentication (Laravel Auth + Custom Session PIN Guard), Spatie Laravel-Permission (RBAC)
* **Database & Export:** MySQL, Maatwebsite Excel (PhpSpreadsheet)

#### **Fitur Utama (Key Features)**
1. **Smart POS dengan Otentikasi PIN & Shift:**
   * Login kasir cepat menggunakan 4-digit PIN khusus siswa.
   * Validasi jadwal shift harian otomatis: siswa hanya dapat bertransaksi pada jam shift aktif dengan toleransi keterlambatan.
   * Presensi siswa (kehadiran & keterlambatan) langsung tercatat saat login kasir berhasil.
2. **Manajemen Produksi & Resep (Bill of Materials / BOM):**
   * Perhitungan otomatis konsumsi bahan baku saat produk jadi diproduksi.
   * Pencatatan *waste/loss* (bahan terbuang) untuk akurasi HPP dan stok.
3. **Multi-Level Inventory Control:**
   * Pemisahan kategori *Raw Materials* (Bahan Baku) dan *Finished Goods* (Produk Siap Jual).
   * Riwayat mutasi stok (*stock logs*), batas minimum stok (*low-stock alert*), dan fitur penyesuaian stok (*stock adjustment*) berizin khusus.
4. **Role-Based Access Control (RBAC):**
   * Pengaturan hak akses dinamis berbasis peran (Admin, Production, Inventory, Cashier) menggunakan *Spatie Laravel-Permission*.
5. **Pelaporan & Analitik:**
   * Rekap penjualan, pembelian, produksi, serta ekspor laporan ke format Excel.
6. **In-App User Manual & Guide:**
   * Modul panduan terintegrasi dengan FAQ dan visual panduan untuk memudahkan siswa yang baru bertugas.

---

### 2. Format untuk CV (Curriculum Vitae PKL)

Tuliskan pada bagian **Pengalaman Proyek (Project Experience)** di CV Anda dengan format berbasis aksi (*action verbs*) dan pencapaian teknis:

```markdown
RoseMarry – Smart POS & Teaching Factory ERP System
Full-Stack Web Developer | Laravel 12, Livewire 3, MySQL, Spatie Permission
• Mengembangkan sistem ERP & Point of Sale (POS) terintegrasi untuk operasional Teaching Factory sekolah menggunakan Laravel 12 dan Livewire 3.
• Merancang modul kasir cepat dengan autentikasi 4-digit PIN yang terintegrasi langsung dengan jadwal shift dan presensi otomatis siswa.
• Mengimplementasikan Role-Based Access Control (RBAC) multi-level menggunakan Spatie Permission untuk 4 peran kerja (Admin, Kasir, Inventaris, Produksi).
• Membangun sistem inventaris presisi tinggi dengan pelacakan mutasi bahan baku (raw materials), produk jadi, kalkulasi Bill of Materials (BOM), dan pencatatan waste/loss.
• Mengembangkan antarmuka interaktif Single Page Application (SPA-like) tanpa reload halaman memanfaatkan kapabilitas Livewire 3.
• Menyediakan fitur ekspor laporan analitik penjualan, pengadaan, dan stok ke dalam format Excel menggunakan Maatwebsite Excel.
```

---

### 3. One-Liner / Pitch Pendek (Cocok untuk Bio LinkedIn / Ringkasan Singkat)

> *"Mengembangkan RoseMarry, sistem mini-ERP & Smart POS berbasis Laravel 12 dan Livewire 3 yang memadukan manajemen inventaris, otomasi resep produksi (BOM), dan presensi shift siswa melalui autentikasi PIN."*

---

### 4. Nilai Tambah Teknis untuk Wawancara PKL (Interview Cheat Sheet)

Jika saat seleksi PKL penguji atau HR bertanya *"Ceritakan tantangan terbesar atau hal paling menarik dari proyek RoseMarry ini"*, Anda bisa menjelaskan poin-poin berikut:

1. **Dual Auth Mechanism**: 
   * *"Saya membuat dua sistem autentikasi terpisah: Login konvensional berbasis email/password untuk Administrator/Staf, serta login kilat 4-digit PIN untuk siswa kasir."*
2. **Validasi Shift & Presensi Real-Time**: 
   * *"Siswa tidak bisa sembarangan login ke kasir jika tidak terdaftar pada jadwal hari itu, dan sistem otomatis mendeteksi apakah siswa hadir tepat waktu atau terlambat berdasarkan toleransi menit shift."*
3. **Komputasi Bahan Baku (BOM)**:
   * *"Saya menghubungkan relasi antara bahan mentah dan produk jadi, sehingga setiap ada produksi barang, stok bahan otomatis berkurang dan tercatat dalam log audit."*
4. **Modern Stack**:
   * *"Proyek ini sudah dibangun menggunakan versi terbaru Laravel 12 dan Livewire 3, sehingga performanya sangat responsif tanpa memerlukan framework frontend terpisah yang rumit."*