/**
 * BRWNWEB ACADEMY - INTERACTIVE CODE PLAYGROUND
 * Real-time 3-panel HTML/CSS/JS sandbox with isolated execution, templates & copy.
 */

window.AcademyPlayground = {
  currentTab: 'html',
  codes: {
    html: '',
    css: '',
    js: ''
  },

  init(containerSelector = '#playground-mount', templateKey = 'counter') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Load initial template
    const template = window.ACADEMY_DATA.playgroundTemplates[templateKey] || window.ACADEMY_DATA.playgroundTemplates.counter;
    this.codes.html = template.html;
    this.codes.css = template.css;
    this.codes.js = template.js;

    container.innerHTML = `
      <div class="playground-container">
        <!-- Editor Side -->
        <div class="editor-side">
          <div class="editor-tabs-bar">
            <div class="editor-tabs">
              <button class="tab-btn active" data-tab="html" onclick="AcademyPlayground.switchTab('html')">
                <i class="fa-brands fa-html5" style="color:#E54C21;"></i> HTML
              </button>
              <button class="tab-btn" data-tab="css" onclick="AcademyPlayground.switchTab('css')">
                <i class="fa-brands fa-css3-alt" style="color:#2965F1;"></i> CSS
              </button>
              <button class="tab-btn" data-tab="js" onclick="AcademyPlayground.switchTab('js')">
                <i class="fa-brands fa-js" style="color:#F7DF1E;"></i> JavaScript
              </button>
            </div>
            <div class="editor-tools">
              <select id="playground-template-select" class="btn btn-sm btn-secondary" onchange="AcademyPlayground.loadTemplate(this.value)">
                <option value="counter" ${templateKey === 'counter' ? 'selected' : ''}>Preset: Counter Interaktif</option>
                <option value="todo" ${templateKey === 'todo' ? 'selected' : ''}>Preset: Mini To-Do List</option>
              </select>
              <button class="btn btn-sm btn-secondary" onclick="AcademyPlayground.resetCode()" title="Reset ke kode awal">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
              <button class="btn btn-sm btn-secondary" onclick="AcademyPlayground.copyActiveCode()" title="Salin kode">
                <i class="fa-regular fa-copy"></i>
              </button>
              <button class="btn btn-sm btn-primary" onclick="AcademyPlayground.runCode()">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
          </div>
          <textarea id="playground-textarea" class="code-textarea" spellcheck="false" placeholder="Tulis kode Anda di sini..."></textarea>
        </div>

        <!-- Preview Side -->
        <div class="preview-side">
          <div class="preview-bar">
            <span><i class="fa-solid fa-desktop"></i> Live Output Preview</span>
            <button class="btn btn-sm btn-outline" onclick="AcademyPlayground.runCode()">
              <i class="fa-solid fa-arrows-rotate"></i> Refresh
            </button>
          </div>
          <iframe id="playground-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals" title="Code Sandbox Preview"></iframe>
        </div>
      </div>
    `;

    const textarea = document.getElementById('playground-textarea');
    if (textarea) {
      textarea.value = this.codes[this.currentTab];

      // Sync changes
      textarea.addEventListener('input', (e) => {
        this.codes[this.currentTab] = e.target.value;
      });

      // Enable Tab key indentation inside textarea
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          textarea.value = textarea.value.substring(0, start) + "  " + textarea.value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 2;
          this.codes[this.currentTab] = textarea.value;
        }
      });
    }

    // Initial Run
    this.runCode();
  },

  switchTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
    const textarea = document.getElementById('playground-textarea');
    if (textarea) {
      textarea.value = this.codes[tab] || '';
      textarea.focus();
    }
  },

  loadTemplate(key) {
    const template = window.ACADEMY_DATA.playgroundTemplates[key];
    if (template) {
      this.codes.html = template.html;
      this.codes.css = template.css;
      this.codes.js = template.js;
      const textarea = document.getElementById('playground-textarea');
      if (textarea) {
        textarea.value = this.codes[this.currentTab];
      }
      this.runCode();
      if (window.showToast) window.showToast(`Template "${template.name}" berhasil dimuat!`);
    }
  },

  resetCode() {
    const select = document.getElementById('playground-template-select');
    const key = select ? select.value : 'counter';
    this.loadTemplate(key);
  },

  copyActiveCode() {
    const code = this.codes[this.currentTab];
    navigator.clipboard.writeText(code).then(() => {
      if (window.showToast) window.showToast(`Kode ${this.currentTab.toUpperCase()} berhasil disalin!`);
    });
  },

  runCode() {
    const iframe = document.getElementById('playground-iframe');
    if (!iframe) return;

    const source = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            ${this.codes.css}
          </style>
        </head>
        <body>
          ${this.codes.html}
          <script>
            try {
              ${this.codes.js}
            } catch (err) {
              console.error(err);
              document.body.innerHTML += '<div style="color:#ff4d4f;padding:10px;background:#300;margin-top:10px;border-radius:6px;font-family:sans-serif;font-size:12px;"><strong>Error:</strong> ' + err.message + '</div>';
            }
          <\/script>
        </body>
      </html>
    `;

    iframe.srcdoc = source;
  }
};
