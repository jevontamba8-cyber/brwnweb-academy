/**
 * BRWNWEB ACADEMY - COMPREHENSIVE CURRICULUM & APPLICATION DATA
 * Substantive, educational, in natural Indonesian, matching all specifications in the prompt & PDF.
 */

window.ACADEMY_DATA = {
  // BRAND INFO
  brand: {
    name: "brwnweb Academy",
    tagline: "Explore the Digital World. Build Your Own Future.",
    subheading: "Pelajari cara membuat website dan aplikasi dari nol. Pahami teknologi, kuasai coding, dan bangun proyek digital pertamamu.",
    logoPath: "assets/logo.jpg"
  },

  // 1. STATS
  stats: [
    { label: "Level Roadmap", value: "10", suffix: " Level" },
    { label: "Modul Lengkap", value: "14+", suffix: " Modul" },
    { label: "Proyek Praktik", value: "15", suffix: " Proyek" },
    { label: "Akses Belajar", value: "100%", suffix: " Gratis" }
  ],

  // 2. WEB ARCHITECTURE STEPS (INTERACTIVE DIAGRAM)
  webArchitectureSteps: [
    {
      id: "user",
      name: "1. Pengguna",
      icon: "fa-user",
      shortDesc: "User mengetik URL di browser",
      detail: "Pengguna memasukkan alamat website seperti 'https://brwnweb.id/academy' ke dalam address bar browser dan menekan tombol Enter.",
      tech: ["Input Pengguna", "URL Format", "Protokol HTTPS"]
    },
    {
      id: "browser",
      name: "2. Browser",
      icon: "fa-window-maximize",
      shortDesc: "Browser memeriksa Cache & DNS",
      detail: "Browser mengecek cache lokal. Jika belum tersimpan, browser mengirim permintaan pencarian IP Address tujuan ke DNS Resolver.",
      tech: ["Browser Engine", "Browser Cache", "Socket Connection"]
    },
    {
      id: "dns",
      name: "3. DNS Server",
      icon: "fa-sitemap",
      shortDesc: "Menerjemahkan domain ke IP",
      detail: "DNS (Domain Name System) bertindak sebagai buku telepon internet, mengubah nama domain 'brwnweb.id' menjadi alamat IP numerik seperti '104.21.55.2'.",
      tech: ["A Record", "CNAME", "DNS Lookup", "TTL"]
    },
    {
      id: "server",
      name: "4. Web Server",
      icon: "fa-server",
      shortDesc: "Menerima Request HTTP/HTTPS",
      detail: "Web Server (seperti Nginx atau Apache) menerima koneksi TCP/TLS pada port 443, memvalidasi keamanan, lalu meneruskan ke aplikasi backend.",
      tech: ["Nginx", "Apache", "SSL/TLS Handshake", "Port 443/80"]
    },
    {
      id: "backend",
      name: "5. Backend Logic",
      icon: "fa-code",
      shortDesc: "Memproses routing & logika",
      detail: "Backend (PHP, Node.js, Python) memproses alur logika bisnis, memvalidasi sesi login pengguna, dan menyiapkan data yang diminta.",
      tech: ["PHP PDO", "Node.js / Express", "Routing", "Controller"]
    },
    {
      id: "database",
      name: "6. Database",
      icon: "fa-database",
      shortDesc: "Menyimpan & mengambil data",
      detail: "Database Relasional (MySQL / PostgreSQL) menjalankan query SQL yang aman menggunakan prepared statements untuk mengambil atau menyimpan record data.",
      tech: ["MySQL", "PostgreSQL", "SQL Query", "Index Optimization"]
    },
    {
      id: "response",
      name: "7. Response & Render",
      icon: "fa-laptop-code",
      shortDesc: "Browser merender HTML/CSS/JS",
      detail: "Server mengembalikan response dengan status HTTP 200 OK beserta payload (HTML, CSS, JS, JSON). Browser merender DOM tree & CSSOM hingga halaman tampil interaktif.",
      tech: ["HTTP 200 OK", "DOM Parsing", "CSSOM", "JS Engine (V8)"]
    }
  ],

  // 3. LEARNING ROADMAP (10 LEVELS)
  roadmap: [
    {
      level: 1,
      title: "Computer & Internet Fundamentals",
      estimatedTime: "2 Minggu",
      levelBadge: "Pemula",
      summary: "Memahami pondasi komputer, sistem operasi, cara kerja internet, DNS, IP, dan protokol HTTP/HTTPS.",
      topics: [
        "Cara kerja komputer dan sistem operasi",
        "Arsitektur Internet & World Wide Web",
        "Konsep Client-Server, IP Address & DNS",
        "Protokol HTTP, HTTPS, Request dan Response",
        "Pengenalan Browser Developer Tools"
      ],
      project: "Menganalisis Network Request & Status Code pada 3 website menggunakan Chrome DevTools."
    },
    {
      level: 2,
      title: "HTML, CSS, dan JavaScript Dasar",
      estimatedTime: "4 Minggu",
      levelBadge: "Pemula",
      summary: "Membangun struktur konten dengan HTML5 semantik, menata tampilan dengan CSS3, dan membuat interaktivitas dengan JavaScript.",
      topics: [
        "Elemen semantik HTML5, form, audio, video",
        "CSS Box Model, Selector, Spesifisitas",
        "CSS Flexbox dan CSS Grid System",
        "Dasar JavaScript: Variabel, Tipe Data, Function, Loop",
        "DOM Manipulation & Event Listener di browser"
      ],
      project: "Membuat Website Profil Pribadi yang interaktif dan responsif dari nol tanpa framework."
    },
    {
      level: 3,
      title: "Responsive Web Design & Modern CSS",
      estimatedTime: "2 Minggu",
      levelBadge: "Pemula",
      summary: "Menguasai prinsip Mobile-First Design, CSS Custom Properties (Variables), Media Queries, dan animasi CSS.",
      topics: [
        "Viewport meta tag dan Mobile-First Approach",
        "Media Queries untuk Mobile, Tablet, dan Desktop",
        "CSS Variables, Dark/Light Mode Theme Architecture",
        "Fluid typography menggunakan CSS clamp()",
        "CSS Transitions, Transforms, dan Keyframe Animations"
      ],
      project: "Membuat Landing Page Produk Kopi Premium dengan Dark/Light Mode switcher dan animasi hover."
    },
    {
      level: 4,
      title: "Git, GitHub, dan Kolaborasi Developer",
      estimatedTime: "1 Minggu",
      levelBadge: "Pemula",
      summary: "Mengelola riwayat perubahan kode dengan version control Git dan mempublikasikan repositori ke GitHub.",
      topics: [
        "Konsep Version Control: Commit, Staging, dan Repository",
        "Perintah inti: git init, add, commit, status, log",
        "Branching strategy: main, feature branch, merge",
        "Mengatasi merge conflict secara terstruktur",
        "GitHub: Remote repo, Push, Pull, Pull Request (PR)"
      ],
      project: "Membuat repositori proyek portofolio di GitHub dan mempublikasikannya menggunakan GitHub Pages."
    },
    {
      level: 5,
      title: "Backend Development Fundamentals",
      estimatedTime: "4 Minggu",
      levelBadge: "Menengah",
      summary: "Mempelajari pemrosesan server-side, routing, request handling, autentikasi, dan arsitektur RESTful API.",
      topics: [
        "Perbedaan Client-Side vs Server-Side Rendering",
        "Dasar PHP: Variabel, Superglobal ($_POST, $_GET, $_SESSION)",
        "Alternatif Node.js runtime & Express framework",
        "Konsep REST API: GET, POST, PUT, DELETE, status code",
        "Keamanan: Sanitasi input, validasi, dan penanganan error"
      ],
      project: "Membangun REST API sederhana untuk manajemen artikel dengan validasi data dan response JSON."
    },
    {
      level: 6,
      title: "Database Relasional & SQL Mastery",
      estimatedTime: "3 Minggu",
      levelBadge: "Menengah",
      summary: "Merancang skema database menggunakan ERD, menguasai query SQL, dan mengintegrasikannya ke backend secara aman.",
      topics: [
        "Konsep Database Relasional: Tabel, Field, Record, Key",
        "Relasi: One-to-One, One-to-Many, Many-to-Many",
        "Query SQL: CREATE, INSERT, SELECT WHERE, UPDATE, DELETE",
        "SQL Joins (INNER, LEFT, RIGHT) dan Agregasi (COUNT, GROUP BY)",
        "Koneksi PDO di PHP dengan Prepared Statements (Anti SQLi)"
      ],
      project: "Membuat Sistem Registrasi Siswa dengan database MySQL, relasi 2 tabel, dan query pencarian."
    },
    {
      level: 7,
      title: "Framework & Library Modern",
      estimatedTime: "4 Minggu",
      levelBadge: "Menengah",
      summary: "Mempercepat pengembangan antarmuka dan backend menggunakan framework populer seperti React, Vue, atau Laravel.",
      topics: [
        "Konsep Component-Based Architecture di React / Vue",
        "State Management & Props: useState, useEffect",
        "Styling cepat dan konsisten dengan Tailwind CSS",
        "Framework Full-Stack PHP: Laravel (MVC, Eloquent ORM)",
        "Build tools modern: Vite, Webpack, NPM scripts"
      ],
      project: "Membangun Aplikasi Dashboard Interaktif dengan filtering data real-time menggunakan React atau Laravel."
    },
    {
      level: 8,
      title: "Membuat Proyek Full-Stack Terintegrasi",
      estimatedTime: "4 Minggu",
      levelBadge: "Mahir",
      summary: "Menggabungkan Frontend, Backend, Database, Auth, dan File Upload ke dalam satu aplikasi siap pakai.",
      topics: [
        "Arsitektur Fullstack: Monolith vs Decoupled (SPA + API)",
        "Sistem Autentikasi: Password Hashing (Bcrypt), Session / JWT",
        "Role-Based Access Control (Admin vs Regular User)",
        "File upload aman (validasi MIME, ukuran, direktori aman)",
        "Pagination, Sorting, dan Search Query Optimization"
      ],
      project: "Membangun Mini E-Commerce lengkap dengan katalog produk, keranjang belanja, checkout, dan admin panel."
    },
    {
      level: 9,
      title: "Hosting, Domain, SSL & Cloud Deployment",
      estimatedTime: "2 Minggu",
      levelBadge: "Mahir",
      summary: "Menghubungkan domain, memasang sertifikat SSL, dan mempublikasikan aplikasi ke shared hosting atau VPS cloud.",
      topics: [
        "Perbedaan Shared Hosting (cPanel) vs Cloud VPS (Ubuntu)",
        "Deployment Frontend modern ke Vercel dan Netlify",
        "Konfigurasi DNS: A Record, CNAME, Nameserver",
        "Instalasi Web Server Nginx/Apache dan SSL gratis Let's Encrypt",
        "Environment variables (.env) dan perlindungan file sensitif"
      ],
      project: "Mendeploy aplikasi fullstack ke internet dengan custom domain dan sertifikat SSL aktif (HTTPS)."
    },
    {
      level: 10,
      title: "Membangun Aplikasi Multiplatform (Mobile, Desktop, PWA)",
      estimatedTime: "4 Minggu",
      levelBadge: "Mahir",
      summary: "Mentransformasikan kemampuan web menjadi aplikasi Android/iOS (Flutter, React Native), Desktop, dan PWA.",
      topics: [
        "Progressive Web App (PWA): manifest.json, Service Worker, Offline mode",
        "Pengenalan Cross-Platform Mobile: Flutter (Dart) & React Native",
        "Pengenalan Desktop Apps: Electron.js dan .NET (C#)",
        "Mempersiapkan aplikasi untuk App Store dan Google Play Store",
        "Strategi arsitektur lintas platform dan performa optimal"
      ],
      project: "Mengubah website kursus menjadi PWA yang dapat diinstal di Android/Windows dengan dukungan offline caching."
    }
  ],

  // 4. MATERI EDUKASI LENGKAP (SUBSTANTIVE, READABLE, PRACTICAL)
  modules: [
    {
      id: "mengenal-web",
      title: "Pengenalan Dunia Website & Arsitektur Klien-Server",
      category: "Dasar Web",
      level: "Pemula",
      readTime: "12 menit",
      summary: "Pahami apa itu website, perbedaan website statis dan dinamis, serta relasi website dengan web app dan mobile app.",
      content: `
        <h2>Apa Itu Website dan Bagaimana Sebenarnya Cara Kerjanya?</h2>
        <p>Secara sederhana, <strong>website</strong> adalah sekumpulan halaman digital yang saling terhubung di bawah satu nama domain (seperti <code>brwnweb.id</code>) dan dapat diakses publik melalui jaringan internet menggunakan perangkat lunak yang disebut <em>web browser</em>.</p>
        
        <p>Di balik layar, website bekerja dengan arsitektur <strong>Client-Server</strong>:</p>
        <ul>
          <li><strong>Client (Klien):</strong> Perangkat pengguna (laptop, smartphone, tablet) yang menjalankan browser (Chrome, Firefox, Safari, Edge). Klien bertugas mengirim permintaan (<em>HTTP Request</em>) dan menampilkan hasil (<em>Rendering</em>).</li>
          <li><strong>Server:</strong> Komputer berdaya tinggi yang menyala 24/7 di pusat data (datacenter). Server menyimpan file website (HTML, CSS, JS, gambar, database) dan merespons setiap permintaan klien (<em>HTTP Response</em>).</li>
        </ul>

        <h2>Website Statis vs Website Dinamis</h2>
        <p>Berdasarkan cara konten disajikan, website terbagi menjadi dua kategori utama:</p>
        <div class="callout">
          <div class="callout-title"><i class="fa-solid fa-file-code"></i> 1. Website Statis (Static Web)</div>
          <p>File HTML, CSS, dan JavaScript dibuat secara manual dan disajikan apa adanya kepada semua pengunjung tanpa pemrosesan basis data di sisi server. <strong>Kelebihan:</strong> Sangat cepat, aman, hosting murah. <strong>Kekurangan:</strong> Kurang cocok jika konten harus sering diperbarui oleh banyak pengguna secara mandiri. Contoh: Landing page produk, portofolio, brosur perusahaan.</p>
        </div>

        <div class="callout">
          <div class="callout-title"><i class="fa-solid fa-server"></i> 2. Website Dinamis (Dynamic Web)</div>
          <p>Halaman website dibuat secara real-time saat pengguna memintanya. Server menjalankan kode pemrograman (seperti PHP, Node.js, Python) untuk mengambil data terbaru dari database (seperti MySQL, PostgreSQL), menggabungkannya ke dalam template HTML, lalu mengirimkannya ke browser. <strong>Kelebihan:</strong> Konten dapat dipersonalisasi untuk setiap user, ada sistem login, dashboard, dan transaksi. Contoh: Toko online Tokopedia, sistem akademik kampus, media sosial.</p>
        </div>

        <h2>Perbedaan: Website vs Web Application vs Mobile App</h2>
        <ul>
          <li><strong>Website Tradisional:</strong> Fokus utamanya adalah menyajikan informasi kepada pembaca (<em>content-centric</em>). Interaksi pengguna umumnya terbatas pada membaca, mengklik tautan, atau mengirim formulir kontak.</li>
          <li><strong>Web Application (Web App):</strong> Website dengan fungsionalitas aplikasi yang kaya dan interaktif tinggi (<em>task-centric</em>), seperti Google Docs, Figma, Trello, atau Netflix. Berjalan langsung di dalam browser tanpa instalasi tambahan.</li>
          <li><strong>Mobile App (Native / Hybrid):</strong> Aplikasi yang diinstal langsung di sistem operasi smartphone (Android via APK/Play Store atau iOS via App Store). Memiliki akses penuh ke sensor perangkat keras seperti kamera, GPS, Bluetooth, dan push notifications native.</li>
        </ul>

        <h2>Peran Developer: Frontend, Backend, dan Fullstack</h2>
        <p>Dalam industri pengembangan perangkat lunak, peran developer umumnya dibagi menjadi:</p>
        <ul>
          <li><strong>Frontend Developer:</strong> Mengembangkan apa yang dilihat dan disentuh langsung oleh pengguna (antarmuka, tata letak, tombol, animasi, responsivitas). Menguasai HTML, CSS, dan JavaScript.</li>
          <li><strong>Backend Developer:</strong> Membangun sistem di balik layar yang mengolah data, mengamankan autentikasi login, mengelola database, dan menyediakan API. Menguasai PHP, Node.js, Python, Java, atau Go beserta database SQL/NoSQL.</li>
          <li><strong>Fullstack Developer:</strong> Menguasai kedua sisi sekaligus (Frontend dan Backend) sehingga mampu membangun website utuh dari antarmuka hingga deployment server.</li>
        </ul>
      `,
      checklist: [
        "Memahami definisi website dan prinsip kerja Client-Server",
        "Mampu membedakan karakteristik website statis dan dinamis",
        "Mengetahui perbedaan website, web app, dan aplikasi mobile",
        "Memahami pembagian tugas Frontend, Backend, dan Fullstack"
      ],
      quiz: {
        question: "Jika sebuah website memiliki fitur login akun, keranjang belanja yang tersimpan, dan produk yang berbeda untuk setiap kategori, website tersebut tergolong sebagai:",
        options: [
          "Website Statis murni",
          "Website Dinamis",
          "Website Brosur offline",
          "Domain Name Server"
        ],
        correct: 1,
        explanation: "Website yang memproses data pengguna, menyimpan sesi login, dan mengambil data produk dari basis data merupakan Website Dinamis."
      }
    },
    {
      id: "cara-kerja-internet",
      title: "Bagaimana Internet Bekerja: DNS, IP, dan Protokol HTTP/HTTPS",
      category: "Cara Kerja Internet",
      level: "Pemula",
      readTime: "15 menit",
      summary: "Pelajari siklus hidup sebuah web request mulai dari resolusi nama DNS hingga respons HTTP dan status code.",
      content: `
        <h2>Menelusuri Alur Perjalanan Web Request</h2>
        <p>Pernahkah Anda bertanya apa yang sebenarnya terjadi dalam sepersekian detik ketika Anda mengetik <code>https://google.com</code> di browser dan menekan tombol Enter? Berikut adalah tahapan lengkapnya:</p>

        <h3>1. Resolusi Alamat IP Melalui DNS (Domain Name System)</h3>
        <p>Komputer di internet tidak berkomunikasi menggunakan kata-kata manusia seperti "google.com", melainkan melalui angka unik yang disebut <strong>IP Address</strong> (misal <code>142.250.190.46</code>). Karena manusia sulit menghafal deretan angka untuk setiap website, diciptakanlah <strong>DNS</strong> sebagai buku telepon digital sedunia.</p>
        <p>Browser akan menanyakan alamat IP tersebut secara bertahap:</p>
        <ol>
          <li>Cek Cache Browser lokal</li>
          <li>Cek Cache OS (Operating System)</li>
          <li>Kirim query ke DNS Resolver (ISP atau penyedia DNS publik seperti Cloudflare 1.1.1.1 atau Google 8.8.8.8)</li>
          <li>Jika belum ada, DNS Resolver menanyakan ke Root DNS Server &rarr; TLD Server (.com, .id) &rarr; Authoritative Name Server milik website.</li>
        </ol>

        <h3>2. Membangun Koneksi TCP / TLS Handshake</h3>
        <p>Setelah mendapatkan IP server, browser membuka komunikasi aman dengan server menggunakan protokol <strong>TCP (Transmission Control Protocol)</strong> melalui 3-Way Handshake (SYN &rarr; SYN-ACK &rarr; ACK). Jika website menggunakan HTTPS, dilakukan negosiasi enkripsi <strong>TLS/SSL Handshake</strong> agar data yang dikirim tidak dapat disadap.</p>

        <h3>3. Perbedaan HTTP dan HTTPS</h3>
        <div class="callout">
          <div class="callout-title"><i class="fa-solid fa-lock"></i> HTTP vs HTTPS</div>
          <p><strong>HTTP (Hypertext Transfer Protocol):</strong> Data dikirim dalam teks biasa (plain text). Siapapun di jaringan Wi-Fi publik dapat mengintip password atau kartu kredit Anda.</p>
          <p><strong>HTTPS (HTTP Secure):</strong> Seluruh data dienkripsi dengan standar TLS. Hanya browser Anda dan server tujuan yang memiliki kunci pembaca pesan. Ditandai dengan ikon gembok hijau/aman di browser.</p>
        </div>

        <h3>4. Memahami Kode Status HTTP (HTTP Status Codes)</h3>
        <p>Setiap kali server membalas, ia menyertakan kode 3 digit yang memberitahu kondisi permintaan:</p>
        <ul>
          <li><strong>2xx (Success):</strong> <code>200 OK</code> (berhasil), <code>201 Created</code> (data baru berhasil disimpan).</li>
          <li><strong>3xx (Redirection):</strong> <code>301 Moved Permanently</code> (halaman pindah permanen ke URL baru).</li>
          <li><strong>4xx (Client Error):</strong> <code>400 Bad Request</code> (format salah), <code>401 Unauthorized</code> (belum login), <code>403 Forbidden</code> (tidak punya izin akses), <code>404 Not Found</code> (halaman tidak ditemukan).</li>
          <li><strong>5xx (Server Error):</strong> <code>500 Internal Server Error</code> (ada bug pada script backend), <code>502 Bad Gateway</code> (server perantara gagal), <code>503 Service Unavailable</code> (server kelebihan beban atau maintenance).</li>
        </ul>
      `,
      checklist: [
        "Mampu menjelaskan fungsi DNS sebagai penerjemah nama domain ke IP",
        "Mengetahui perbedaan mendasar HTTP (tidak terenkripsi) dan HTTPS (terenkripsi)",
        "Dapat mengidentifikasi arti kode status HTTP umum (200, 404, 500)"
      ],
      quiz: {
        question: "Jika seorang pengunjung mencoba membuka halaman artikel yang sudah dihapus oleh pemilik website, kode status HTTP manakah yang paling tepat dikembalikan oleh server?",
        options: [
          "200 OK",
          "500 Internal Server Error",
          "404 Not Found",
          "301 Moved Permanently"
        ],
        correct: 2,
        explanation: "Kode 404 Not Found adalah standar HTTP yang menandakan bahwa server aktif namun URL resource yang diminta tidak ditemukan."
      }
    },
    {
      id: "frontend-dasar",
      title: "Frontend Development: HTML5 Semantik, CSS Box Model, & Flexbox",
      category: "Frontend Development",
      level: "Pemula",
      readTime: "20 menit",
      summary: "Kuasai tiga pilar utama frontend: elemen semantik HTML5, cara kerja layout box model CSS, dan penataan elemen modern dengan Flexbox.",
      content: `
        <h2>Tiga Pilar Utama Pembuatan Tampilan Website</h2>
        <p>Setiap antarmuka website yang Anda lihat dibangun oleh kombinasi tiga teknologi dasar:</p>
        <ol>
          <li><strong>HTML (HyperText Markup Language):</strong> Memberikan struktur dan makna kerangka halaman.</li>
          <li><strong>CSS (Cascading Style Sheets):</strong> Memberikan sentuhan visual, warna, spasi, tipografi, dan layout responsif.</li>
          <li><strong>JavaScript:</strong> Memberikan interaktivitas, logika, perhitungan, manipulasi DOM, dan komunikasi dengan server.</li>
        </ol>

        <h2>1. HTML5 Semantik: Mengapa Penting?</h2>
        <p>Hindari membuat website yang hanya dipenuhi oleh tumpukan tag <code>&lt;div&gt;</code> generic. HTML5 menyediakan tag semantik yang menjelaskan perannya kepada browser, mesin pencari (SEO), dan screen reader bagi penyandang disabilitas:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>index.html</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Kode HTML berhasil disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;brwnweb Academy - Belajar Web&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;a href="/"&gt;Beranda&lt;/a&gt;
      &lt;a href="/materi"&gt;Materi&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;article&gt;
      &lt;h1&gt;Belajar HTML Semantik&lt;/h1&gt;
      &lt;p&gt;Konten artikel utama yang memiliki nilai SEO tinggi.&lt;/p&gt;
    &lt;/article&gt;

    &lt;aside&gt;
      &lt;h3&gt;Artikel Terkait&lt;/h3&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&amp;copy; 2026 brwnweb Academy.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>

        <h2>2. Memahami CSS Box Model</h2>
        <p>Setiap elemen dalam CSS diperlakukan seperti sebuah kotak persegi panjang yang terdiri dari 4 lapisan dari dalam ke luar:</p>
        <ul>
          <li><strong>Content:</strong> Area isi teks atau gambar sebenarnya.</li>
          <li><strong>Padding:</strong> Ruang transparan di dalam elemen antara konten dan garis batas (border).</li>
          <li><strong>Border:</strong> Garis batas pembungkus elemen.</li>
          <li><strong>Margin:</strong> Jarak pemisah di luar elemen terhadap elemen tetangga di sekitarnya.</li>
        </ul>

        <div class="callout">
          <div class="callout-title"><i class="fa-solid fa-lightbulb"></i> Best Practice CSS: Box-Sizing Border-Box</div>
          <p>Selalu gunakan deklarasi universal <code>box-sizing: border-box;</code> pada awal stylesheet Anda agar ukuran lebar (width) dan tinggi (height) yang Anda tentukan sudah mencakup padding dan border tanpa merusak perhitungan layout!</p>
        </div>

        <h2>3. Menguasai Tata Letak Flexbox</h2>
        <p>Flexbox dirancang untuk menyusun elemen secara fleksibel dalam satu dimensi (horizontal baris atau vertikal kolom). Berikut adalah kode pola umum pembuatan navigasi dan card fleksibel:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>style.css</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Kode CSS berhasil disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>/* Container Flexbox */
.navbar-container {
  display: flex;
  justify-content: space-between; /* Pisahkan brand di kiri dan menu di kanan */
  align-items: center;            /* Pusatkan secara vertikal */
  padding: 1rem 2rem;
  background-color: #241711;     /* Warna coklat hangat */
  border-bottom: 1px solid rgba(224, 141, 70, 0.3);
}

.menu-list {
  display: flex;
  gap: 1.5rem;                    /* Jarak antar link navigasi */
  list-style: none;
}</code></pre>
        </div>
      `,
      checklist: [
        "Memahami fungsi tag semantik: header, nav, main, article, aside, footer",
        "Mengerti 4 lapisan CSS Box Model (Content, Padding, Border, Margin)",
        "Mampu menggunakan Flexbox untuk mengatur align-items dan justify-content"
      ],
      quiz: {
        question: "Jika Anda ingin memberikan jarak ruang kosong di sebelah DALAM sebuah kartu (di antara tulisan dan garis border kartu tersebut), properti CSS apa yang harus digunakan?",
        options: [
          "margin",
          "padding",
          "border-spacing",
          "outline"
        ],
        correct: 1,
        explanation: "Padding mengatur ruang kosong di bagian dalam (antara konten dan border), sedangkan margin mengatur jarak di luar border."
      }
    },
    {
      id: "javascript-modern",
      title: "JavaScript Modern (ES6+): Variabel, Asynchronous & Fetch API",
      category: "Frontend Development",
      level: "Pemula",
      readTime: "18 menit",
      summary: "Pahami evolusi JavaScript modern: perbedaan let/const vs var, arrow function, array methods (map, filter), Promise, Async/Await, dan konsumsi data dengan Fetch API.",
      content: `
        <h2>Mengapa JavaScript Adalah Bahasa Inti Web?</h2>
        <p>JavaScript adalah satu-satunya bahasa pemrograman tingkat tinggi yang berjalan secara native di dalam seluruh browser modern tanpa memerlukan instalasi plugin tambahan. Dengan JavaScript, website berubah dari dokumen bacaan statis menjadi aplikasi interaktif yang hidup.</p>

        <h2>1. Variabel Modern: Hindari 'var', Gunakan 'const' dan 'let'</h2>
        <ul>
          <li><code>const</code>: Gunakan untuk nilai yang tidak akan pernah di-reassign (direkomendasikan sebagai default).</li>
          <li><code>let</code>: Gunakan saat nilai variabel memang akan berubah seiring berjalannya aplikasi (misal nilai counter pada perulangan).</li>
          <li><code>var</code>: Cara lama (legacy) yang memiliki kelemahan <em>function scope</em> dan <em>hoisting</em> yang rawan menyebabkan bug tak terduga.</li>
        </ul>

        <h2>2. Array Methods: map() dan filter()</h2>
        <p>Dalam JavaScript modern, kita jarang menggunakan loop <code>for</code> tradisional ketika memproses daftar data. Metode bawaan array jauh lebih ekspresif dan bersih:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>array-methods.js</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Kode JS berhasil disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>const kursusList = [
  { id: 1, judul: "HTML & CSS Dasar", level: "Pemula", harga: 0 },
  { id: 2, judul: "PHP & MySQL Fullstack", level: "Menengah", harga: 150000 },
  { id: 3, judul: "Modern JavaScript", level: "Pemula", harga: 0 }
];

// 1. Filter: Ambil hanya kursus yang gratis
const kursusGratis = kursusList.filter(kursus => kursus.harga === 0);

// 2. Map: Transformasi menjadi array nama judul saja
const daftarJudul = kursusGratis.map(kursus => kursus.judul);
console.log(daftarJudul); // ['HTML & CSS Dasar', 'Modern JavaScript']</code></pre>
        </div>

        <h2>3. Asynchronous JavaScript & Fetch API</h2>
        <p>Ketika mengambil data dari server, browser tidak boleh mengalami 'freeze' atau membeku menunggu respon jaringan. Itulah fungsi pemrograman asinkron (Asynchronous) menggunakan <strong>Promise</strong> dan sintaks modern <strong>async / await</strong>:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>fetch-data.js</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Kode Fetch berhasil disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>async function ambilDataMateri() {
  try {
    // 1. Kirim request ke endpoint API
    const response = await fetch('https://api.brwnweb.id/v1/materi');
    
    // 2. Periksa apakah respon sukses (HTTP 200-299)
    if (!response.ok) {
      throw new Error(\`Gagal mengambil data, status HTTP: \${response.status}\`);
    }

    // 3. Konversi format response menjadi JSON
    const data = await response.json();
    console.log("Data materi berhasil didapat:", data);
    return data;
  } catch (error) {
    console.error("Terjadi kendala saat fetch:", error.message);
  }
}</code></pre>
        </div>
      `,
      checklist: [
        "Memahami perbedaan scope let, const, dan var",
        "Mampu menggunakan method array .map() dan .filter()",
        "Menguasai penulisan async/await dan penanganan try...catch pada Fetch API"
      ],
      quiz: {
        question: "Manakah method array JavaScript yang paling tepat digunakan untuk menyaring daftar data berdasarkan suatu kondisi logika tanpa mengubah array aslinya?",
        options: [
          "array.push()",
          "array.filter()",
          "array.splice()",
          "array.sort()"
        ],
        correct: 1,
        explanation: "Method .filter() mengevaluasi setiap item dengan fungsi kondisi dan mengembalikan array baru yang hanya berisi item bernilai true."
      }
    },
    {
      id: "backend-php-mysql",
      title: "Backend Development: PHP & MySQL dengan PDO Aman",
      category: "Backend Development",
      level: "Menengah",
      readTime: "25 menit",
      summary: "Pelajari cara membangun backend dengan PHP dan database MySQL, mengamankan koneksi dengan PDO, dan mencegah serangan SQL Injection.",
      content: `
        <h2>Peran PHP dan MySQL dalam Ekosistem Web</h2>
        <p>PHP adalah salah satu bahasa pemrograman backend paling populer di dunia yang mentenagai lebih dari 75% website di internet, termasuk WordPress dan Wikipedia. Dipadukan dengan database relasional <strong>MySQL</strong>, PHP menyediakan fondasi kokoh untuk aplikasi bisnis, sistem registrasi, dan e-commerce.</p>

        <h2>Koneksi Database Aman Menggunakan PDO (PHP Data Objects)</h2>
        <p>Hindari ekstensi usang <code>mysql_*</code> yang sudah dihapus karena rentan. Gunakan <strong>PDO</strong> yang mendukung berbagai database dan memiliki fitur <em>Prepared Statements</em> native:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>koneksi.php</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Kode PHP berhasil disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>&lt;?php
// Konfigurasi Database (Simpan rahasia ini di file environment/config terpisah)
$host     = 'localhost';
$dbname   = 'brwnweb_academy';
$username = 'db_user';
$password = 'PasswordRahasia123!';

$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false, // Wajib false untuk keamanan SQLi maksimal!
];

try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    // Catat log error ke file internal, jangan tampilkan pesan error detail ke publik
    error_log($e->getMessage());
    die("Koneksi ke database gagal. Silakan coba beberapa saat lagi.");
}
?&gt;</code></pre>
        </div>

        <h2>Mencegah SQL Injection dengan Prepared Statements</h2>
        <div class="callout callout-warning">
          <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Bahaya Fatal SQL Injection</div>
          <p>Jangan pernah menggabungkan variabel input langsung ke string SQL seperti <code>"SELECT * FROM users WHERE email = '$email'"</code>. Peretas dapat memasukkan teks seperti <code>' OR '1'='1</code> untuk membobol seluruh database tanpa password!</p>
        </div>

        <p>Berikut adalah cara pengerjaan registrasi pengguna yang benar dan aman:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>register.php</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Kode Register berhasil disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>&lt;?php
require_once 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama     = trim($_POST['nama'] ?? '');
    $email    = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $password = $_POST['password'] ?? '';

    if (!$nama || !$email || strlen($password) &lt; 8) {
        die("Input tidak valid atau password kurang dari 8 karakter.");
    }

    // Hash password menggunakan algoritma Bcrypt standar industri
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Gunakan Prepared Statement dengan placeholder :nama, :email, :password
    $sql = "INSERT INTO users (nama, email, password, role, created_at) 
            VALUES (:nama, :email, :password, 'student', NOW())";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nama'     => $nama,
        ':email'    => $email,
        ':password' => $hashedPassword
    ]);

    echo "Registrasi berhasil! Silakan menuju halaman login.";
}
?&gt;</code></pre>
        </div>
      `,
      checklist: [
        "Memahami arsitektur PDO dan opsi keamanan database di PHP",
        "Mengetahui cara kerja password_hash() dan password_verify()",
        "Wajib selalu menggunakan Prepared Statement untuk mencegah SQL Injection"
      ],
      quiz: {
        question: "Metode apakah yang paling efektif dalam pemrograman PHP untuk mengamankan query database dari serangan SQL Injection?",
        options: [
          "Menyimpan password dalam bentuk Base64",
          "Menggunakan Prepared Statements dengan parameter binding pada PDO/MySQLi",
          "Menonaktifkan fungsi $_POST pada server",
          "Menghubungkan database tanpa menggunakan password"
        ],
        correct: 1,
        explanation: "Prepared Statements memisahkan struktur query SQL dari data input pengguna, sehingga karakter berbahaya tidak dapat dieksekusi sebagai perintah SQL."
      }
    },
    {
      id: "database-erd",
      title: "Desain Database Relasional: ERD, Relasi, dan Query SQL",
      category: "Database",
      level: "Menengah",
      readTime: "22 menit",
      summary: "Panduan mendesain database sistem pendaftaran kursus, memahami relasi One-to-Many, dan mengeksekusi query SQL dasar hingga JOIN.",
      content: `
        <h2>Konsep Fondasi Database Relasional (RDBMS)</h2>
        <p>Database relasional mengorganisir data dalam bentuk <strong>tabel</strong> yang tersusun atas baris (<em>record/row</em>) dan kolom (<em>field/column</em>). Setiap baris memiliki pengenal unik yang disebut <strong>Primary Key (PK)</strong>.</p>

        <h2>Jenis Relasi Database</h2>
        <ul>
          <li><strong>One-to-One (1:1):</strong> Satu record di Tabel A berpasangan tepat dengan satu record di Tabel B (Contoh: User dan Profil Detail User).</li>
          <li><strong>One-to-Many (1:N):</strong> Satu record di Tabel A dapat memiliki banyak pasangan di Tabel B (Contoh: Satu User dapat mendaftar ke Banyak Kursus). Ditandai dengan <strong>Foreign Key (FK)</strong> di tabel sisi 'Many'.</li>
          <li><strong>Many-to-Many (M:N):</strong> Banyak record di Tabel A berelasi dengan banyak record di Tabel B (Contoh: Banyak Siswa mengambil Banyak Modul). Membutuhkan tabel perantara (<em>Junction Table / Pivot Table</em>).</li>
        </ul>

        <h2>Studi Kasus ERD: Sistem Pendaftaran Siswa brwnweb Academy</h2>
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>schema.sql</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Schema SQL disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>-- 1. Tabel Master Pengguna (Users)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'instructor', 'admin') DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Master Kursus (Courses)
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(150) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    tingkat ENUM('pemula', 'menengah', 'mahir') NOT NULL,
    harga INT DEFAULT 0
);

-- 3. Tabel Relasi Pendaftaran (Enrollments) - Menghubungkan Users dan Courses
CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    status ENUM('aktif', 'selesai', 'dibatalkan') DEFAULT 'aktif',
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);</code></pre>
        </div>

        <h2>Query Pengambilan Data dengan INNER JOIN</h2>
        <p>Untuk menampilkan nama siswa beserta judul kursus yang diikutinya, kita menggabungkan ketiga tabel tersebut menggunakan perintah <code>JOIN</code>:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>query-join.sql</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Query JOIN disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>SELECT 
    users.nama AS nama_siswa,
    courses.judul AS nama_kursus,
    courses.tingkat,
    enrollments.status,
    enrollments.enrolled_at
FROM enrollments
INNER JOIN users ON enrollments.user_id = users.id
INNER JOIN courses ON enrollments.course_id = courses.id
WHERE enrollments.status = 'aktif'
ORDER BY enrollments.enrolled_at DESC;</code></pre>
        </div>
      `,
      checklist: [
        "Memahami perbedaan Primary Key dan Foreign Key",
        "Mampu mendesain relasi One-to-Many pada tabel relasional",
        "Mampu menulis query JOIN untuk menghubungkan data dari 2 tabel atau lebih"
      ],
      quiz: {
        question: "Kolom kunci pada suatu tabel yang merujuk pada Primary Key di tabel lain untuk membentuk hubungan relasi disebut:",
        options: [
          "Candidate Key",
          "Foreign Key (Kunci Asing)",
          "Composite Key",
          "Alternate Key"
        ],
        correct: 1,
        explanation: "Foreign Key adalah kolom pengait yang menyimpan referensi ke Primary Key tabel induk untuk menjaga integritas relasional data."
      }
    },
    {
      id: "cara-membuat-website-dari-nol",
      title: "Panduan Lengkap: Cara Membuat Website dari Nol Hingga Online",
      category: "Tutorial Website",
      level: "Pemula",
      readTime: "24 menit",
      summary: "8 tahapan terstruktur mulai dari penentuan tujuan, wireframe UI/UX, folder project, coding HTML/CSS/JS, backend, hingga hosting dan optimasi SEO.",
      content: `
        <h2>8 Langkah Menuju Peluncuran Website Impian Anda</h2>
        <p>Banyak pemula bingung harus mulai dari mana saat ingin membuat website pertama mereka. Berikut adalah alur kerja profesional (industry workflow) yang digunakan oleh agensi dan developer kelas dunia:</p>

        <h3>Tahap 1: Menentukan Tujuan & Menyusun Sitemap</h3>
        <p>Sebelum menulis satu baris kode pun, tentukan siapa target pengunjung website Anda dan tindakan apa yang Anda harapkan mereka lakukan. Buat struktur sitemap (misal: Beranda &rarr; Profil &rarr; Katalog &rarr; Kontak).</p>

        <h3>Tahap 2: Merancang UI/UX & Wireframe di Figma</h3>
        <p>Rancang kerangka tampilan hitam-putih (wireframe) kemudian lanjutkan ke mock-up desain berwarna resolusi tinggi (High-Fidelity) di tools gratis seperti <strong>Figma</strong> atau <strong>Penpot</strong>. Ini menghemat waktu coding karena layout sudah disepakati terlebih dahulu.</p>

        <h3>Tahap 3: Menyiapkan Lingkungan Coding & Struktur Folder Proyek</h3>
        <p>Gunakan code editor standar seperti <strong>Visual Studio Code</strong>. Buat struktur direktori proyek yang rapi:</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>Struktur Folder Proyek</span>
          </div>
          <pre><code>proyek-website-anda/
├── index.html          # Halaman beranda
├── about.html          # Halaman tentang kami
├── css/
│   ├── style.css       # Style umum dan variabel
│   └── responsive.css  # Media queries mobile
├── js/
│   └── main.js         # Interaksi logika frontend
├── assets/
│   ├── images/         # Foto, ilustrasi terkompresi
│   └── icons/          # SVG icon atau logo
└── README.md           # Catatan instruksi proyek</code></pre>
        </div>

        <h3>Tahap 4: Mengembangkan Struktur HTML dan Styling CSS</h3>
        <p>Ketik markup semantic di file HTML dan beri sentuhan visual bertahap menggunakan CSS. Terapkan prinsip <em>Mobile-First</em> dengan menguji tampilan pada ukuran layar smartphone terlebih dahulu, lalu bertahap ke desktop menggunakan media queries.</p>

        <h3>Tahap 5: Menambahkan Interaktivitas dengan JavaScript</h3>
        <p>Tambahkan logika interaktif: navigasi hamburger menu di mobile, validasi form sebelum dikirim, modal popup, slider, atau panggilan API.</p>

        <h3>Tahap 6: Membangun Backend & Hubungkan Database (Bila Dibutuhkan)</h3>
        <p>Jika website membutuhkan login atau penyimpanan data form, buat script backend (PHP/Node.js) dan hubungkan ke basis data MySQL dengan perlindungan prepared statement yang aman.</p>

        <h3>Tahap 7: Pembelian Domain, SSL, dan Deployment</h3>
        <p>Pilih nama domain yang mudah diingat (misal <code>namaanda.com</code>). Upload website ke layanan hosting:</p>
        <ul>
          <li><strong>Untuk Website Statis (HTML/CSS/JS):</strong> Gunakan <strong>Vercel</strong>, <strong>Netlify</strong>, atau <strong>GitHub Pages</strong> (100% Gratis dan sangat cepat).</li>
          <li><strong>Untuk Website Dinamis (PHP & MySQL):</strong> Gunakan <strong>Shared Hosting cPanel</strong> atau <strong>Cloud VPS (Ubuntu)</strong>.</li>
        </ul>

        <h3>Tahap 8: Optimasi SEO, Keamanan, & Kecepatan</h3>
        <ul>
          <li>Pasang meta tag title, description, dan Open Graph untuk preview WhatsApp/Facebook.</li>
          <li>Kompresi seluruh gambar ke format modern WebP agar website terbuka dalam waktu di bawah 1.5 detik.</li>
          <li>Pastikan sertifikat SSL (HTTPS) berstatus aktif.</li>
        </ul>
      `,
      checklist: [
        "Menyusun sitemap dan tujuan website sebelum coding",
        "Menyiapkan struktur folder proyek yang rapi dan terorganisir",
        "Menerapkan prinsip Mobile-First pada CSS",
        "Menguji fungsionalitas formulir dan tampilan di smartphone nyata"
      ],
      quiz: {
        question: "Mengapa disarankan untuk membuat wireframe atau mockup desain di Figma sebelum mulai menulis kode website?",
        options: [
          "Agar browser dapat langsung mengubah desain menjadi kode otomatis tanpa perlu dipelajari",
          "Untuk memvalidasi tata letak dan alur pengguna lebih awal sehingga menghemat waktu revisi saat coding",
          "Karena website tidak bisa berjalan tanpa file .figma",
          "Agar server database tidak kelebihan beban"
        ],
        correct: 1,
        explanation: "Wireframe memetakan arsitektur informasi dan layout lebih dini sehingga menghindari perombakan kode yang memakan waktu di kemudian hari."
      }
    },
    {
      id: "hosting-deployment",
      title: "Hosting & Deployment: Dari Localhost Menuju Dunia Internet",
      category: "Hosting & Deployment",
      level: "Mahir",
      readTime: "20 menit",
      summary: "Memahami perbedaan Shared Hosting, VPS, dan platform modern seperti Vercel. Lengkap dengan panduan upload cPanel, FTP, SSL, dan DNS.",
      content: `
        <h2>Membedakan Domain, Hosting, Server, dan Deployment Platform</h2>
        <p>Agar website dapat diakses oleh jutaan orang di seluruh penjuru dunia, website Anda memerlukan alamat (Domain) dan rumah tempat file disimpan (Hosting/Server):</p>
        <ul>
          <li><strong>Domain:</strong> Alamat unik seperti <code>brwnweb.id</code>. Didaftarkan melalui registrar (Niagahoster, DomaiNesia, Namecheap).</li>
          <li><strong>Web Hosting:</strong> Layanan penyewaan ruang penyimpanan di komputer server yang terhubung ke internet non-stop.</li>
          <li><strong>DNS Nameserver:</strong> Pengarah yang menghubungkan domain ke server hosting yang tepat.</li>
        </ul>

        <h2>Perbandingan Jenis Hosting: Mana yang Tepat untuk Proyek Anda?</h2>
        <div class="tech-table-wrapper">
          <table class="tech-table">
            <thead>
              <tr>
                <th>Jenis Hosting</th>
                <th>Cocok Untuk</th>
                <th>Kelebihan</th>
                <th>Batasan / Kekurangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vercel / Netlify</strong></td>
                <td>HTML/CSS/JS, React, Vue, Next.js</td>
                <td>Gratis, deploy otomatis dari Git, CDN global super cepat</td>
                <td>Tidak mendukung database lokal PHP/MySQL tradisional</td>
              </tr>
              <tr>
                <td><strong>Shared Hosting (cPanel)</strong></td>
                <td>PHP & MySQL, WordPress, Pemula</td>
                <td>Murah, ada panel grafis cPanel, database phpMyAdmin instan</td>
                <td>Resource dibagi bersama ribuan website lain dalam 1 server</td>
              </tr>
              <tr>
                <td><strong>Cloud VPS (Ubuntu/Debian)</strong></td>
                <td>Aplikasi skala besar, Node.js, Python, Docker</td>
                <td>Akses root penuh, performa tinggi, dedicated resources</td>
                <td>Harus konfigurasi Linux via Terminal (CLI) secara mandiri</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Langkah Deployment PHP & MySQL ke Shared Hosting cPanel</h2>
        <ol>
          <li><strong>Export Database Lokal:</strong> Buka phpMyAdmin lokal Anda (XAMPP/Laragon), pilih database, dan klik tab <strong>Export</strong> untuk mendapatkan file <code>database.sql</code>.</li>
          <li><strong>Buat Database di cPanel:</strong> Buka menu <em>MySQL Database Wizard</em> di cPanel, buat nama database baru, buat user baru dengan password kuat, dan beri izin <em>ALL PRIVILEGES</em>.</li>
          <li><strong>Import SQL:</strong> Masuk ke <em>phpMyAdmin</em> cPanel dan import file <code>database.sql</code> ke database yang baru dibuat.</li>
          <li><strong>Upload File Website:</strong> Kompres folder website Anda menjadi <code>.zip</code>, buka <em>File Manager &rarr; public_html</em> di cPanel, upload dan ekstrak di sana.</li>
          <li><strong>Sesuaikan Koneksi:</strong> Edit file <code>koneksi.php</code> di cPanel dengan nama database, user, dan password yang baru saja Anda buat di cPanel.</li>
          <li><strong>Aktifkan SSL:</strong> Buka menu <em>SSL/TLS Status</em> di cPanel dan klik <em>Run AutoSSL</em> untuk mengaktifkan gembok hijau HTTPS gratis.</li>
        </ol>
      `,
      checklist: [
        "Memahami fungsi Name Server dan A-Record pada DNS",
        "Mengetahui cara memilih platform hosting sesuai stack teknologi",
        "Mampu mengekspor dan mengimpor database MySQL antar server",
        "Memastikan SSL/TLS aktif untuk enkripsi HTTPS"
      ],
      quiz: {
        question: "Jika Anda membangun website statis (hanya HTML, CSS, dan JavaScript) dan kodenya sudah disimpan di GitHub, platform deployment manakah yang paling cepat, gratis, dan otomatis memperbarui website setiap kali Anda push kode?",
        options: [
          "Shared Hosting cPanel manual dengan FTP",
          "Vercel atau Netlify",
          "Dedicated Server fisik",
          "XAMPP di laptop pribadi"
        ],
        correct: 1,
        explanation: "Vercel dan Netlify dirancang khusus untuk deployment otomatis dari repositori GitHub dengan jaringan CDN global gratis."
      }
    },
    {
      id: "app-development-architecture",
      title: "Membuat Aplikasi: Web App, Mobile Native, Flutter, & PWA",
      category: "Membuat Aplikasi",
      level: "Mahir",
      readTime: "22 menit",
      summary: "Memahami bagaimana mentransformasikan konsep web menjadi aplikasi mobile (Android/iOS), aplikasi desktop, atau Progressive Web App (PWA).",
      content: `
        <h2>Spektrum Pengembangan Aplikasi Modern</h2>
        <p>Saat ini, batasan antara 'website' dan 'aplikasi' semakin tipis. Anda dapat membangun software yang berjalan di berbagai platform menggunakan berbagai pendekatan arsitektur:</p>

        <h3>1. Web Application (Web App)</h3>
        <p>Aplikasi yang berjalan seutuhnya di browser menggunakan framework frontend seperti React, Vue, Angular, atau Next.js dengan backend API. Pengguna tidak perlu mengunduh apa pun dari toko aplikasi. Contoh: Canva, Google Maps versi web.</p>

        <h3>2. Progressive Web App (PWA)</h3>
        <p>Website yang dilengkapi dengan teknologi <strong>Service Worker</strong> dan <strong>Web App Manifest</strong> sehingga dapat "diinstal" langsung ke layar utama (Home Screen) smartphone atau desktop tanpa melalui Google Play atau App Store. PWA memiliki kemampuan berjalan offline berkat cache browser.</p>

        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>manifest.json (PWA)</span>
            <button class="btn btn-sm btn-outline copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('code').innerText); window.showToast('Manifest PWA disalin!');"><i class="fa-regular fa-copy"></i> Salin</button>
          </div>
          <pre><code>{
  "name": "brwnweb Academy",
  "short_name": "brwnweb",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#120A06",
  "theme_color": "#E08D46",
  "icons": [
    {
      "src": "/assets/logo.jpg",
      "sizes": "192x192",
      "type": "image/jpeg"
    }
  ]
}</code></pre>
        </div>

        <h3>3. Mobile Application (Android & iOS)</h3>
        <ul>
          <li><strong>Native:</strong> Menggunakan bahasa resmi platform (<strong>Kotlin</strong> untuk Android, <strong>Swift</strong> untuk iOS). Menghasilkan performa tertinggi dan akses hardware terlengkap, namun membutuhkan 2 basis kode berbeda.</li>
          <li><strong>Cross-Platform Framework:</strong>
            <ul>
              <li><strong>Flutter (bahasa Dart):</strong> Menggambar antarmuka sendiri menggunakan engine grafis Skia/Impeller. Sangat cepat dan konsisten di Android maupun iOS dari satu basis kode.</li>
              <li><strong>React Native:</strong> Menggunakan JavaScript/TypeScript dan merender komponen native sistem operasi secara langsung. Sangat ramah bagi developer web yang sudah menguasai React.</li>
            </ul>
          </li>
        </ul>

        <h3>4. Desktop Application</h3>
        <p>Aplikasi untuk Windows, macOS, dan Linux. Dapat dibangun menggunakan <strong>Electron.js</strong> (mengemas HTML/CSS/JS bersama Chromium & Node.js seperti VS Code dan Discord) atau native menggunakan <strong>C# (.NET)</strong> dan <strong>Python (PyQt)</strong>.</p>
      `,
      checklist: [
        "Memahami prinsip kerja PWA dengan manifest.json dan service worker",
        "Mengetahui kelebihan dan kekurangan Native vs Cross-Platform (Flutter/React Native)",
        "Memahami perbandingan biaya dan kebutuhan pengguna antar platform"
      ],
      quiz: {
        question: "Teknologi apa yang memungkinkan website biasa dapat diinstal di homescreen smartphone dan dibuka tanpa koneksi internet (offline)?",
        options: [
          "DNS Server",
          "Progressive Web App (PWA) dengan Service Worker",
          "PHP PDO",
          "FTP Server"
        ],
        correct: 1,
        explanation: "PWA memanfaatkan Service Worker sebagai proxy lokal untuk meng-cache resource sehingga aplikasi dapat dipasang dan dibuka saat offline."
      }
    }
  ],

  // 5. BAHASA PEMROGRAMAN & TEKNOLOGI LENGKAP
  technologies: [
    {
      name: "HTML5",
      category: "Markup Language",
      difficulty: "Pemula",
      summary: "Bahasa markup standar untuk menyusun kerangka dan struktur konten website.",
      whenToUse: "Wajib digunakan pada setiap proyek web apapun di dunia.",
      pros: ["Sangat mudah dipelajari", "Didukung 100% browser tanpa install", "Fondasi utama SEO"],
      cons: ["Bukan bahasa pemrograman (tidak ada logika matematika/variabel)"],
      codeSnippet: `<h1>Selamat Datang di brwnweb Academy</h1>\n<p>Belajar coding dari nol hingga mahir.</p>`,
      nextTech: "CSS3 dan JavaScript",
      projectIdea: "Halaman resume digital atau dokumen profil terstruktur."
    },
    {
      name: "CSS3",
      category: "Stylesheet Language",
      difficulty: "Pemula",
      summary: "Bahasa stylesheet untuk mengatur tampilan, warna, tipografi, dan layout responsif.",
      whenToUse: "Wajib digunakan bersama HTML untuk mempercantik dan menata posisi antarmuka.",
      pros: ["Mendukung animasi halus", "Flexbox & Grid memudahkan penataan", "Mendukung Custom Properties (variabel)"],
      cons: ["Dapat menjadi rumit pada proyek raksasa jika tidak ada metodologi penamaan"],
      codeSnippet: `body {\n  background-color: #120A06;\n  color: #FDFBF7;\n  font-family: sans-serif;\n}`,
      nextTech: "Tailwind CSS, SASS",
      projectIdea: "Katalog kartu produk interaktif dengan hover effect."
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      difficulty: "Pemula - Menengah",
      summary: "Bahasa pemrograman paling populer di dunia yang berjalan di browser untuk interaktivitas dinamis.",
      whenToUse: "Saat website membutuhkan manipulasi DOM, animasi interaktif, kalkulasi data, atau panggilan API.",
      pros: ["Berjalan langsung di semua browser", "Ekosistem paket NPM terbesar di dunia", "Bisa digunakan di Frontend maupun Backend (Node.js)"],
      cons: ["Dynamic typing terkadang menimbulkan error tipe data bila tidak teliti"],
      codeSnippet: `const sapa = (nama) => console.log(\`Halo, \${nama}! Semangat belajar coding.\`);\nsapa("Budi");`,
      nextTech: "TypeScript, React, Node.js",
      projectIdea: "Aplikasi Todo List interaktif dengan LocalStorage."
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      difficulty: "Menengah",
      summary: "Superset dari JavaScript yang menambahkan static typing untuk mencegah bug sejak masa penulisan kode.",
      whenToUse: "Sangat direkomendasikan untuk proyek tim menengah hingga besar.",
      pros: ["Mendeteksi error saat coding (type safety)", "Autocompletion di editor sangat luar biasa", "Meningkatkan kualitas kode"],
      cons: ["Memerlukan tahapan kompilasi (transpile) ke JavaScript biasa"],
      codeSnippet: `interface User {\n  id: number;\n  nama: string;\n  isPremium: boolean;\n}\nconst murid: User = { id: 1, nama: "Ahmad", isPremium: true };`,
      nextTech: "Next.js, Nest.js",
      projectIdea: "Sistem inventaris barang dengan validasi tipe data ketat."
    },
    {
      name: "PHP",
      category: "Backend Language",
      difficulty: "Pemula - Menengah",
      summary: "Bahasa pemrograman server-side yang andal, praktis, dan mentenagai sebagian besar web hosting.",
      whenToUse: "Pembuatan aplikasi web dinamis, form handling, session login, dan sistem CRUD cepat.",
      pros: ["Deployment termudah di hampir semua shared hosting murah", "Dokumentasi sangat melimpah", "Framework Laravel sangat modern"],
      cons: ["Sintaks kode lama sering dicap tidak rapi jika tidak mengikuti standar modern (PHP 8+)"],
      codeSnippet: `<?php\n$nama = "Pengguna";\necho "Selamat datang di server PHP, " . htmlspecialchars($nama);\n?>`,
      nextTech: "Laravel, MySQL, PostgreSQL",
      projectIdea: "Sistem absensi siswa online dengan laporan PDF."
    },
    {
      name: "Node.js",
      category: "JavaScript Runtime (Bukan Bahasa Baru)",
      difficulty: "Menengah",
      summary: "Environment runtime yang memungkinkan JavaScript dijalankan di sisi server di luar browser.",
      whenToUse: "Membangun REST API berkecepatan tinggi, aplikasi real-time (chat/streaming), atau microservices.",
      pros: ["Gunakan satu bahasa (JavaScript) untuk frontend dan backend sekaligus", "Event-driven, non-blocking I/O sangat efisien"],
      cons: ["Kurang ideal untuk komputasi berat yang membebani CPU secara intensif"],
      codeSnippet: `const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.end('Hello from Node.js runtime!');\n});\nserver.listen(3000);`,
      nextTech: "Express.js, NestJS, Socket.io",
      projectIdea: "Aplikasi chat real-time atau REST API toko online."
    },
    {
      name: "Python",
      category: "Programming Language",
      difficulty: "Pemula",
      summary: "Bahasa dengan sintaks paling bersih dan mudah dibaca, sangat dominan dalam AI, Data Science, dan backend.",
      whenToUse: "Backend web (Django/FastAPI), otomasi script, scraping, machine learning.",
      pros: ["Sintaks mirip bahasa Inggris natural", "Ekosistem AI dan Machine Learning terlengkap", "Library sangat banyak"],
      cons: ["Kecepatan eksekusi lebih lambat dibanding bahasa kompilasi seperti Go atau C++"],
      codeSnippet: `def hitung_diskon(harga, persen):\n    return harga - (harga * persen / 100)\n\nprint(hitung_diskon(100000, 20))`,
      nextTech: "Django, FastAPI, PyTorch",
      projectIdea: "Bot web scraper pemantau harga barang online otomatis."
    },
    {
      name: "MySQL",
      category: "Relational Database",
      difficulty: "Pemula - Menengah",
      summary: "Sistem manajemen basis data relasional (RDBMS) sumber terbuka paling populer di dunia.",
      whenToUse: "Menyimpan data terstruktur yang membutuhkan relasi tabel, integritas transaksi ACID.",
      pros: ["Sangat stabil dan teruji puluhan tahun", "Tersedia secara default di semua cPanel", "Dukungan komunitas luas"],
      cons: ["Skalabilitas horizontal lebih rumit dibanding beberapa database NoSQL"],
      codeSnippet: `SELECT nama, email FROM users WHERE role = 'student' ORDER BY created_at DESC;`,
      nextTech: "PostgreSQL, Redis",
      projectIdea: "Database sistem pemesanan tiket konser online."
    },
    {
      name: "React",
      category: "Frontend UI Library",
      difficulty: "Menengah",
      summary: "Library JavaScript buatan Meta untuk membangun antarmuka pengguna berbasis komponen reaktif.",
      whenToUse: "Aplikasi web interaktif dengan banyak state yang sering berubah secara dinamis.",
      pros: ["Komponen reusable", "Ekosistem terbesar di dunia frontend", "Peluang karir sangat tinggi"],
      cons: ["Kurva belajar state management dan konfigurasi tools"],
      codeSnippet: `function Counter() {\n  const [count, setCount] = React.useState(0);\n  return <button onClick={() => setCount(count + 1)}>Klik: {count}</button>;\n}`,
      nextTech: "Next.js, Redux Toolkit",
      projectIdea: "Dashboard pemantau keuangan pribadi dengan grafik."
    },
    {
      name: "Tailwind CSS",
      category: "Utility-First CSS Framework",
      difficulty: "Pemula - Menengah",
      summary: "Framework CSS utility-first untuk mendesain antarmuka modern secara langsung di dalam markup HTML.",
      whenToUse: "Membangun tampilan kustom tanpa harus bolak-balik menulis file CSS terpisah.",
      pros: ["Sangat cepat untuk prototyping", "Ukuran file akhir sangat kecil (purge unused CSS)", "Konsistensi spacing dan warna"],
      cons: ["Nama class di HTML terlihat panjang"],
      codeSnippet: `<div class="bg-amber-900 text-amber-100 p-4 rounded-xl shadow-lg">\n  <h2 class="font-bold text-xl">brwnweb Academy</h2>\n</div>`,
      nextTech: "Headless UI, Tailwind UI",
      projectIdea: "Desain ulang halaman profil pengguna dengan tema elegan."
    }
  ],

  // 6. TOOLS & SOFTWARE DEVELOPER
  tools: [
    {
      name: "Visual Studio Code (VS Code)",
      category: "Code Editor",
      price: "100% Gratis",
      summary: "Editor kode terpopuler sedunia buatan Microsoft dengan ribuan ekstensi produktivitas.",
      features: ["IntelliSense autocompletion", "Git terintegrasi", "Terminal bawaan", "Ekstensi Live Server & Prettier"],
      recommendation: "Wajib diinstal oleh setiap developer pemula maupun profesional."
    },
    {
      name: "Cursor",
      category: "AI Code Editor",
      price: "Freemium",
      summary: "Editor modern berbasis fork VS Code yang ditenagai kecerdasan buatan (AI) terintegrasi secara mendalam.",
      features: ["AI Chat context-aware", "Tab autocomplete multi-line cerdas", "Bisa menggunakan ekstensi VS Code"],
      recommendation: "Pilihan terbaik jika Anda ingin mempercepat proses belajar dan coding dengan bantuan AI."
    },
    {
      name: "Figma",
      category: "UI/UX Design",
      price: "Freemium (Gratis untuk personal)",
      summary: "Software desain antarmuka berbasis cloud untuk membuat wireframe, prototipe, dan aset website bersama tim.",
      features: ["Kolaborasi real-time", "Inspect code CSS untuk developer", "Komponen dan auto-layout canggih"],
      recommendation: "Tools nomor 1 untuk merancang tampilan sebelum mulai coding."
    },
    {
      name: "Git & GitHub",
      category: "Version Control & Cloud Repo",
      price: "100% Gratis",
      summary: "Standar industri global untuk merekam jejak perubahan kode dan mempublikasikan portofolio open source.",
      features: ["Branching & Merging", "Pull Requests & Code Review", "GitHub Actions CI/CD", "GitHub Pages"],
      recommendation: "Keahlian wajib nomor satu untuk lolos wawancara kerja developer."
    },
    {
      name: "Postman",
      category: "API Testing",
      price: "Freemium",
      summary: "Aplikasi untuk menguji endpoint REST API (mengirim request GET, POST, header, token) tanpa harus membuat frontend terlebih dahulu.",
      features: ["Testing response JSON", "Manajemen environment variables", "Dokumentasi API otomatis"],
      recommendation: "Sangat penting saat Anda mulai mempelajari Backend Development."
    },
    {
      name: "Vercel",
      category: "Modern Deployment Platform",
      price: "Gratis untuk personal",
      summary: "Platform cloud terbaik untuk menghosting website statis dan framework modern dengan kecepatan CDN global.",
      features: ["Deploy otomatis saat 'git push'", "HTTPS SSL gratis instan", "Preview URL untuk setiap branch"],
      recommendation: "Pilihan paling praktis untuk mempublikasikan proyek frontend dan portofolio Anda."
    }
  ],

  // 7. PROYEK PRAKTIK (PROJECT-BASED LEARNING)
  projects: [
    {
      id: "personal-portfolio",
      title: "Website Portofolio Pribadi Responsif",
      level: "Pemula",
      tech: ["HTML5 Semantik", "CSS3 Flexbox/Grid", "JavaScript Dasar"],
      duration: "1 Minggu",
      objective: "Membuat website personal untuk memamerkan keahlian, biodata, dan proyek coding Anda kepada klien atau recruiter.",
      features: [
        "Header dengan logo personal dan navigasi mulus",
        "Hero section dengan foto profil dan tombol download CV",
        "Bagian Tentang Saya dan keahlian teknis (Skills chip)",
        "Grid galeri proyek dengan kartu interaktif dan tautan GitHub",
        "Formulir kontak dengan validasi JavaScript sisi klien"
      ],
      folderStructure: `portofolio/\n├── index.html\n├── css/\n│   └── style.css\n├── js/\n│   └── app.js\n└── assets/\n    ├── profile.jpg\n    └── projects/`,
      challenge: "Tambahkan fitur Dark Mode toggle menggunakan CSS Custom Properties yang tersimpan di LocalStorage!"
    },
    {
      id: "login-auth-php",
      title: "Sistem Registrasi & Login Aman (PHP + MySQL PDO)",
      level: "Menengah",
      tech: ["PHP 8", "MySQL", "PDO", "Bcrypt Hashing", "CSS"],
      duration: "2 Minggu",
      objective: "Membangun sistem autentikasi pengguna lengkap dengan enkripsi password, sesi login aman, dan dashboard khusus anggota.",
      features: [
        "Halaman registrasi akun dengan validasi email unik dan panjang password",
        "Password dienkripsi menggunakan fungsi password_hash() dengan Bcrypt",
        "Halaman login dengan pengecekan sesi dan token anti-CSRF",
        "Halaman Dashboard terlindungi (hanya bisa dibuka jika sudah login)",
        "Fitur logout yang menghancurkan session server secara bersih"
      ],
      folderStructure: `auth-app/\n├── config/\n│   └── database.php\n├── public/\n│   ├── index.php\n│   ├── login.php\n│   ├── register.php\n│   ├── dashboard.php\n│   └── logout.php\n└── assets/\n    └── css/style.css`,
      challenge: "Tambahkan fitur batasan percobaan login (Rate Limiting) untuk mencegah serangan brute force pada password!"
    },
    {
      id: "ecommerce-mini",
      title: "Mini E-Commerce dengan Keranjang Belanja & Checkout",
      level: "Mahir",
      tech: ["HTML/CSS/JS", "PHP / Node.js", "MySQL", "Fetch API", "Session/LocalStorage"],
      duration: "4 Minggu",
      objective: "Membangun website toko online fungsional mulai dari katalog barang, penambahan ke keranjang belanja, kalkulasi total harga, hingga checkout pesanan.",
      features: [
        "Katalog produk dengan filter kategori dan pencarian keyword",
        "Keranjang belanja interaktif (tambah, kurangi kuantitas, hapus item)",
        "Perhitungan subtotal dan ongkir otomatis",
        "Formulir checkout dan penyimpanan data pesanan ke database",
        "Dashboard admin untuk menambah, mengedit, dan menghapus produk (CRUD)"
      ],
      folderStructure: `ecommerce/\n├── api/\n│   ├── products.php\n│   └── checkout.php\n├── admin/\n│   └── manage-products.php\n├── index.html\n├── cart.html\n├── js/\n│   ├── cart.js\n│   └── store.js\n└── css/main.css`,
      challenge: "Integrasikan payment gateway simulasi (Midtrans Sandbox) untuk menghasilkan invoice pembayaran QRIS otomatis!"
    }
  ],

  // 8. GLOSSARY (KAMUS TEKNOLOGI WEB)
  glossary: [
    { term: "API (Application Programming Interface)", category: "Arsitektur", definition: "Jembatan perangkat lunak yang memungkinkan dua aplikasi berbeda untuk saling berkomunikasi dan bertukar data secara terstruktur." },
    { term: "Backend", category: "Pengembangan", definition: "Sisi server dari aplikasi yang mengurus logika bisnis, pemrosesan data, autentikasi, dan interaksi dengan database." },
    { term: "Browser Cache", category: "Jaringan", definition: "Penyimpanan sementara di perangkat lokal pengguna yang menyimpan file statis (CSS, JS, logo) agar website terbuka lebih cepat saat kunjungan berikutnya." },
    { term: "CDN (Content Delivery Network)", category: "Infrastruktur", definition: "Jaringan server yang tersebar secara geografis di seluruh dunia untuk menyajikan konten web kepada pengunjung dari lokasi server terdekat." },
    { term: "CORS (Cross-Origin Resource Sharing)", category: "Keamanan", definition: "Mekanisme keamanan browser yang membatasi permintaan HTTP lintas domain berbeda demi mencegah pencurian data." },
    { term: "DNS (Domain Name System)", category: "Jaringan", definition: "Sistem hierarkis yang menerjemahkan nama domain manusia (misal brwnweb.id) menjadi alamat IP numerik (misal 104.21.55.2)." },
    { term: "DOM (Document Object Model)", category: "Frontend", definition: "Representasi hierarki pohon dari dokumen HTML di dalam memori browser yang dapat dimanipulasi secara dinamis menggunakan JavaScript." },
    { term: "ERD (Entity Relationship Diagram)", category: "Database", definition: "Diagram visual yang menggambarkan hubungan keterkaitan antar tabel di dalam suatu basis data relasional." },
    { term: "Frontend", category: "Pengembangan", definition: "Bagian tampilan antarmuka website yang berinteraksi langsung dengan mata dan tindakan pengguna di layar." },
    { term: "Fullstack", category: "Pengembangan", definition: "Keahlian atau arsitektur sistem yang mencakup pengembangan frontend dan backend sekaligus." },
    { term: "JWT (JSON Web Token)", category: "Keamanan", definition: "Standar token ringkas dan mandiri untuk mengirimkan klaim data autentikasi aman antar pihak dalam format JSON." },
    { term: "PWA (Progressive Web App)", category: "Aplikasi", definition: "Aplikasi web yang dibangun dengan standar modern sehingga dapat diinstal di smartphone/desktop dan dapat dijalankan saat offline." },
    { term: "REST (Representational State Transfer)", category: "Arsitektur", definition: "Standar arsitektur komunikasi web service yang menggunakan metode HTTP standar (GET, POST, PUT, DELETE)." },
    { term: "SEO (Search Engine Optimization)", category: "Pemasaran Web", definition: "Rangkaian praktik optimasi agar halaman website mendapatkan peringkat tinggi di hasil pencarian Google secara organik." },
    { term: "SQL Injection (SQLi)", category: "Keamanan", definition: "Teknik serangan siber di mana peretas menyisipkan kode SQL berbahaya ke dalam input formulir untuk memanipulasi database." },
    { term: "SSL/TLS", category: "Keamanan", definition: "Protokol kriptografi yang mengamankan komunikasi data di internet dengan enkripsi (mengubah HTTP menjadi HTTPS)." }
  ],

  // 9. PLAYGROUND STARTER TEMPLATES
  playgroundTemplates: {
    counter: {
      name: "Counter Interaktif",
      html: `<div class="card">\n  <h2>Hitung Cepat brwnweb</h2>\n  <div id="angka">0</div>\n  <div class="tombol-grup">\n    <button onclick="kurang()">- Kurang</button>\n    <button onclick="reset()">Reset</button>\n    <button onclick="tambah()">+ Tambah</button>\n  </div>\n</div>`,
      css: `body {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  background: #180F0A;\n  color: #FDFBF7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n.card {\n  background: #241711;\n  padding: 2rem;\n  border-radius: 16px;\n  border: 1px solid #E08D46;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.5);\n}\nh2 { margin-top: 0; color: #E08D46; }\n#angka {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin: 1rem 0;\n  color: #F5A742;\n}\n.tombol-grup button {\n  background: #E08D46;\n  color: #fff;\n  border: none;\n  padding: 0.6rem 1.2rem;\n  margin: 0 0.3rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 700;\n  transition: transform 0.2s;\n}\n.tombol-grup button:hover {\n  transform: scale(1.05);\n  background: #F29E58;\n}`,
      js: `let count = 0;\nconst display = document.getElementById('angka');\n\nfunction tambah() {\n  count++;\n  display.textContent = count;\n}\n\nfunction kurang() {\n  count--;\n  display.textContent = count;\n}\n\nfunction reset() {\n  count = 0;\n  display.textContent = count;\n}`
    },
    todo: {
      name: "Mini To-Do List",
      html: `<div class="todo-app">\n  <h3>Target Belajar Hari Ini</h3>\n  <div class="input-row">\n    <input type="text" id="todoInput" placeholder="Tulis materi baru...">\n    <button onclick="tambahTugas()">Tambah</button>\n  </div>\n  <ul id="todoList">\n    <li>Belajar Tag Semantik HTML5</li>\n    <li>Latihan CSS Flexbox</li>\n  </ul>\n</div>`,
      css: `body {\n  font-family: sans-serif;\n  background: #140C07;\n  color: #FDFBF7;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.todo-app {\n  background: #20130C;\n  border: 1px solid #8C5F41;\n  padding: 1.5rem;\n  border-radius: 12px;\n  width: 320px;\n}\nh3 { color: #E08D46; margin-top: 0; }\n.input-row {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\ninput {\n  flex: 1;\n  padding: 0.5rem;\n  background: #140C07;\n  border: 1px solid #8C5F41;\n  color: #fff;\n  border-radius: 6px;\n}\nbutton {\n  background: #E08D46;\n  border: none;\n  color: #fff;\n  padding: 0.5rem 0.8rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: bold;\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nli {\n  padding: 0.5rem;\n  background: #2C1B12;\n  margin-bottom: 0.5rem;\n  border-radius: 6px;\n  border-left: 3px solid #E08D46;\n}`,
      js: `function tambahTugas() {\n  const input = document.getElementById('todoInput');\n  const text = input.value.trim();\n  if (text) {\n    const li = document.createElement('li');\n    li.textContent = text;\n    document.getElementById('todoList').appendChild(li);\n    input.value = '';\n  }\n}`
    }
  }
};
