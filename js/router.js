/**
 * BRWNWEB ACADEMY - CLIENT-SIDE ROUTER & PAGE VIEWS
 * Handles hash-based routing (#/, #/roadmap, #/materi, #/materi/:id, #/tools, etc.)
 */

window.AcademyRouter = {
  routes: {},

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute(); // initial load
  },

  navigate(path) {
    window.location.hash = path;
  },

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || '/';
    const [path, queryString] = rawHash.split('?');
    const parts = path.split('/').filter(Boolean);

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active nav links
    document.querySelectorAll('.nav-item a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${path}` || (path === '/' && href === '#/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update mobile bottom nav
    if (window.updateBottomNav) {
      window.updateBottomNav(path);
    }

    const appRoot = document.getElementById('app-root');
    if (!appRoot) return;

    // Route matching
    if (path === '/' || path === '') {
      this.renderHome(appRoot);
    } else if (path === '/roadmap') {
      this.renderRoadmap(appRoot);
    } else if (path === '/materi') {
      this.renderMateriList(appRoot, queryString);
    } else if (parts[0] === 'materi' && parts[1]) {
      this.renderMateriDetail(appRoot, parts[1]);
    } else if (path === '/bahasa-pemrograman') {
      this.renderLanguages(appRoot);
    } else if (path === '/tools') {
      this.renderTools(appRoot);
    } else if (path === '/website-development') {
      this.renderWebsiteDev(appRoot);
    } else if (path === '/app-development') {
      this.renderAppDev(appRoot);
    } else if (path === '/database') {
      this.renderDatabase(appRoot);
    } else if (path === '/hosting') {
      this.renderHosting(appRoot);
    } else if (path === '/projects') {
      this.renderProjects(appRoot);
    } else if (path === '/playground') {
      this.renderPlaygroundPage(appRoot);
    } else if (path === '/glossary') {
      this.renderGlossary(appRoot);
    } else if (path === '/about') {
      this.renderAbout(appRoot);
    } else {
      this.renderNotFound(appRoot);
    }
  },

  // 1. HOME VIEW
  renderHome(root) {
    const brand = window.ACADEMY_DATA.brand;
    const stats = window.ACADEMY_DATA.stats;
    const archSteps = window.ACADEMY_DATA.webArchitectureSteps;

    root.innerHTML = `
      <!-- HERO SECTION -->
      <section class="hero-section">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-badge-wrap">
              <span class="badge badge-warning">
                <i class="fa-solid fa-graduation-cap"></i> Platform Edukasi Web & Pemrograman Modern
              </span>
            </div>
            <h1 class="hero-headline">
              Explore the Digital World. <br />
              <span class="text-gradient">Build Your Own Future.</span>
            </h1>
            <p class="hero-subhead">
              ${brand.subheading}
            </p>
            <div class="hero-actions">
              <a href="#/roadmap" class="btn btn-primary btn-lg">
                <i class="fa-solid fa-compass"></i> Mulai Belajar (Roadmap)
              </a>
              <a href="#/materi" class="btn btn-secondary btn-lg">
                <i class="fa-solid fa-book-open"></i> Jelajahi Materi
              </a>
              <a href="#/playground" class="btn btn-outline btn-lg">
                <i class="fa-solid fa-code"></i> Live Playground
              </a>
            </div>
            <div class="hero-stats">
              ${stats.map(s => `
                <div class="stat-item">
                  <div class="stat-number">${s.value}<span>${s.suffix}</span></div>
                  <div class="stat-label">${s.label}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="hero-visual">
            <div class="code-window-card">
              <div class="window-header">
                <div class="window-dots">
                  <span class="window-dot dot-red"></span>
                  <span class="window-dot dot-yellow"></span>
                  <span class="window-dot dot-green"></span>
                </div>
                <div class="window-title">brwnweb-academy.ts</div>
                <div class="window-badge">Live Interactive</div>
              </div>
              <div class="code-window-body">
                <span class="code-cmt">// Selamat datang di brwnweb Academy</span><br/>
                <span class="code-kw">import</span> { Developer } <span class="code-kw">from</span> <span class="code-str">'@brwnweb/future'</span>;<br/><br/>
                <span class="code-kw">const</span> student: Developer = {<br/>
                &nbsp;&nbsp;name: <span class="code-str">"Pelajar Cerdas"</span>,<br/>
                &nbsp;&nbsp;skills: [<span class="code-str">"HTML5"</span>, <span class="code-str">"CSS3"</span>, <span class="code-str">"JavaScript"</span>, <span class="code-str">"PHP PDO"</span>],<br/>
                &nbsp;&nbsp;readyToBuild: <span class="code-kw">true</span>,<br/>
                &nbsp;&nbsp;motto: <span class="code-str">"Coding dari nol hingga publikasi"</span><br/>
                };<br/><br/>
                <span class="code-fn">student.buildAwesomeWeb()</span>;<br/>
                <span class="code-cmt">// Status: Ready to Conquer the Web! 🚀</span>
              </div>
            </div>
            <div class="floating-badge floating-badge-1">
              <img src="assets/logo.jpg" alt="Logo" style="width:28px;height:28px;border-radius:50%;" />
              <span>Belajar Terstruktur 100% Praktik</span>
            </div>
            <div class="floating-badge floating-badge-2">
              <i class="fa-solid fa-shield-halved" style="color:var(--accent-gold);"></i>
              <span>Best Security & Clean Code</span>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE ARCHITECTURE SECTION -->
      <section class="section-wrapper" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Diagram Interaktif</span>
            <h2 class="section-title">Bagaimana Website Bekerja?</h2>
            <p class="section-desc">Klik setiap langkah atau tekan tombol simulasi untuk menyaksikan alur paket data dari ketukan jari Anda hingga tampilan halaman di browser.</p>
          </div>

          <div class="architecture-box">
            <div class="diagram-controls">
              <div style="font-size:0.9rem; font-weight:700; color:var(--text-secondary);">
                <i class="fa-solid fa-route" style="color:var(--accent-primary);"></i> Siklus: Request Pengguna &rarr; Server &rarr; Response Browser
              </div>
              <button id="btn-sim-request" class="btn btn-sm btn-primary" onclick="AcademyInteractive.startSimulation()">
                <i class="fa-solid fa-play"></i> Simulasikan Request Web
              </button>
            </div>

            <div class="diagram-steps">
              ${archSteps.map((step, idx) => `
                <div class="diagram-step-card ${idx === 0 ? 'active' : ''}" onclick="AcademyInteractive.selectArchStep(${idx})">
                  <div class="diagram-step-icon"><i class="fa-solid ${step.icon}"></i></div>
                  <div class="diagram-step-name">${step.name}</div>
                  <div class="diagram-step-seq">${step.shortDesc}</div>
                </div>
              `).join('')}
            </div>

            <div id="arch-detail-panel" class="diagram-detail-panel">
              <div class="diagram-detail-icon">
                <i class="fa-solid ${archSteps[0].icon}"></i>
              </div>
              <div class="diagram-detail-text">
                <h4>${archSteps[0].name}</h4>
                <p>${archSteps[0].detail}</p>
                <div class="diagram-tech-tags">
                  ${archSteps[0].tech.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- LEARNING CATEGORIES GRID -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Kurikulum Lengkap</span>
            <h2 class="section-title">Kategori Pembelajaran</h2>
            <p class="section-desc">Pilih jalur ilmu yang ingin Anda pelajari secara bertahap dengan bimbingan dan penjelasan menyeluruh.</p>
          </div>

          <div class="categories-grid">
            <a href="#/materi?cat=Dasar Web" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-globe"></i></div>
              <h3 class="cat-title">Mengenal Dunia Website</h3>
              <p class="cat-desc">Pahami definisi website, perbedaan website statis dan dinamis, serta relasi website dengan web app dan mobile app.</p>
              <div class="cat-meta">
                <span>Modul Dasar</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/materi?cat=Cara Kerja Internet" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-network-wired"></i></div>
              <h3 class="cat-title">Cara Kerja Internet</h3>
              <p class="cat-desc">Telusuri misteri di balik DNS lookup, IP address, protokol TCP, handshake SSL HTTPS, dan kode status respons.</p>
              <div class="cat-meta">
                <span>Arsitektur Web</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/bahasa-pemrograman" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-code"></i></div>
              <h3 class="cat-title">Bahasa Pemrograman</h3>
              <p class="cat-desc">Kuasai HTML, CSS, JavaScript, TypeScript, PHP, Node.js runtime, Python, dan database modern dengan komparasi stack.</p>
              <div class="cat-meta">
                <span>10+ Teknologi</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/tools" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-screwdriver-wrench"></i></div>
              <h3 class="cat-title">Tools & Software Developer</h3>
              <p class="cat-desc">Panduan memilih code editor (VS Code, Cursor), tools desain (Figma), Git & GitHub, Postman, dan platform deployment.</p>
              <div class="cat-meta">
                <span>Ekosistem Dev</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/website-development" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-laptop-code"></i></div>
              <h3 class="cat-title">Tutorial Website dari Nol</h3>
              <p class="cat-desc">8 langkah terstruktur menyusun sitemap, mendesain UI/UX, menulis kode frontend/backend, hingga peluncuran online.</p>
              <div class="cat-meta">
                <span>Step-by-Step Guide</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/database" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-database"></i></div>
              <h3 class="cat-title">Database & ERD Mastery</h3>
              <p class="cat-desc">Desain skema tabel, relasi One-to-Many, query SQL aman per baris, dan proteksi dari serangan SQL Injection.</p>
              <div class="cat-meta">
                <span>MySQL & SQL</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/app-development" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-mobile-screen-button"></i></div>
              <h3 class="cat-title">Membuat Aplikasi (Mobile/PWA)</h3>
              <p class="cat-desc">Eksplorasi pembuatan aplikasi Android, iOS (Flutter & React Native), Desktop App, dan Progressive Web Apps (PWA).</p>
              <div class="cat-meta">
                <span>Multiplatform</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/hosting" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-cloud-arrow-up"></i></div>
              <h3 class="cat-title">Hosting & Deployment</h3>
              <p class="cat-desc">Panduan upload ke shared hosting cPanel via FTP, deploy Vercel/Netlify otomatis dari Git, konfigurasi domain dan SSL.</p>
              <div class="cat-meta">
                <span>Go Live</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>

            <a href="#/projects" class="category-card">
              <div class="cat-icon-wrap"><i class="fa-solid fa-rocket"></i></div>
              <h3 class="cat-title">Proyek Praktik Riil</h3>
              <p class="cat-desc">15+ ide proyek nyata berjenjang (Pemula, Menengah, Mahir) dengan struktur folder, contoh kode, dan tantangan mandiri.</p>
              <div class="cat-meta">
                <span>Portfolio Ready</span>
                <span class="cat-link-text">Pelajari <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- LIVE EMBEDDED PLAYGROUND TEASER -->
      <section class="section-wrapper" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Interactive Sandbox</span>
            <h2 class="section-title">Coba Coding Langsung di Browser</h2>
            <p class="section-desc">Ketik HTML, perindah dengan CSS, hidupkan dengan JavaScript, dan saksikan hasilnya secara real-time tanpa perlu install aplikasi apapun!</p>
          </div>
          <div id="home-playground-mount"></div>
          <div style="text-align:center; margin-top:1.5rem;">
            <a href="#/playground" class="btn btn-secondary">
              <i class="fa-solid fa-up-right-from-square"></i> Buka Code Playground Layar Penuh
            </a>
          </div>
        </div>
      </section>

      <!-- CALL TO ACTION -->
      <section class="section-wrapper">
        <div class="container">
          <div class="architecture-box" style="text-align: center; background: var(--accent-gradient-subtle); border-color: var(--border-highlight);">
            <img src="assets/logo.jpg" alt="Logo" style="width:72px;height:72px;border-radius:50%;margin-bottom:1rem;border:3px solid var(--accent-primary);" />
            <h2 style="font-size:2.2rem; margin-bottom:1rem;">Mulai Langkah Pertamamu Bersama brwnweb Academy</h2>
            <p style="max-width:600px; margin:0 auto 1.75rem; color:var(--text-secondary);">
              Dari pemula tanpa pengalaman hingga mampu meluncurkan aplikasi web dan mobile ke internet. Seluruh materi disajikan dalam bahasa Indonesia yang praktis dan teruji.
            </p>
            <a href="#/roadmap" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-flag-checkered"></i> Mulai Dari Level 1 Sekarang
            </a>
          </div>
        </div>
      </section>

      <!-- WHATSAPP CONSULTATION SECTION (MASIH BINGUNG?) -->
      <section class="section-wrapper" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <span class="section-tag"><i class="fa-brands fa-whatsapp" style="color:#25D366;"></i> Layanan Konsultasi WhatsApp</span>
            <h2 class="section-title">Masih Bingung? Konsultasikan Bersama Kami</h2>
            <p class="section-desc">Punya pertanyaan seputar roadmap belajar, kendala coding, atau konsultasi pembuatan website & aplikasi? Tim konsultan BRWNWEB siap membantu Anda secara langsung via WhatsApp.</p>
          </div>

          <div class="consultants-grid">
            ${(window.ACADEMY_DATA.consultants || []).map(c => `
              <div class="consultant-card">
                <div class="consultant-header">
                  <div class="consultant-avatar">${c.initials}</div>
                  <div class="consultant-info">
                    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                      <h3 class="consultant-name">${c.name}</h3>
                      <span class="badge ${c.badge === 'Utama' ? 'badge-warning' : 'badge-outline'}">${c.badge}</span>
                    </div>
                    <div class="consultant-role">${c.role}</div>
                  </div>
                </div>

                <div class="consultant-phone">
                  <i class="fa-solid fa-phone" style="color:var(--accent-primary);"></i>
                  <span>${c.phone}</span>
                </div>

                <div class="consultant-actions">
                  <a href="${c.waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-wa">
                    <i class="fa-brands fa-whatsapp"></i> Chat WhatsApp
                  </a>
                  <button type="button" class="btn btn-secondary btn-copy-wa" onclick="copyPhoneNumber('${c.rawPhone}', '${c.name}')" title="Salin nomor WhatsApp ${c.name}">
                    <i class="fa-regular fa-copy"></i> Salin Nomor
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    // Mount playground on home page
    setTimeout(() => {
      if (window.AcademyPlayground) {
        window.AcademyPlayground.init('#home-playground-mount', 'counter');
      }
    }, 50);
  },

  // 2. ROADMAP VIEW
  renderRoadmap(root) {
    const roadmap = window.ACADEMY_DATA.roadmap;

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Jalur Belajar Terstruktur</span>
          <h2 class="section-title">Roadmap Belajar Web & Aplikasi</h2>
          <p class="section-desc">10 tingkatan pembelajaran dari nol hingga siap kerja dan mampu mempublikasikan aplikasi digital ke publik.</p>
          <div style="margin-top:1.25rem; display:flex; justify-content:center; gap:0.75rem;">
            <button class="btn btn-sm btn-secondary" onclick="AcademyInteractive.expandAllRoadmaps(true)">
              <i class="fa-solid fa-angles-down"></i> Buka Semua Level
            </button>
            <button class="btn btn-sm btn-secondary" onclick="AcademyInteractive.expandAllRoadmaps(false)">
              <i class="fa-solid fa-angles-up"></i> Tutup Semua
            </button>
          </div>
        </div>

        <div class="roadmap-container">
          ${roadmap.map((item, idx) => `
            <div class="roadmap-level-card ${idx < 2 ? 'open' : ''}" id="level-${item.level}">
              <div class="roadmap-header-row" onclick="AcademyInteractive.toggleRoadmapLevel(this.parentElement)">
                <div class="roadmap-level-badge">
                  <div class="level-number-pill">${item.level}</div>
                  <div class="level-title-group">
                    <h3>${item.title}</h3>
                    <div class="level-meta-inline">
                      <span><i class="fa-regular fa-clock"></i> Estimasi: ${item.estimatedTime}</span>
                      <span><i class="fa-solid fa-award"></i> Tingkat: ${item.levelBadge}</span>
                    </div>
                  </div>
                </div>
                <div class="roadmap-toggle-btn">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>

              <div class="roadmap-collapse-content">
                <p style="margin-bottom:1rem; color:var(--text-secondary); font-size:0.95rem;">
                  ${item.summary}
                </p>
                
                <h4 style="font-size:0.9rem; color:var(--accent-gold); text-transform:uppercase; letter-spacing:0.05em;">
                  Topik yang Dipelajari:
                </h4>
                <div class="level-topics-grid">
                  ${item.topics.map(t => `
                    <div class="topic-chip">
                      <i class="fa-solid fa-check"></i>
                      <span>${t}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="level-project-box">
                  <div>
                    <strong style="color:var(--text-primary); font-size:0.9rem; display:block; margin-bottom:0.2rem;">
                      <i class="fa-solid fa-diagram-project" style="color:var(--accent-primary);"></i> Proyek Latihan Level ${item.level}:
                    </strong>
                    <span style="font-size:0.88rem; color:var(--text-secondary);">${item.project}</span>
                  </div>
                  <a href="#/materi" class="btn btn-sm btn-primary">
                    Pelajari Modul Terkait <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 3. MATERI LIST VIEW
  renderMateriList(root, queryString) {
    const modules = window.ACADEMY_DATA.modules;
    let selectedCat = 'Semua';
    let selectedLevel = 'Semua';
    let searchQuery = '';
    let bookmarksOnly = false;

    if (queryString) {
      const params = new URLSearchParams(queryString);
      if (params.get('cat')) selectedCat = params.get('cat');
    }

    const categories = ['Semua', 'Dasar Web', 'Cara Kerja Internet', 'Frontend Development', 'Backend Development', 'Database', 'Tutorial Website', 'Hosting & Deployment', 'Membuat Aplikasi'];

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Daftar Modul</span>
          <h2 class="section-title">Koleksi Materi Pembelajaran</h2>
          <p class="section-desc">Materi teruji dengan penjelasan substantif, contoh kode valid, panduan kesalahan umum, dan quiz interaktif.</p>
        </div>

        <!-- Filter & Search Controls -->
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:1.25rem; margin-bottom:2rem; display:flex; flex-direction:column; gap:1rem;">
          <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <div style="flex:1; min-width:260px; position:relative;">
              <input type="text" id="materi-search-input" placeholder="Cari materi atau topik (cth: PHP, Flexbox, SQL, DNS)..." 
                style="width:100%; padding:0.65rem 1rem 0.65rem 2.5rem; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); color:var(--text-primary); outline:none;" />
              <i class="fa-solid fa-magnifying-glass" style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); color:var(--text-muted);"></i>
            </div>
            <select id="materi-level-select" style="padding:0.65rem 1rem; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); color:var(--text-primary); outline:none;">
              <option value="Semua">Semua Tingkat</option>
              <option value="Pemula">Pemula</option>
              <option value="Menengah">Menengah</option>
              <option value="Mahir">Mahir</option>
            </select>
            <button id="btn-toggle-bookmarks" class="btn btn-sm btn-secondary" onclick="window.toggleBookmarkFilter()">
              <i class="fa-regular fa-bookmark"></i> Tersimpan Saja
            </button>
          </div>

          <!-- Category Chips -->
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            ${categories.map(cat => `
              <button class="cat-filter-btn ${cat === selectedCat ? 'btn-primary' : 'btn-secondary'} btn btn-sm" data-category="${cat}" onclick="window.applyMateriCategory('${cat}')">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Modules Grid -->
        <div id="materi-cards-grid" class="categories-grid">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;

    const renderCards = () => {
      const grid = document.getElementById('materi-cards-grid');
      if (!grid) return;

      const filtered = modules.filter(m => {
        const matchCat = (selectedCat === 'Semua') || (m.category === selectedCat);
        const matchLevel = (selectedLevel === 'Semua') || (m.level === selectedLevel);
        const matchSearch = !searchQuery || (m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.summary.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchBookmark = !bookmarksOnly || window.AcademyStorage.isBookmarked(m.id);
        return matchCat && matchLevel && matchSearch && matchBookmark;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align:center; padding:3rem; background:var(--bg-card); border:1px dashed var(--border-color); border-radius:var(--radius-lg);">
            <i class="fa-regular fa-folder-open" style="font-size:2.5rem; color:var(--accent-gold); margin-bottom:1rem;"></i>
            <h3>Tidak Ada Materi Ditemukan</h3>
            <p style="color:var(--text-muted);">Coba ubah kata kunci pencarian atau reset filter kategori.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(m => {
        const isCompleted = window.AcademyStorage.isCompleted(m.id);
        const isBookmarked = window.AcademyStorage.isBookmarked(m.id);

        return `
          <div class="category-card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <span class="badge ${m.level === 'Pemula' ? 'badge-success' : (m.level === 'Menengah' ? 'badge-warning' : 'badge-info')}">${m.level}</span>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <button class="btn-icon" style="width:32px; height:32px; font-size:0.9rem;" onclick="window.toggleBookmarkFromCard('${m.id}', this)" title="Simpan Materi">
                    <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark" style="color:${isBookmarked ? 'var(--accent-primary)' : 'inherit'};"></i>
                  </button>
                  ${isCompleted ? '<span class="badge badge-success"><i class="fa-solid fa-check"></i> Selesai</span>' : ''}
                </div>
              </div>

              <h3 style="font-size:1.2rem; margin-bottom:0.6rem; color:var(--text-primary);">${m.title}</h3>
              <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6; margin-bottom:1.25rem;">${m.summary}</p>
            </div>

            <div style="padding-top:1rem; border-top:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.8rem; color:var(--text-muted);"><i class="fa-regular fa-clock"></i> ${m.readTime}</span>
              <a href="#/materi/${m.id}" class="btn btn-sm btn-primary">
                Buka Materi <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        `;
      }).join('');
    };

    // Events
    const searchInput = document.getElementById('materi-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderCards();
      });
    }

    const levelSelect = document.getElementById('materi-level-select');
    if (levelSelect) {
      levelSelect.addEventListener('change', (e) => {
        selectedLevel = e.target.value;
        renderCards();
      });
    }

    window.applyMateriCategory = (cat) => {
      selectedCat = cat;
      document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        const matches = btn.getAttribute('data-category') === cat;
        btn.className = `cat-filter-btn ${matches ? 'btn-primary' : 'btn-secondary'} btn btn-sm`;
      });
      renderCards();
    };

    window.toggleBookmarkFilter = () => {
      bookmarksOnly = !bookmarksOnly;
      const btn = document.getElementById('btn-toggle-bookmarks');
      if (btn) {
        btn.classList.toggle('btn-primary', bookmarksOnly);
        btn.classList.toggle('btn-secondary', !bookmarksOnly);
      }
      renderCards();
    };

    window.toggleBookmarkFromCard = (moduleId, el) => {
      const state = window.AcademyStorage.toggleBookmark(moduleId);
      const icon = el.querySelector('i');
      if (icon) {
        icon.className = `${state ? 'fa-solid' : 'fa-regular'} fa-bookmark`;
        icon.style.color = state ? 'var(--accent-primary)' : 'inherit';
      }
      if (window.showToast) window.showToast(state ? "Materi ditambahkan ke bookmark!" : "Materi dihapus dari bookmark.");
    };

    renderCards();
  },

  // 4. MATERI DETAIL VIEW
  renderMateriDetail(root, moduleId) {
    const modules = window.ACADEMY_DATA.modules;
    const currentIndex = modules.findIndex(m => m.id === moduleId);
    const module = modules[currentIndex] || modules[0];

    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

    const isBookmarked = window.AcademyStorage.isBookmarked(module.id);
    const isCompleted = window.AcademyStorage.isCompleted(module.id);

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="materi-layout">
          <!-- Sidebar Navigation -->
          <aside class="materi-sidebar">
            <h4>Daftar Modul Materi</h4>
            <ul class="materi-nav-list">
              ${modules.map(m => `
                <li class="materi-nav-item">
                  <a href="#/materi/${m.id}" class="${m.id === module.id ? 'active' : ''}">
                    <span>${m.title.length > 28 ? m.title.substring(0, 26) + '...' : m.title}</span>
                    ${window.AcademyStorage.isCompleted(m.id) ? '<i class="fa-solid fa-check" style="color:var(--success); font-size:0.75rem;"></i>' : ''}
                  </a>
                </li>
              `).join('')}
            </ul>

            <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-color);">
              <a href="#/materi" class="btn btn-sm btn-outline" style="width:100%;">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Daftar
              </a>
            </div>
          </aside>

          <!-- Main Content Area -->
          <article class="materi-content-area">
            <div class="materi-header-banner">
              <div class="materi-meta-row">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <span class="badge ${module.level === 'Pemula' ? 'badge-success' : 'badge-warning'}">${module.level}</span>
                  <span class="badge badge-outline">${module.category}</span>
                  <span style="font-size:0.85rem; color:var(--text-muted);"><i class="fa-regular fa-clock"></i> ${module.readTime}</span>
                </div>
                <div class="materi-actions-group">
                  <button id="btn-detail-bookmark" class="btn btn-sm btn-secondary" onclick="window.toggleDetailBookmark('${module.id}')">
                    <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark" style="color:${isBookmarked ? 'var(--accent-primary)' : 'inherit'};"></i>
                    <span>${isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
                  </button>
                  <button id="btn-detail-complete" class="btn btn-sm ${isCompleted ? 'btn-primary' : 'btn-secondary'}" onclick="window.toggleDetailComplete('${module.id}')">
                    <i class="fa-solid fa-check"></i>
                    <span>${isCompleted ? 'Sudah Selesai' : 'Tandai Selesai'}</span>
                  </button>
                </div>
              </div>

              <h1 style="font-size:2.2rem; margin-bottom:0.75rem;">${module.title}</h1>
              <p style="font-size:1.05rem; color:var(--text-secondary);">${module.summary}</p>
            </div>

            <!-- Content Body -->
            <div class="materi-body">
              ${module.content}
            </div>

            <!-- Checklist Selesai -->
            <div class="checklist-box">
              <h4><i class="fa-solid fa-list-check"></i> Checklist Pemahaman Materi</h4>
              <ul class="checklist-items">
                ${module.checklist.map(item => `
                  <li class="checklist-item">
                    <input type="checkbox" onchange="window.showToast('Item checklist diperbarui!');" />
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Interactive Quiz -->
            ${module.quiz ? `
              <div class="interactive-quiz-box">
                <div class="quiz-header">
                  <span class="badge badge-warning"><i class="fa-solid fa-question-circle"></i> Kuis Evaluasi Modul</span>
                  <span style="font-size:0.8rem; color:var(--text-muted);">Pilih jawaban yang paling benar</span>
                </div>
                <h4 style="margin-bottom:1rem; font-size:1.1rem;">${module.quiz.question}</h4>
                <div class="quiz-options">
                  ${module.quiz.options.map((opt, oIdx) => `
                    <button class="quiz-option-btn" onclick="AcademyInteractive.handleQuizAnswer(this, ${oIdx}, ${module.quiz.correct}, '${module.quiz.explanation.replace(/'/g, "\\'")}')">
                      <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
                    </button>
                  `).join('')}
                </div>
                <div class="quiz-feedback"></div>
              </div>
            ` : ''}

            <!-- Prev / Next Navigation -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:3rem; padding-top:2rem; border-top:1px solid var(--border-color); flex-wrap:wrap; gap:1rem;">
              ${prevModule ? `
                <a href="#/materi/${prevModule.id}" class="btn btn-secondary">
                  <i class="fa-solid fa-arrow-left"></i> Sebelumnya: ${prevModule.title.substring(0, 20)}...
                </a>
              ` : `<div></div>`}

              ${nextModule ? `
                <a href="#/materi/${nextModule.id}" class="btn btn-primary">
                  Selanjutnya: ${nextModule.title.substring(0, 20)}... <i class="fa-solid fa-arrow-right"></i>
                </a>
              ` : `
                <a href="#/projects" class="btn btn-primary">
                  Lanjut ke Proyek Praktik <i class="fa-solid fa-rocket"></i>
                </a>
              `}
            </div>
          </article>
        </div>
      </div>
    `;

    window.toggleDetailBookmark = (mId) => {
      const state = window.AcademyStorage.toggleBookmark(mId);
      const btn = document.getElementById('btn-detail-bookmark');
      if (btn) {
        btn.innerHTML = `<i class="${state ? 'fa-solid' : 'fa-regular'} fa-bookmark" style="color:${state ? 'var(--accent-primary)' : 'inherit'};"></i> <span>${state ? 'Tersimpan' : 'Simpan'}</span>`;
      }
      if (window.showToast) window.showToast(state ? "Modul disimpan ke bookmark!" : "Modul dihapus dari bookmark.");
    };

    window.toggleDetailComplete = (mId) => {
      const state = window.AcademyStorage.toggleCompleted(mId);
      const btn = document.getElementById('btn-detail-complete');
      if (btn) {
        btn.className = `btn btn-sm ${state ? 'btn-primary' : 'btn-secondary'}`;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>${state ? 'Sudah Selesai' : 'Tandai Selesai'}</span>`;
      }
      if (window.showToast) window.showToast(state ? "Hebat! Modul ini ditandai selesai." : "Status modul direset ke belum selesai.");
    };
  },

  // 5. BAHASA PEMROGRAMAN & TEKNOLOGI VIEW
  renderLanguages(root) {
    const techs = window.ACADEMY_DATA.technologies;

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Teknologi & Bahasa Pemrograman</span>
          <h2 class="section-title">Peta Teknologi Web & Ekosistem Developer</h2>
          <p class="section-desc">Pahami perbedaan bahasa pemrograman, markup, stylesheet, runtime, dan database. Jangan keliru: Node.js adalah runtime JavaScript, bukan bahasa baru!</p>
        </div>

        <!-- Comparative Stack Table -->
        <div style="margin-bottom:3rem;">
          <h3 style="margin-bottom:1rem; color:var(--accent-gold);"><i class="fa-solid fa-table-list"></i> Tabel Komparasi Stack Lengkap</h3>
          <div class="tech-table-wrapper">
            <table class="tech-table">
              <thead>
                <tr>
                  <th>Teknologi</th>
                  <th>Kategori</th>
                  <th>Tingkat</th>
                  <th>Kapan Digunakan</th>
                  <th>Lanjutan Cocok</th>
                </tr>
              </thead>
              <tbody>
                ${techs.map(t => `
                  <tr>
                    <td><strong>${t.name}</strong></td>
                    <td><span class="badge badge-outline">${t.category}</span></td>
                    <td><span class="badge ${t.difficulty.includes('Pemula') ? 'badge-success' : 'badge-warning'}">${t.difficulty}</span></td>
                    <td>${t.whenToUse}</td>
                    <td><code style="color:var(--accent-gold);">${t.nextTech}</code></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Detailed Cards Grid -->
        <h3 style="margin-bottom:1.5rem; color:var(--text-primary);"><i class="fa-solid fa-layer-group"></i> Bedah Mendalam Setiap Teknologi</h3>
        <div class="categories-grid">
          ${techs.map(t => `
            <div class="category-card" style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                  <h3 style="font-size:1.35rem; color:var(--text-primary);">${t.name}</h3>
                  <span class="badge ${t.difficulty.includes('Pemula') ? 'badge-success' : 'badge-warning'}">${t.difficulty}</span>
                </div>
                <div style="font-size:0.75rem; color:var(--accent-gold); text-transform:uppercase; font-weight:700; margin-bottom:0.75rem;">
                  ${t.category}
                </div>
                <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
                  ${t.summary}
                </p>

                <div style="background:var(--bg-secondary); padding:0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem; font-size:0.82rem;">
                  <strong style="color:var(--accent-primary); display:block; margin-bottom:0.25rem;">Fungsi & Kapan Digunakan:</strong>
                  ${t.whenToUse}
                </div>

                <div style="margin-bottom:1rem;">
                  <strong style="font-size:0.82rem; color:var(--text-muted); display:block; margin-bottom:0.4rem;">Contoh Sintaks:</strong>
                  <div class="code-block-wrapper" style="margin:0;">
                    <pre style="padding:0.75rem; font-size:0.75rem;"><code>${t.codeSnippet}</code></pre>
                  </div>
                </div>
              </div>

              <div style="padding-top:1rem; border-top:1px solid var(--border-color); font-size:0.82rem;">
                <div style="margin-bottom:0.4rem;"><strong style="color:var(--text-primary);">Ide Proyek:</strong> <span style="color:var(--text-secondary);">${t.projectIdea}</span></div>
                <div><strong style="color:var(--text-primary);">Next Stack:</strong> <span style="color:var(--accent-gold);">${t.nextTech}</span></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 6. TOOLS & SOFTWARE DEVELOPER VIEW
  renderTools(root) {
    const tools = window.ACADEMY_DATA.tools;

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Alat Perang Developer</span>
          <h2 class="section-title">Media & Tools untuk Membuat Website</h2>
          <p class="section-desc">Pilihan software terbaik untuk code editing, desain antarmuka, version control, testing API, dan deployment.</p>
        </div>

        <div class="categories-grid">
          ${tools.map(tool => `
            <div class="category-card" style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                  <h3 style="font-size:1.3rem; color:var(--text-primary);">${tool.name}</h3>
                  <span class="badge badge-success">${tool.price}</span>
                </div>
                <div style="font-size:0.8rem; color:var(--accent-gold); font-weight:700; margin-bottom:0.75rem;">
                  ${tool.category}
                </div>
                <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:1.25rem;">
                  ${tool.summary}
                </p>

                <h4 style="font-size:0.85rem; color:var(--text-primary); margin-bottom:0.5rem;">Fitur Utama:</h4>
                <ul style="margin-left:1.25rem; font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.25rem; display:flex; flex-direction:column; gap:0.35rem;">
                  ${tool.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
              </div>

              <div style="background:var(--accent-gradient-subtle); border:1px solid var(--badge-border); padding:0.75rem 1rem; border-radius:var(--radius-md); font-size:0.85rem;">
                <strong style="color:var(--accent-primary); display:block; margin-bottom:0.2rem;"><i class="fa-solid fa-thumbs-up"></i> Rekomendasi Penggunaan:</strong>
                <span style="color:var(--text-secondary);">${tool.recommendation}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 7. WEBSITE DEVELOPMENT FROM SCRATCH VIEW
  renderWebsiteDev(root) {
    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Panduan Komprehensif</span>
          <h2 class="section-title">Tutorial Membuat Website dari Nol</h2>
          <p class="section-desc">8 Tahap terstruktur dari penentuan konsep, wireframing, coding, backend, database hingga deployment online.</p>
        </div>

        <div style="max-width:860px; margin:0 auto; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-xl); padding:2.5rem; box-shadow:var(--shadow-md);">
          <div class="materi-body">
            <h2>Alur Pengerjaan Standar Industri</h2>
            <p>Membuat website bukan sekadar menulis tag kode, melainkan sebuah proses rekayasa perangkat lunak yang sistematis.</p>

            <div class="callout">
              <div class="callout-title">Tahap 1: Menentukan Tujuan dan Menyusun Sitemap</div>
              <p>Identifikasi apakah website adalah Company Profile, Toko Online, atau Web Application. Buat sitemap struktur halaman: Beranda, Tentang, Layanan, Blog, dan Kontak.</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 2: Membuat Desain UI/UX & Wireframe di Figma</div>
              <p>Gunakan Figma untuk menyusun wireframe layout hitam-putih sebelum memilih palet warna. Desain harus menerapkan grid sistem dan konsistensi spasi (4px atau 8px rule).</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 3: Menyiapkan Lingkungan & Struktur Folder</div>
              <p>Buka Visual Studio Code. Buat folder proyek dengan subfolder <code>css/</code>, <code>js/</code>, dan <code>assets/</code>. Pasang ekstensi <em>Live Server</em> untuk live preview lokal.</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 4: Mengembangkan Struktur HTML dan Styling CSS</div>
              <p>Mulai dari tag HTML5 semantik (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>). Terapkan metodologi Mobile-First CSS agar website otomatis rapi di smartphone.</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 5: Interaktivitas dengan JavaScript</div>
              <p>Bangun interaksi DOM seperti menu drawer mobile, accordion, formulir feedback, dan validasi data sebelum dikirim ke server.</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 6: Membangun Backend & Database Aman</div>
              <p>Gunakan PHP PDO atau Node.js Express. Pastikan otentikasi login menggunakan <code>password_hash()</code> dan query database wajib menggunakan <em>Prepared Statements</em>.</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 7: Testing di Berbagai Perangkat</div>
              <p>Uji responsivitas website di berbagai resolusi layar via Chrome DevTools Device Mode (iPhone, iPad, Layar Desktop 1080p). Pastikan tidak ada scroll horizontal liar.</p>
            </div>

            <div class="callout">
              <div class="callout-title">Tahap 8: Hosting, Domain, SSL & Optimasi SEO</div>
              <p>Deploy website ke server produksi (Vercel untuk statis, cPanel untuk PHP/MySQL). Pasang sertifikat SSL (HTTPS) dan optimasi meta tag Open Graph.</p>
            </div>
          </div>
          <div style="text-align:center; margin-top:2rem;">
            <a href="#/materi/cara-membuat-website-dari-nol" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-book-reader"></i> Baca Modul Tutorial Lengkap
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // 8. APP DEVELOPMENT VIEW
  renderAppDev(root) {
    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Arsitektur Multiplatform</span>
          <h2 class="section-title">Cara Membuat Aplikasi (Web, Mobile, Desktop, PWA)</h2>
          <p class="section-desc">Pahami perbedaan arsitektur web app, aplikasi native Android/iOS, cross-platform Flutter/React Native, desktop, dan Progressive Web Apps.</p>
        </div>

        <div style="margin-bottom:3rem;">
          <div class="tech-table-wrapper">
            <table class="tech-table">
              <thead>
                <tr>
                  <th>Tipe Aplikasi</th>
                  <th>Teknologi Pilihan</th>
                  <th>Biaya Pengembangan</th>
                  <th>Akses Hardware</th>
                  <th>Distribusi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Web Application</strong></td>
                  <td>React, Vue, Next.js, PHP, Node.js</td>
                  <td>Paling Hemat</td>
                  <td>Terbatas (via Web API)</td>
                  <td>Cukup URL Domain via Browser</td>
                </tr>
                <tr>
                  <td><strong>Progressive Web App (PWA)</strong></td>
                  <td>Service Worker, Manifest JSON</td>
                  <td>Sangat Hemat</td>
                  <td>Sedang (Offline, Push Notification)</td>
                  <td>Bisa 'Install to Homescreen' instan</td>
                </tr>
                <tr>
                  <td><strong>Cross-Platform Mobile</strong></td>
                  <td>Flutter (Dart), React Native (JS/TS)</td>
                  <td>Efisien (1 Codebase untuk 2 OS)</td>
                  <td>Lengkap (Kamera, GPS, Bluetooth)</td>
                  <td>Google Play Store & Apple App Store</td>
                </tr>
                <tr>
                  <td><strong>Native Mobile</strong></td>
                  <td>Kotlin (Android), Swift (iOS)</td>
                  <td>Tinggi (2 Tim Developer Berbeda)</td>
                  <td>100% Penuh & Performa Maksimal</td>
                  <td>Google Play Store & Apple App Store</td>
                </tr>
                <tr>
                  <td><strong>Desktop Application</strong></td>
                  <td>Electron.js, C# (.NET), Python (PyQt)</td>
                  <td>Menengah</td>
                  <td>Akses File System & OS Penuh</td>
                  <td>File Installer .exe / .dmg / .deb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style="text-align:center;">
          <a href="#/materi/app-development-architecture" class="btn btn-primary">
            <i class="fa-solid fa-book-open"></i> Buka Modul Mendalam Arsitektur Aplikasi
          </a>
        </div>
      </div>
    `;
  },

  // 9. DATABASE VIEW
  renderDatabase(root) {
    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Struktur Data & Relasi</span>
          <h2 class="section-title">Pembelajaran Database & ERD</h2>
          <p class="section-desc">Pahami relasi One-to-One, One-to-Many, dan Many-to-Many serta eksekusi query SQL dengan aman.</p>
        </div>

        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-xl); padding:2rem; margin-bottom:2.5rem; box-shadow:var(--shadow-md);">
          <h3 style="color:var(--accent-gold); margin-bottom:1rem;"><i class="fa-solid fa-sitemap"></i> Diagram Relasi Tabel (ERD) Sistem Pendaftaran Siswa</h3>
          
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin-bottom:1.5rem;">
            <!-- Table 1: users -->
            <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden;">
              <div style="background:var(--bg-tertiary); padding:0.6rem 1rem; font-weight:700; color:var(--accent-primary); display:flex; justify-content:space-between;">
                <span><i class="fa-solid fa-table"></i> users</span>
                <span class="badge badge-outline">Master</span>
              </div>
              <ul style="list-style:none; padding:1rem; font-family:var(--font-mono); font-size:0.85rem; display:flex; flex-direction:column; gap:0.4rem;">
                <li style="color:var(--accent-gold);"><i class="fa-solid fa-key"></i> id (INT, PK)</li>
                <li>nama (VARCHAR)</li>
                <li>email (VARCHAR, Unique)</li>
                <li>password (VARCHAR, Hashed)</li>
                <li>role (ENUM)</li>
              </ul>
            </div>

            <!-- Table 2: enrollments -->
            <div style="background:var(--bg-secondary); border:2px solid var(--accent-primary); border-radius:var(--radius-md); overflow:hidden;">
              <div style="background:var(--accent-gradient-subtle); padding:0.6rem 1rem; font-weight:700; color:var(--text-primary); display:flex; justify-content:space-between;">
                <span><i class="fa-solid fa-link"></i> enrollments</span>
                <span class="badge badge-warning">Junction / Relasi (1:N)</span>
              </div>
              <ul style="list-style:none; padding:1rem; font-family:var(--font-mono); font-size:0.85rem; display:flex; flex-direction:column; gap:0.4rem;">
                <li style="color:var(--accent-gold);"><i class="fa-solid fa-key"></i> id (INT, PK)</li>
                <li style="color:#63B3ED;"><i class="fa-solid fa-arrow-right"></i> user_id (INT, FK &rarr; users.id)</li>
                <li style="color:#63B3ED;"><i class="fa-solid fa-arrow-right"></i> course_id (INT, FK &rarr; courses.id)</li>
                <li>status (ENUM)</li>
                <li>enrolled_at (TIMESTAMP)</li>
              </ul>
            </div>

            <!-- Table 3: courses -->
            <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden;">
              <div style="background:var(--bg-tertiary); padding:0.6rem 1rem; font-weight:700; color:var(--accent-primary); display:flex; justify-content:space-between;">
                <span><i class="fa-solid fa-table"></i> courses</span>
                <span class="badge badge-outline">Master</span>
              </div>
              <ul style="list-style:none; padding:1rem; font-family:var(--font-mono); font-size:0.85rem; display:flex; flex-direction:column; gap:0.4rem;">
                <li style="color:var(--accent-gold);"><i class="fa-solid fa-key"></i> id (INT, PK)</li>
                <li>judul (VARCHAR)</li>
                <li>kategori (VARCHAR)</li>
                <li>tingkat (ENUM)</li>
                <li>harga (INT)</li>
              </ul>
            </div>
          </div>

          <div style="text-align:center;">
            <a href="#/materi/database-erd" class="btn btn-primary">
              <i class="fa-solid fa-terminal"></i> Pelajari Query SQL & Relasi Selengkapnya
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // 10. HOSTING VIEW
  renderHosting(root) {
    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Infrastruktur & Publikasi</span>
          <h2 class="section-title">Hosting & Deployment Platform</h2>
          <p class="section-desc">Pilihan tempat mempublikasikan website Anda ke internet beserta panduan konfigurasi domain, SSL, dan DNS.</p>
        </div>

        <div class="categories-grid" style="margin-bottom:2.5rem;">
          <div class="category-card">
            <div class="cat-icon-wrap"><i class="fa-solid fa-bolt"></i></div>
            <h3 class="cat-title">Vercel & Netlify (Cloud Jamstack)</h3>
            <p class="cat-desc">Sangat cocok untuk website statis (HTML/CSS/JS) atau framework modern (Next.js, Vite, React). Terkoneksi otomatis dengan GitHub dengan HTTPS gratis.</p>
            <div class="cat-meta"><span>Frontend & SPA</span><span class="badge badge-success">100% Gratis</span></div>
          </div>

          <div class="category-card">
            <div class="cat-icon-wrap"><i class="fa-solid fa-server"></i></div>
            <h3 class="cat-title">Shared Hosting (cPanel)</h3>
            <p class="cat-desc">Standar industri untuk website berbasis PHP dan database MySQL. Dilengkapi File Manager grafis, phpMyAdmin, dan installer WordPress.</p>
            <div class="cat-meta"><span>PHP & MySQL</span><span class="badge badge-warning">Mulai Rp 15rb/bln</span></div>
          </div>

          <div class="category-card">
            <div class="cat-icon-wrap"><i class="fa-solid fa-terminal"></i></div>
            <h3 class="cat-title">Cloud VPS (DigitalOcean / AWS)</h3>
            <p class="cat-desc">Server virtual dengan akses root terminal Linux penuh. Cocok untuk aplikasi Node.js, Python FastAPI, Docker container, dan traffic tinggi.</p>
            <div class="cat-meta"><span>Skala Menengah - Besar</span><span class="badge badge-info">Fleksibilitas Tinggi</span></div>
          </div>
        </div>

        <div style="text-align:center;">
          <a href="#/materi/hosting-deployment" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-book"></i> Baca Panduan Lengkap Upload ke cPanel & SSL
          </a>
        </div>
      </div>
    `;
  },

  // 11. PROJECTS VIEW
  renderProjects(root) {
    const projects = window.ACADEMY_DATA.projects;

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Project-Based Learning</span>
          <h2 class="section-title">Proyek Praktik Nyata</h2>
          <p class="section-desc">Bangun portofolio profesional Anda melalui proyek-proyek riil bertahap dari level pemula hingga mahir.</p>
        </div>

        <div class="categories-grid">
          ${projects.map(p => `
            <div class="category-card" style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                  <span class="badge ${p.level === 'Pemula' ? 'badge-success' : (p.level === 'Menengah' ? 'badge-warning' : 'badge-info')}">${p.level}</span>
                  <span style="font-size:0.8rem; color:var(--text-muted);"><i class="fa-regular fa-clock"></i> ${p.duration}</span>
                </div>
                <h3 style="font-size:1.3rem; margin-bottom:0.75rem; color:var(--text-primary);">${p.title}</h3>
                <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:1.25rem;">${p.objective}</p>

                <div style="margin-bottom:1.25rem;">
                  <strong style="font-size:0.82rem; color:var(--accent-gold); display:block; margin-bottom:0.4rem;">Tech Stack:</strong>
                  <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                    ${p.tech.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
                  </div>
                </div>

                <div style="margin-bottom:1.25rem;">
                  <strong style="font-size:0.82rem; color:var(--text-primary); display:block; margin-bottom:0.4rem;">Fitur Utama:</strong>
                  <ul style="margin-left:1.25rem; font-size:0.85rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:0.35rem;">
                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                </div>

                <div style="margin-bottom:1.25rem;">
                  <strong style="font-size:0.82rem; color:var(--text-muted); display:block; margin-bottom:0.3rem;">Struktur Folder:</strong>
                  <div class="code-block-wrapper" style="margin:0;">
                    <pre style="padding:0.6rem; font-size:0.75rem;"><code>${p.folderStructure}</code></pre>
                  </div>
                </div>
              </div>

              <div style="background:var(--accent-gradient-subtle); border:1px solid var(--badge-border); padding:0.85rem; border-radius:var(--radius-md); font-size:0.85rem;">
                <strong style="color:var(--accent-primary); display:block; margin-bottom:0.25rem;"><i class="fa-solid fa-trophy"></i> Tantangan Ekstra:</strong>
                <span style="color:var(--text-secondary);">${p.challenge}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 12. DEDICATED PLAYGROUND PAGE
  renderPlaygroundPage(root) {
    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Live Sandbox</span>
          <h2 class="section-title">Interactive Code Playground</h2>
          <p class="section-desc">Eksperimen langsung dengan HTML, CSS, dan JavaScript di lingkungan sandbox yang aman. Pilih preset atau tulis ide Anda sendiri!</p>
        </div>

        <div id="full-playground-mount"></div>
      </div>
    `;

    setTimeout(() => {
      if (window.AcademyPlayground) {
        window.AcademyPlayground.init('#full-playground-mount', 'counter');
      }
    }, 50);
  },

  // 13. GLOSSARY VIEW
  renderGlossary(root) {
    const glossary = window.ACADEMY_DATA.glossary;

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Kamus Teknologi Web</span>
          <h2 class="section-title">Glosarium Istilah A - Z</h2>
          <p class="section-desc">Kumpulan istilah teknis penting dunia website dan pemrograman yang dijelaskan dalam bahasa Indonesia yang mudah dipahami.</p>
        </div>

        <div style="max-width:540px; margin:0 auto 2.5rem; position:relative;">
          <input type="text" id="glossary-search" placeholder="Cari istilah teknologi (cth: CORS, DNS, SQL, PWA)..."
            style="width:100%; padding:0.75rem 1rem 0.75rem 2.5rem; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); color:var(--text-primary); outline:none;" />
          <i class="fa-solid fa-magnifying-glass" style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); color:var(--text-muted);"></i>
        </div>

        <div id="glossary-grid" class="categories-grid">
          ${glossary.map(item => `
            <div class="category-card glossary-item-card">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                <h3 style="font-size:1.15rem; color:var(--accent-primary);">${item.term}</h3>
                <span class="badge badge-outline">${item.category}</span>
              </div>
              <p style="font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">${item.definition}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const input = document.getElementById('glossary-search');
    if (input) {
      input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.glossary-item-card').forEach(card => {
          const text = card.innerText.toLowerCase();
          card.style.display = text.includes(val) ? 'flex' : 'none';
        });
      });
    }
  },

  // 14. ABOUT & FEEDBACK VIEW
  renderAbout(root) {
    const brand = window.ACADEMY_DATA.brand;

    root.innerHTML = `
      <div class="container section-wrapper">
        <div class="section-header">
          <span class="section-tag">Tentang Platform</span>
          <h2 class="section-title">Mengenal ${brand.name}</h2>
          <p class="section-desc">Misi kami adalah mendemokratisasi edukasi teknologi web berkualitas premium bagi seluruh talenta digital Indonesia.</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center; margin-bottom:4rem;">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.75rem; margin-bottom:1.5rem;">
              <img src="assets/logo.jpg" alt="Logo" style="width:64px; height:64px; border-radius:50%; border:2px solid var(--accent-primary);" />
              <div>
                <h3 style="font-size:1.4rem;">${brand.name}</h3>
                <span style="color:var(--accent-gold); font-size:0.85rem; text-transform:uppercase;">Website Creation Services & Academy</span>
              </div>
            </div>
            <p style="margin-bottom:1rem; font-size:1.05rem; color:var(--text-secondary);">
              <strong>${brand.name}</strong> lahir dengan satu tekad: menyediakan panduan pembelajaran pemrograman dan rekayasa website yang substantif, bukan sekadar teori dangkal atau kartu kosong.
            </p>
            <p style="margin-bottom:1rem; font-size:1.05rem; color:var(--text-secondary);">
              Kami percaya bahwa setiap pemula berhak mendapatkan kurikulum yang runtut, contoh kode yang dapat langsung dipraktikkan, pemahaman keamanan modern (anti-SQL Injection, hashing password), serta bimbingan deployment nyata ke dunia online.
            </p>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-xl); padding:2rem; box-shadow:var(--shadow-lg);">
            <h3 style="color:var(--accent-primary); margin-bottom:1rem;"><i class="fa-solid fa-paper-plane"></i> Form Saran & Feedback</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.5rem;">
              Punya usulan materi baru atau menemukan kendala saat belajar? Kirimkan masukan Anda kepada tim instruktur kami:
            </p>
            <form onsubmit="window.handleFeedbackSubmit(event)">
              <div style="margin-bottom:1rem;">
                <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Nama Lengkap</label>
                <input type="text" required placeholder="Contoh: Budi Santoso" style="width:100%; padding:0.65rem 0.85rem; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); color:var(--text-primary); outline:none;" />
              </div>
              <div style="margin-bottom:1rem;">
                <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Email</label>
                <input type="email" required placeholder="budi@example.com" style="width:100%; padding:0.65rem 0.85rem; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); color:var(--text-primary); outline:none;" />
              </div>
              <div style="margin-bottom:1.25rem;">
                <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Pesan / Masukan</label>
                <textarea rows="4" required placeholder="Tuliskan saran atau pertanyaan Anda..." style="width:100%; padding:0.65rem 0.85rem; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); color:var(--text-primary); outline:none; resize:none;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">
                <i class="fa-solid fa-paper-plane"></i> Kirim Masukan
              </button>
            </form>
          </div>
        </div>

        <!-- WHATSAPP CONSULTATION CARDS IN ABOUT PAGE -->
        <div style="margin-top:2rem; padding-top:3rem; border-top:1px solid var(--border-color);">
          <div class="section-header" style="margin-bottom:2.5rem;">
            <span class="section-tag"><i class="fa-brands fa-whatsapp" style="color:#25D366;"></i> Layanan Konsultasi & Bantuan</span>
            <h2 class="section-title">Hubungi Tim Konsultan BRWNWEB</h2>
            <p class="section-desc">Butuh bimbingan langsung, diskusi materi belajar, atau konsultasi proyek website Anda? Silakan hubungi konsultan kami melalui WhatsApp berikut:</p>
          </div>

          <div class="consultants-grid">
            ${(window.ACADEMY_DATA.consultants || []).map(c => `
              <div class="consultant-card">
                <div class="consultant-header">
                  <div class="consultant-avatar">${c.initials}</div>
                  <div class="consultant-info">
                    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                      <h3 class="consultant-name">${c.name}</h3>
                      <span class="badge ${c.badge === 'Utama' ? 'badge-warning' : 'badge-outline'}">${c.badge}</span>
                    </div>
                    <div class="consultant-role">${c.role}</div>
                  </div>
                </div>

                <div class="consultant-phone">
                  <i class="fa-solid fa-phone" style="color:var(--accent-primary);"></i>
                  <span>${c.phone}</span>
                </div>

                <div class="consultant-actions">
                  <a href="${c.waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-wa">
                    <i class="fa-brands fa-whatsapp"></i> Chat WhatsApp
                  </a>
                  <button type="button" class="btn btn-secondary btn-copy-wa" onclick="copyPhoneNumber('${c.rawPhone}', '${c.name}')" title="Salin nomor WhatsApp ${c.name}">
                    <i class="fa-regular fa-copy"></i> Salin Nomor
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    window.handleFeedbackSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      if (window.showToast) window.showToast("Terima kasih! Feedback Anda berhasil dikirim ke tim brwnweb Academy.", "success");
    };
  },

  // 15. NOT FOUND VIEW
  renderNotFound(root) {
    root.innerHTML = `
      <div class="container section-wrapper" style="text-align:center; padding:6rem 0;">
        <h1 style="font-size:5rem; font-family:var(--font-mono); color:var(--accent-primary);">404</h1>
        <h2 style="margin-bottom:1rem;">Halaman Tidak Ditemukan</h2>
        <p style="color:var(--text-secondary); max-width:480px; margin:0 auto 2rem;">
          Halaman yang Anda tuju mungkin sudah dipindahkan atau URL yang dimasukkan kurang tepat.
        </p>
        <a href="#/" class="btn btn-primary">
          <i class="fa-solid fa-house"></i> Kembali ke Beranda
        </a>
      </div>
    `;
  }
};
