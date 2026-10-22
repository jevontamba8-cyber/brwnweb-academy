/**
 * BRWNWEB ACADEMY - STORAGE & STATE MANAGEMENT
 * Handles theme persistence, bookmarks, lesson progress, and quiz scores via LocalStorage.
 */

const STORAGE_KEYS = {
  THEME: 'brwnweb_theme',
  BOOKMARKS: 'brwnweb_bookmarks',
  COMPLETED: 'brwnweb_completed',
  QUIZ_SCORES: 'brwnweb_quiz_scores'
};

window.AcademyStorage = {
  // THEME
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  },

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  // BOOKMARKS
  getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS)) || [];
    } catch {
      return [];
    }
  },

  isBookmarked(moduleId) {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(moduleId);
  },

  toggleBookmark(moduleId) {
    let bookmarks = this.getBookmarks();
    const index = bookmarks.indexOf(moduleId);
    let state = false;
    if (index > -1) {
      bookmarks.splice(index, 1);
      state = false;
    } else {
      bookmarks.push(moduleId);
      state = true;
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    window.dispatchEvent(new CustomEvent('bookmarksUpdated', { detail: { moduleId, isBookmarked: state } }));
    return state;
  },

  // COMPLETED LESSONS
  getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED)) || [];
    } catch {
      return [];
    }
  },

  isCompleted(moduleId) {
    const list = this.getCompleted();
    return list.includes(moduleId);
  },

  toggleCompleted(moduleId) {
    let list = this.getCompleted();
    const index = list.indexOf(moduleId);
    let state = false;
    if (index > -1) {
      list.splice(index, 1);
      state = false;
    } else {
      list.push(moduleId);
      state = true;
    }
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('progressUpdated', { detail: { moduleId, isCompleted: state } }));
    return state;
  },

  // PROGRESS STATS
  getProgressPercentage() {
    const total = (window.ACADEMY_DATA && window.ACADEMY_DATA.modules) ? window.ACADEMY_DATA.modules.length : 1;
    const completed = this.getCompleted().length;
    return Math.min(100, Math.round((completed / total) * 100));
  }
};
