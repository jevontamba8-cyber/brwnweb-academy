/**
 * BRWNWEB ACADEMY - MAIN APPLICATION CONTROLLER
 * Initializes theme, global search modal (Ctrl+K), toast manager, and navbar progress sync.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. INITIALIZE THEME
  const savedTheme = window.AcademyStorage.getTheme();
  window.AcademyStorage.setTheme(savedTheme);
  updateThemeIcon(savedTheme);

  // 2. INITIALIZE ROUTER
  if (window.AcademyRouter) {
    window.AcademyRouter.init();
  }

  // 3. UPDATE PROGRESS IN NAVBAR
  updateNavProgress();

  // 4. LISTEN FOR STORAGE EVENTS
  window.addEventListener('progressUpdated', () => updateNavProgress());
  window.addEventListener('bookmarksUpdated', () => updateNavProgress());

  // 5. GLOBAL SHORTCUTS (CTRL+K FOR SEARCH, ESC TO CLOSE)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
    }
  });
});

// THEME TOGGLER
window.toggleTheme = function() {
  const current = window.AcademyStorage.getTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  window.AcademyStorage.setTheme(next);
  updateThemeIcon(next);
  showToast(`Mode tampilan diubah ke ${next === 'dark' ? 'Dark Mode (Espresso)' : 'Light Mode (Cafe Latte)'}`);
};

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark' 
      ? '<i class="fa-solid fa-sun" style="color:var(--accent-gold);"></i>' 
      : '<i class="fa-solid fa-moon" style="color:var(--accent-primary);"></i>';
  }
}

// NAVBAR & DRAWER PROGRESS
function updateNavProgress() {
  const percentage = window.AcademyStorage.getProgressPercentage();
  const fill = document.getElementById('nav-progress-fill');
  const text = document.getElementById('nav-progress-text');

  if (fill) fill.style.width = `${percentage}%`;
  if (text) text.innerText = `${percentage}%`;

  // Sync Drawer Progress
  const drawerFill = document.getElementById('drawer-progress-fill');
  const drawerText = document.getElementById('drawer-progress-text');
  if (drawerFill) drawerFill.style.width = `${percentage}%`;
  if (drawerText) drawerText.innerText = `${percentage}% Selesai`;
}

// MOBILE DRAWER CONTROLS (iOS Sheet & Android Drawer)
window.openMobileDrawer = function() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeMobileDrawer = function() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// UPDATE BOTTOM NAVIGATION ACTIVE STATE
window.updateBottomNav = function(path) {
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    const itemPath = item.getAttribute('data-path');
    if (!itemPath) return;

    if (itemPath === '/' && (path === '/' || path === '')) {
      item.classList.add('active');
    } else if (itemPath !== '/' && path.startsWith(itemPath)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// GLOBAL SEARCH MODAL
window.openSearchModal = function() {
  const modal = document.getElementById('search-modal-backdrop');
  const input = document.getElementById('search-modal-input');
  if (modal && input) {
    modal.classList.add('open');
    input.value = '';
    renderSearchResults('');
    setTimeout(() => input.focus(), 50);
  }
};

window.closeSearchModal = function() {
  const modal = document.getElementById('search-modal-backdrop');
  if (modal) modal.classList.remove('open');
};

window.handleGlobalSearchInput = function(e) {
  const query = e.target.value.toLowerCase().trim();
  renderSearchResults(query);
};

function renderSearchResults(query) {
  const list = document.getElementById('search-results-list');
  if (!list) return;

  if (!query) {
    list.innerHTML = `
      <li style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        <i class="fa-solid fa-magnifying-glass" style="margin-bottom:0.5rem; display:block; font-size:1.5rem;"></i>
        Ketik kata kunci untuk mencari modul, bahasa pemrograman, tools, atau istilah web...
      </li>
    `;
    return;
  }

  const results = [];
  const data = window.ACADEMY_DATA;

  // Search Modules
  data.modules.forEach(m => {
    if (m.title.toLowerCase().includes(query) || m.summary.toLowerCase().includes(query) || m.category.toLowerCase().includes(query)) {
      results.push({
        title: m.title,
        type: `Modul: ${m.category}`,
        link: `#/materi/${m.id}`,
        icon: 'fa-book-open'
      });
    }
  });

  // Search Technologies
  data.technologies.forEach(t => {
    if (t.name.toLowerCase().includes(query) || t.summary.toLowerCase().includes(query) || t.category.toLowerCase().includes(query)) {
      results.push({
        title: t.name,
        type: `Teknologi: ${t.category}`,
        link: `#/bahasa-pemrograman`,
        icon: 'fa-code'
      });
    }
  });

  // Search Tools
  data.tools.forEach(tool => {
    if (tool.name.toLowerCase().includes(query) || tool.summary.toLowerCase().includes(query)) {
      results.push({
        title: tool.name,
        type: `Tools: ${tool.category}`,
        link: `#/tools`,
        icon: 'fa-screwdriver-wrench'
      });
    }
  });

  // Search Glossary
  data.glossary.forEach(g => {
    if (g.term.toLowerCase().includes(query) || g.definition.toLowerCase().includes(query)) {
      results.push({
        title: g.term,
        type: `Glosarium: ${g.category}`,
        link: `#/glossary`,
        icon: 'fa-font'
      });
    }
  });

  if (results.length === 0) {
    list.innerHTML = `
      <li style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        Tidak ada hasil yang cocok dengan "<strong>${query}</strong>".
      </li>
    `;
    return;
  }

  list.innerHTML = results.slice(0, 8).map(r => `
    <li class="search-result-item">
      <a href="${r.link}" onclick="closeSearchModal()">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <i class="fa-solid ${r.icon}" style="color:var(--accent-primary);"></i>
          <div>
            <strong style="display:block; font-size:0.95rem;">${r.title}</strong>
            <span style="font-size:0.75rem; color:var(--text-muted);">${r.type}</span>
          </div>
        </div>
        <i class="fa-solid fa-arrow-right" style="font-size:0.8rem; color:var(--text-muted);"></i>
      </a>
    </li>
  `).join('');
}

// TOAST NOTIFICATION SYSTEM
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="color:var(--accent-primary);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// WHATSAPP CONSULTATION HELPERS
window.copyPhoneNumber = function(number, name) {
  navigator.clipboard.writeText(number).then(() => {
    window.showToast(`Nomor WhatsApp ${name} (${number}) berhasil disalin!`, 'success');
  }).catch(() => {
    window.showToast(`Nomor WhatsApp: ${number}`, 'info');
  });
};

window.openWhatsAppModal = function() {
  const modal = document.getElementById('wa-modal-backdrop');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeWhatsAppModal = function() {
  const modal = document.getElementById('wa-modal-backdrop');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};
