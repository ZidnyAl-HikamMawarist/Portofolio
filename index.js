/**
 * PORTOFOLIO PRIBADI — ZIDNY AL HIKAM M. (SMKN 1 CIAMIS / LAMPIRAN CV PKL)
 * Modern Vanilla JavaScript Architecture (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. THEME TOGGLE ENGINE (DARK / LIGHT MODE) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeMetaTag = document.querySelector('meta[name="theme-color"]');
  const STORAGE_KEY = 'zidny_portfolio_theme';

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (themeMetaTag) {
      themeMetaTag.setAttribute('content', theme === 'dark' ? '#0b0f19' : '#f8fafc');
    }
  };

  // Initial Theme Application
  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(`Tema berganti ke ${nextTheme === 'dark' ? 'Mode Gelap' : 'Mode Terang'}`, 'info');
    });
  }

  // Listen for OS system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });


  // --- 2. STICKY NAVBAR & SCROLL SPY ---
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ScrollSpy with IntersectionObserver
  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }
  );

  sections.forEach((sec) => scrollSpyObserver.observe(sec));


  // --- 3. MOBILE DRAWER NAVIGATION ---
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileCvBtn = document.getElementById('btn-mobile-cv');

  const openMobileMenu = () => {
    mobileNav?.classList.add('active');
    mobileNavBackdrop?.classList.add('active');
    mobileMenuBtn?.classList.add('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileNav?.classList.remove('active');
    mobileNavBackdrop?.classList.remove('active');
    mobileMenuBtn?.classList.remove('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav?.classList.contains('active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileNavBackdrop?.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

  // Close mobile drawer on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav?.classList.contains('active')) {
      closeMobileMenu();
    }
  });


  // --- 4. SCROLL REVEAL ANIMATION ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));


  // --- 5. PROJECTS FILTERING ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });


  // --- 6. DETAILED REAL PROJECTS DATA (FROM DOCS/) ---
  const projectsData = {
    'mas-pkl': {
      title: 'MAS-PKL: Sistem Manajemen & Presensi PKL Terpadu',
      category: 'Enterprise & Web Application',
      image: 'images/pkl.png',
      fallbackImage: '',
      role: 'Full-Stack Web Developer',
      client: 'SMK Negeri 1 Ciamis & Mitra Industri (DUDI)',
      desc: 'MAS-PKL adalah platform terpadu berbasis web yang mengotomatisasi seluruh siklus Praktik Kerja Lapangan (PKL) di SMK Negeri 1 Ciamis bersama ratusan siswa dan puluhan mitra industri (DUDI). Mengintegrasikan presensi digital berkoordinat, jurnal harian terverifikasi foto, zonasi spasial GIS mitra DUDI, smart parser kurikulum PDF, dan penerbitan sertifikat kelulusan resmi.',
      problem: 'Pengelolaan PKL manual sebelumnya menggunakan buku jurnal fisik yang rentan rusak/hilang, validasi kehadiran yang lambat, kesulitan memetakan lokasi ratusan siswa di dunia industri, serta beban administrasi besar dalam mencetak surat pengantar, kartu bimbingan, dan sertifikat.',
      architecture: [
        'Arsitektur Clean MVC Laravel 11 dengan PHP 8.3+, Custom Middleware, Route Model Binding, Policies & Observers.',
        'Sistem otorisasi multi-role Role-Based Access Control (RBAC) 7 level pengguna: Super Admin, Pokja PKL, Kepala Sekolah/Kaprog, Pembimbing Sekolah, Pembimbing DUDI, dan Siswa.',
        'Pemetaan spasial interaktif menggunakan Leaflet.js dan GeoJSON untuk memvisualisasikan lokasi mitra industri serta zonasi penempatan siswa.',
        'Smart PDF Parser (smalot/pdfparser) untuk mengekstraksi dan mengimpor capaian kompetensi kejuruan secara otomatis langsung dari dokumen silabus kurikulum PDF.',
        'Generator dokumen resmi otomatis berbasis DomPDF dan PhpSpreadsheet yang memangkas waktu kerja administrasi sekolah > 80%.'
      ],
      features: [
        'Presensi harian siswa (Clock-in/out) dengan alur izin pulang cepat (early leave) dan ketidakhadiran berizin.',
        'Pengisian jurnal kerja harian terstruktur dengan bukti dokumentasi foto kegiatan.',
        'Sistem verifikasi berjenjang oleh mentor industri dan guru pembimbing sekolah.',
        'In-App Messaging (obrolan langsung), siaran pengumuman (broadcast), dan notifikasi real-time.',
        'Penerbitan otomatis Surat Pengantar PKL, Lembar Rekap Jurnal, Laporan PKL, dan Sertifikat Kelulusan resmi.'
      ],
      stack: ['PHP 8.3+', 'Laravel 11', 'MySQL', 'Tailwind CSS v4', 'Alpine.js', 'Vite', 'Leaflet.js GIS', 'DomPDF', 'PhpSpreadsheet'],
      github: 'https://github.com/Sentinel-SMKN1CIAMIS/sistem-pkl',
      demo: '#'
    },

    'ecovision-ai': {
      title: 'EcoVision AI: Smart Waste Classification & Sustainability Web App',
      category: 'AI Multimodal & Full-Stack Application',
      image: 'images/ecovision.png',
      fallbackImage: '',
      role: 'Full-Stack Developer & AI Integrator',
      client: 'Proyek Inovasi Kompetisi AI LKS Tingkat Provinsi Jawa Barat',
      desc: 'Aplikasi web full-stack modern yang dirancang untuk mengatasi persoalan pemilahan sampah melalui kecerdasan artifisial multimodal. Dibangun dengan standar kompetisi (Ekshibisi AI LKS Jawa Barat) untuk menyajikan edukasi lingkungan yang interaktif dan actionable.',
      problem: 'Kurangnya kesadaran dan pengetahuan masyarakat dalam memilah jenis sampah secara tepat, serta ketiadaan metrik visual untuk mengukur dampak pengurangan jejak karbon dari aksi daur ulang.',
      architecture: [
        'Frontend & Backend terintegrasi menggunakan Next.js 16 (App Router), React 19, dan TypeScript dengan standar Type-Safety tinggi.',
        'Integrasi Google Gemini 2.5 Flash Vision API (@google/genai) dengan prompt engineering presisi untuk klasifikasi sampah, estimasi masa urai, dan kalkulasi reduksi emisi karbon (CO₂ offset).',
        'Arsitektur Dual Storage Mode: mendukung database MySQL 8 dengan autentikasi aman JWT (HTTP-only cookies) untuk user terdaftar, serta mode instan Guest Mode via browser LocalStorage.',
        'Clean architecture dengan pemisahan service layer (Factory Pattern) dan Knowledge Engine lokal untuk 9 kategori sampah.',
        'Batch Testing Dashboard untuk pengujian mandiri performa dan akurasi model AI terhadap kumpulan dataset gambar.'
      ],
      features: [
        'Klasifikasi jenis sampah via unggah/kamera foto secara real-time.',
        'Kalkulator estimasi masa urai sampah dan potensi pengurangan jejak karbon (CO₂).',
        'Chatbot interaktif multimodal (AI Eco-Assistant) untuk konsultasi daur ulang barang bekas.',
        'Testing Dashboard untuk validasi batch akurasi prediksi model terhadap dataset gambar.',
        'Antarmuka dwibahasa (Indonesia & English) dengan dukungan mode Gelap/Terang.'
      ],
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini 2.5 Flash', 'MySQL 8', 'JWT Auth', 'Tailwind CSS'],
      github: 'https://github.com/PradiptaPPLG/ECOVISION-AI',
      demo: '#'
    },

    'rosemarry': {
      title: 'RoseMarry: Smart POS & Teaching Factory ERP System',
      category: 'Enterprise & Mini-ERP',
      image: 'images/RoseMary.png',
      fallbackImage: '',
      role: 'Full-Stack Web Developer',
      client: 'Teaching Factory Unit Usaha Sekolah (Tata Boga & Ritel)',
      desc: 'Aplikasi web mini-ERP dan Point of Sale (POS) cerdas yang dirancang untuk mengotomatisasi operasional unit usaha sekolah (Teaching Factory). Mengintegrasikan login kasir kilat berbasis 4-digit PIN yang otomatis mencatat presensi shift siswa, otomasi resep produksi (Bill of Materials / BOM), pelacakan inventaris bahan baku, hingga pencatatan waste/loss dan laporan laba-rugi.',
      problem: 'Unit usaha sekolah sering mengalami kesulitan melacak penggunaan bahan mentah saat produksi makanan/barang jadi, kebocoran inventaris akibat pencatatan stok manual, serta kesulitan memantau kedisiplinan shift siswa yang bertugas di kasir.',
      architecture: [
        'Dibangun dengan versi modern Laravel 12 dan Livewire 3.7 untuk menghasilkan antarmuka reaktif SPA-like tanpa reload halaman.',
        'Mekanisme Dual Authentication: login konvensional email/password untuk Administrator/Staf, serta login kilat 4-digit PIN khusus siswa kasir.',
        'Role-Based Access Control (RBAC) multi-level menggunakan Spatie Laravel-Permission untuk 4 peran kerja (Admin, Kasir, Inventaris, Produksi).',
        'Relasi database presisi tinggi untuk kalkulasi otomatis konsumsi bahan baku saat produk jadi dibuat, serta audit log mutasi stok.'
      ],
      features: [
        'Smart POS dengan validasi jadwal shift harian: siswa hanya dapat bertransaksi pada jam shift aktif dengan toleransi keterlambatan.',
        'Presensi kehadiran dan keterlambatan siswa tercatat otomatis saat login kasir berhasil.',
        'Perhitungan resep produksi (Bill of Materials / BOM) otomatis mengurangi stok bahan baku dan mencatat waste/loss untuk akurasi HPP.',
        'Multi-level inventory control dengan pemisahan Raw Materials dan Finished Goods serta low-stock alerts.',
        'Ekspor rekap analitik penjualan, pengadaan bahan, dan stok barang ke format Excel (Maatwebsite Excel).'
      ],
      stack: ['PHP 8.2+', 'Laravel 12', 'Livewire 3.7', 'MySQL', 'Spatie Permission', 'Tailwind CSS', 'Alpine.js', 'Maatwebsite Excel'],
      github: 'https://github.com/Wisnu-click/Rosemary',
      demo: '#'
    },

    'artika-pos': {
      title: 'ARTIKA POS: Sistem Kasir & Manajemen Stok Terintegrasi',
      category: 'Retail POS & Enterprise System',
      image: 'images/artika.png',
      fallbackImage: '',
      role: 'Full Stack Web Developer',
      client: 'Tim Pengembang RPL SMKN 1 Ciamis',
      desc: 'Aplikasi kasir (Point of Sale) dan manajemen gudang retail modern berbasis web. Didesain untuk menjawab kebutuhan transaksi kasir berkecepatan tinggi dengan navigasi full-keyboard dan barcode scanner, pemisahan logika bisnis melalui Service Layer & Repository Pattern, serta pembukuan akuntansi otomatis.',
      problem: 'Proses kasir ritel konvensional yang lambat karena ketergantungan pada klik mouse, ketidaksesuaian jumlah stok fisik dengan sistem, dan lamanya waktu pembukuan jurnal debit/kredit bulanan.',
      architecture: [
        'Arsitektur backend modular menerapkan MVC, Service Layer, dan Repository Pattern untuk memastikan kode bersih, terpisah dari kontroler, dan mudah dirawat.',
        'Sistem Role-Based Access Control (RBAC) 5 tingkat hak akses (Superadmin, Admin, Manager, Cashier, Warehouse) dengan Audit Log komprehensif.',
        'Keamanan teruji: proteksi CSRF, enkripsi password Bcrypt, dan secure image re-encoding untuk mencegah eksploitasi file upload.',
        'Integrasi barcode scanner USB dan sistem event listener keyboard shortcuts (F1–F9).'
      ],
      features: [
        'Modul kasir cepat dengan pencarian instan, pemindaian barcode, dan shortcut tombol fungsi tanpa mouse.',
        'Fitur Hold Transaction untuk menahan antrian pelanggan saat ada kendala pembayaran tanpa membatalkan transaksi.',
        'Manajemen stok real-time, modul penyesuaian fisik (stock opname), notifikasi stok menipis, dan import massal data barang via Excel.',
        'Pembukuan otomatis jurnal debit/kredit dan generator laporan penjualan harian/bulanan ke format PDF dan CSV.'
      ],
      stack: ['PHP 8.2+', 'Laravel 12', 'Bootstrap 5.3', 'PostgreSQL/MySQL', 'JavaScript', 'Vite', 'DomPDF', 'Maatwebsite Excel'],
      github: 'https://github.com/rasyakt/ARTIKA',
      demo: '#'
    },

    'leos-event': {
      title: "Leo's Event: Manajemen Event & Registrasi Lomba Terpadu",
      category: 'Event Management & Audience Platform',
      image: 'images/leos.png',
      fallbackImage: '',
      role: 'Full-Stack Web Developer',
      client: 'Penyelenggara Event & Perlombaan Tahunan Sekolah',
      desc: 'Platform perlombaan multi-event tahunan terpadu yang memfasilitasi alur pendaftaran peserta online, publikasi jadwal dan ketentuan lomba, serta interaksi penonton secara digital.',
      problem: 'Sering terjadinya manipulasi data pendaftaran peserta ganda dari sekolah yang sama, keterlambatan pencetakan berkas presensi di hari H lomba, dan sulitnya mengelola import massal pendaftar eksternal tanpa risiko error data.',
      architecture: [
        'Algoritma anti-duplikat cerdas (DuplicateCheckerService) berbasis normalisasi string alfanumerik untuk menyaring redudansi pendaftar secara otomatis.',
        'Pendaftaran otomatis terkunci ketika batas waktu Technical Meeting (TM) telah tiba untuk mencegah pendaftar susulan ilegal.',
        'Modul import massal spreadsheet via SimpleXLSX dengan fitur Batch Rollback sekali klik jika terjadi kesalahan unggah berkas.',
        'Arsitektur multi-year event yang menjaga arsip data event tahun-tahun sebelumnya tetap terisolasi dengan rapi.'
      ],
      features: [
        'Formulir pendaftaran interaktif cerdas dengan validasi anti-duplikat real-time.',
        'Fitur satu-klik untuk mencetak lembar daftar hadir / presensi lomba format PDF A4 rapi untuk panitia lapangan.',
        'Modul interaktif Virtual Cheer Wall untuk pesan dukungan dan sistem Polling Peserta Favorit dengan proteksi anti-spam/throttling.',
        'Panel Content Management System (CMS) dinamis untuk pengelolaan banner, galeri, pengumuman, dan pengaturan lomba.'
      ],
      stack: ['Laravel 12', 'PHP 8.2+', 'Alpine.js', 'Tailwind CSS', 'MySQL', 'DomPDF', 'SimpleXLSX', 'Vite'],
      github: 'https://github.com/ZidnyAl-HikamMawarist/leosEvent',
      demo: '#'
    },

    'summitgear': {
      title: 'SummitGear: Point of Sale & Outdoor Rental Management System',
      category: 'Enterprise & Point of Sale',
      image: 'images/summit.png',
      fallbackImage: '',
      role: 'Full-Stack Web Developer',
      client: 'Sistem Manajemen Usaha Rental & Petualangan Luar Ruangan',
      desc: 'SummitGear adalah sistem ERP persewaan alat outdoor terintegrasi yang menyederhanakan siklus operasional bisnis rental alam bebas. Sistem ini menghubungkan calon pendaki untuk reservasi alat secara mandiri, melayani transaksi langsung kasir walk-in, memonitor siklus kontrol mutu (QC) alat di gudang, serta dilengkapi protokol keamanan 2FA Google Authenticator untuk administrator.',
      problem: 'Bisnis rental alat outdoor konvensional sering terkendala pencatatan manual via WhatsApp/kertas yang menyebabkan bentrok jadwal barang (double booking), pelacakan alat rusak atau kotor yang tidak terpantau, serta rawan kebocoran kas akibat keterlambatan tanpa sistem hitung denda dan deposit yang akurat.',
      architecture: [
        'Arsitektur reaktif modern berbasis Laravel dengan Livewire dan Flux UI untuk interaktivitas instan tanpa reload.',
        'Role-Based Access Control (RBAC) 4 peran pengguna: Super Admin, Kasir Utama, Staf Gudang, dan Pelanggan Publik.',
        'Protokol keamanan tingkat tinggi: Google Authenticator 2FA (RFC 6238), otorisasi PIN cepat kasir, rate limiting, dan Audit Trail aktivitas.',
        'Manajemen operasional gudang berbasis visual Kanban board untuk melacak status peralatan (Pembersihan, Servis, Siap Sewa, Disewa).',
        'Mesin kalkulasi otomatis denda harian sewa, restitusi uang jaminan (deposit), dan generator invoice PDF ber-QR Code via DomPDF.',
        'Validasi kualitas dan regresi menggunakan automated End-to-End (E2E) testing dengan Playwright.'
      ],
      features: [
        'Portal Reservasi & Booking Online interaktif untuk eksplorasi katalog dan tanggal sewa.',
        'Antarmuka Kasir Point of Sale (POS) cepat untuk transaksi sewa langsung dan validasi jaminan KTP/SIM.',
        'Pusat Kontrol Mutu (QC) & Kanban Maintenance Lifecycle alat outdoor pasca-kembali.',
        'Sistem Login Super Admin terlindungi Google Authenticator 2FA dan Emergency Recovery Codes.',
        'Cetak Bukti Transaksi, Surat Perjanjian Sewa, dan Nota Pengembalian berformat PDF + QR Code.',
        'Dashboard Analitik Omzet, Utilisasi Alat Terlaris, dan Laporan Rekapitulasi Keuangan.'
      ],
      stack: ['Laravel', 'Livewire', 'Flux UI', 'Tailwind CSS', 'Google 2FA', 'DomPDF', 'Bacon QR Code', 'Playwright E2E'],
      github: 'https://github.com/ZidnyAl-HikamMawarist/SummitGear',
      demo: 'https://summit.zidny.web.id/'
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('modal-body');
  const projectModalCategory = document.getElementById('modal-category');
  const projectModalTitle = document.getElementById('modal-title');
  const projectModalCloseBtn = document.getElementById('modal-close-btn');

  const openProjectModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data || !projectModal || !projectModalBody) return;

    projectModalCategory.textContent = data.category;
    projectModalTitle.textContent = data.title;

    projectModalBody.innerHTML = `
      <div class="modal-project-media">
        <img 
          src="${data.image}" 
          alt="${data.title}" 
          onerror="this.onerror=null; ${data.fallbackImage ? `this.src='${data.fallbackImage}';` : "this.style.display='none';"}"
        >
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Peran & Implementasi</h4>
        <p class="modal-block-text"><strong>${data.role}</strong> &bull; <em>${data.client}</em></p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Deskripsi Proyek</h4>
        <p class="modal-block-text">${data.desc}</p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Latar Belakang & Masalah yang Diselesaikan</h4>
        <p class="modal-block-text">${data.problem}</p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Arsitektur & Pendekatan Teknis</h4>
        <ul class="modal-features-list">
          ${data.architecture.map((item) => `
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Fitur-Fitur Unggulan</h4>
        <ul class="modal-features-list">
          ${data.features.map((feat) => `
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${feat}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Teknologi yang Digunakan</h4>
        <div class="project-stack">
          ${data.stack.map((stk) => `<span class="stack-badge">${stk}</span>`).join('')}
        </div>
      </div>

      <div class="modal-actions-row">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>Buka Repositori GitHub</span>
        </a>
        ${data.demo && data.demo !== '#' ? `
          <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Buka Sistem</span>
          </a>
        ` : ''}
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    projectModal?.classList.remove('open');
    projectModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach modal trigger buttons
  document.querySelectorAll('[data-project]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      if (projId) openProjectModal(projId);
    });
  });

  projectModalCloseBtn?.addEventListener('click', closeProjectModal);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });


  // --- 7. CV PREVIEW & DOWNLOAD MODAL SYSTEM ---
  const cvModal = document.getElementById('cv-modal');
  const openCvBtnHeader = document.getElementById('btn-open-cv-modal');
  const openCvBtnHero = document.getElementById('hero-btn-download-cv');
  const cvModalCloseBtn = document.getElementById('cv-modal-close-btn');
  const printCvBtn = document.getElementById('btn-print-cv');

  const openCvModal = () => {
    cvModal?.classList.add('open');
    cvModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCvModal = () => {
    cvModal?.classList.remove('open');
    cvModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openCvBtnHeader?.addEventListener('click', openCvModal);
  openCvBtnHero?.addEventListener('click', openCvModal);
  if (mobileCvBtn) {
    mobileCvBtn.addEventListener('click', () => {
      closeMobileMenu();
      openCvModal();
    });
  }

  cvModalCloseBtn?.addEventListener('click', closeCvModal);
  cvModal?.addEventListener('click', (e) => {
    if (e.target === cvModal) closeCvModal();
  });

  // Print CV handler
  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Universal Escape key listener for open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal?.classList.contains('open')) closeProjectModal();
      if (cvModal?.classList.contains('open')) closeCvModal();
    }
  });


  // --- 8. COPY EMAIL TO CLIPBOARD ---
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const emailTextEl = document.getElementById('email-text');

  if (copyEmailBtn && emailTextEl) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailTextEl.textContent?.trim() || 'zidni.hikam1@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyEmailBtn.classList.add('copied');
        showToast('Alamat email berhasil disalin ke clipboard!', 'success');
        setTimeout(() => {
          copyEmailBtn.classList.remove('copied');
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyEmailBtn.classList.add('copied');
        showToast('Alamat email berhasil disalin!', 'success');
        setTimeout(() => {
          copyEmailBtn.classList.remove('copied');
        }, 2500);
      }
    });
  }


  // --- 9. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit-form');
  const formFeedback = document.getElementById('form-feedback');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group')?.classList.remove('has-error');
      }

      // Validate Email
      if (!validateEmail(emailInput.value.trim())) {
        emailInput.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group')?.classList.remove('has-error');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      } else {
        subjectInput.closest('.form-group')?.classList.remove('has-error');
      }

      // Validate Message
      if (messageInput.value.trim().length < 10) {
        messageInput.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group')?.classList.remove('has-error');
      }

      if (!isValid) {
        showToast('Mohon lengkapi formulir dengan benar.', 'info');
        return;
      }

      // Simulate sending
      submitBtn?.classList.add('loading');
      if (formFeedback) {
        formFeedback.style.display = 'none';
        formFeedback.className = 'form-feedback-alert';
      }

      setTimeout(() => {
        submitBtn?.classList.remove('loading');
        contactForm.reset();

        if (formFeedback) {
          formFeedback.textContent = 'Terima kasih! Pesan Anda telah terkirim. Zidny akan segera menghubungi Anda kembali.';
          formFeedback.className = 'form-feedback-alert success';
          formFeedback.style.display = 'block';
        }

        showToast('Pesan berhasil terkirim ke Zidny!', 'success');
      }, 1200);
    });

    // Real-time error removal on input typing
    contactForm.querySelectorAll('.form-input, .form-textarea').forEach((input) => {
      input.addEventListener('input', () => {
        input.closest('.form-group')?.classList.remove('has-error');
      });
    });
  }


  // --- 10. BACK TO TOP BUTTON WITH SCROLL PROGRESS RING ---
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.getElementById('scroll-progress-circle');
  const CIRCLE_CIRCUMFERENCE = 125.66; // 2 * PI * r (r=20)

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${CIRCLE_CIRCUMFERENCE}`;
    progressCircle.style.strokeDashoffset = `${CIRCLE_CIRCUMFERENCE}`;
  }

  const handleBackToTopScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollTop > 300) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    if (docHeight > 0 && progressCircle) {
      const scrollPercent = scrollTop / docHeight;
      const offset = CIRCLE_CIRCUMFERENCE - (scrollPercent * CIRCLE_CIRCUMFERENCE);
      progressCircle.style.strokeDashoffset = `${offset}`;
    }
  };

  window.addEventListener('scroll', handleBackToTopScroll, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // --- 11. TOAST NOTIFICATION HELPER ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    } else {
      iconSvg = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#3b82f6" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

});
