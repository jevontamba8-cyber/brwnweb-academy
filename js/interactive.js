/**
 * BRWNWEB ACADEMY - INTERACTIVE SIMULATIONS & UI HANDLERS
 * Powers the web architecture request flow animation, quiz engines, filters, and ERD inspectors.
 */

window.AcademyInteractive = {
  activeStepIndex: 0,
  simInterval: null,

  // 1. WEB ARCHITECTURE SIMULATION
  selectArchStep(stepIndex) {
    const steps = window.ACADEMY_DATA.webArchitectureSteps;
    if (!steps || stepIndex < 0 || stepIndex >= steps.length) return;

    this.activeStepIndex = stepIndex;
    const step = steps[stepIndex];

    // Update active class on step cards
    document.querySelectorAll('.diagram-step-card').forEach((el, idx) => {
      el.classList.toggle('active', idx === stepIndex);
    });

    // Update detail box
    const detailBox = document.getElementById('arch-detail-panel');
    if (detailBox) {
      detailBox.innerHTML = `
        <div class="diagram-detail-icon">
          <i class="fa-solid ${step.icon}"></i>
        </div>
        <div class="diagram-detail-text">
          <h4>${step.name}</h4>
          <p>${step.detail}</p>
          <div class="diagram-tech-tags">
            ${step.tech.map(t => `<span class="badge badge-outline">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }
  },

  startSimulation() {
    if (this.simInterval) {
      clearInterval(this.simInterval);
      this.simInterval = null;
    }

    let current = 0;
    this.selectArchStep(current);
    if (window.showToast) window.showToast("Memulai simulasi alur request web...");

    const btn = document.getElementById('btn-sim-request');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Mensimulasikan...`;

    this.simInterval = setInterval(() => {
      current++;
      if (current >= window.ACADEMY_DATA.webArchitectureSteps.length) {
        clearInterval(this.simInterval);
        this.simInterval = null;
        if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> Putar Ulang Simulasi Request`;
        if (window.showToast) window.showToast("Siklus request-response selesai: HTTP 200 OK!");
        return;
      }
      this.selectArchStep(current);
    }, 1400);
  },

  // 2. QUIZ HANDLER
  handleQuizAnswer(btnElement, selectedIndex, correctIndex, explanation) {
    const parent = btnElement.closest('.interactive-quiz-box');
    if (!parent) return;

    // Disable all options
    const allButtons = parent.querySelectorAll('.quiz-option-btn');
    allButtons.forEach(b => b.disabled = true);

    const feedbackBox = parent.querySelector('.quiz-feedback');

    if (selectedIndex === correctIndex) {
      btnElement.classList.add('selected-correct');
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'var(--success-bg)';
        feedbackBox.style.color = 'var(--success)';
        feedbackBox.style.border = '1px solid rgba(56, 161, 105, 0.3)';
        feedbackBox.innerHTML = `<strong><i class="fa-solid fa-check-circle"></i> Benar Sekali!</strong><p style="margin-top:0.4rem;color:var(--text-secondary);">${explanation}</p>`;
      }
      if (window.showToast) window.showToast("Jawaban Anda benar! +10 Poin Belajar", "success");
    } else {
      btnElement.classList.add('selected-incorrect');
      allButtons[correctIndex].classList.add('selected-correct');
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'var(--danger-bg)';
        feedbackBox.style.color = 'var(--danger)';
        feedbackBox.style.border = '1px solid rgba(229, 62, 62, 0.3)';
        feedbackBox.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Kurang Tepat.</strong><p style="margin-top:0.4rem;color:var(--text-secondary);">${explanation}</p>`;
      }
      if (window.showToast) window.showToast("Jawaban kurang tepat. Periksa penjelasannya!", "warning");
    }
  },

  // 3. ROADMAP LEVEL TOGGLE
  toggleRoadmapLevel(cardElement) {
    cardElement.classList.toggle('open');
  },

  expandAllRoadmaps(open = true) {
    document.querySelectorAll('.roadmap-level-card').forEach(card => {
      if (open) card.classList.add('open');
      else card.classList.remove('open');
    });
  }
};
