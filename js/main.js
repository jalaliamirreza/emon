// ============================================
// ERP Monitoring - Main JavaScript
// ============================================

(function() {
  'use strict';

  // ============================================
  // Language Management
  // ============================================

  const STORAGE_KEY = 'erpmon-language';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    updateLanguageUI();
    translatePage();
  }

  function getLanguage() {
    return currentLang;
  }

  function updateLanguageUI() {
    const buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  function translatePage() {
    const t = translations[currentLang];

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = getNestedValue(t, key);
      if (value) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.placeholder !== undefined) {
            el.placeholder = value;
          }
        } else {
          el.textContent = value;
        }
      }
    });

    // Translate elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const value = getNestedValue(t, key);
      if (value) {
        el.placeholder = value;
      }
    });

    // Translate elements with data-i18n-html (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const value = getNestedValue(t, key);
      if (value) {
        el.innerHTML = value;
      }
    });
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  // ============================================
  // Navigation
  // ============================================

  function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.navbar-links');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });

      // Close menu on link click
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          mobileToggle.classList.remove('active');
        });
      });
    }

    // Active link highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.navbar-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ============================================
  // Language Toggle
  // ============================================

  function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-toggle button');

    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== currentLang) {
          setLanguage(lang);
        }
      });
    });

    // Set initial language
    updateLanguageUI();
    translatePage();
  }

  // ============================================
  // Scroll Animations
  // ============================================

  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  // ============================================
  // Solutions Filter
  // ============================================

  function initSolutionsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const solutionCards = document.querySelectorAll('.solution-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        solutionCards.forEach(card => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
          }
        });
      });
    });
  }

  // ============================================
  // Contact Form
  // ============================================

  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = '...';

      // Collect form data
      const formData = new FormData(form);

      try {
        // Using Formspree (replace with your form ID)
        const response = await fetch('https://formspree.io/f/your-form-id', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showNotification(translations[currentLang].contact.form.success, 'success');
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        showNotification(translations[currentLang].contact.form.error, 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // ============================================
  // Notifications
  // ============================================

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 16px 24px;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 9999;
      animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  // ============================================
  // Smooth Scroll
  // ============================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // Solution Detail Page
  // ============================================

  function initSolutionDetail() {
    const solutionId = document.body.dataset.solution;
    if (!solutionId || !solutionDetails[solutionId]) return;

    const solution = solutionDetails[solutionId];
    const lang = currentLang;

    // Populate features list
    const featuresList = document.querySelector('.solution-features-list');
    if (featuresList && solution.features[lang]) {
      featuresList.innerHTML = solution.features[lang].map(feature => `
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ${feature}
        </li>
      `).join('');
    }

    // Populate benefits
    const benefitsGrid = document.querySelector('.benefits-grid');
    if (benefitsGrid && solution.benefits[lang]) {
      benefitsGrid.innerHTML = solution.benefits[lang].map(benefit => `
        <div class="benefit-card fade-in">
          <h4>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            ${benefit.title}
          </h4>
          <p>${benefit.description}</p>
        </div>
      `).join('');
    }

    // Populate metrics
    const metricsContainer = document.querySelector('.metrics-grid');
    if (metricsContainer) {
      const t = translations[lang].solutionDetail;
      metricsContainer.innerHTML = `
        <div class="metric-card fade-in">
          <div class="metric-value">${solution.metricsCount}</div>
          <div class="metric-label">${t.metricsCount}</div>
        </div>
        <div class="metric-card fade-in stagger-1">
          <div class="metric-value">${solution.triggersCount}</div>
          <div class="metric-label">${t.triggers}</div>
        </div>
        <div class="metric-card fade-in stagger-2">
          <div class="metric-value">${solution.dashboardsCount}</div>
          <div class="metric-label">${t.dashboards}</div>
        </div>
        <div class="metric-card fade-in stagger-3">
          <div class="metric-value">${solution.templatesCount}</div>
          <div class="metric-label">${t.templates}</div>
        </div>
      `;
    }
  }

  // ============================================
  // Typed Text Effect
  // ============================================

  function initTypedEffect() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    const words = ['Oracle', 'SAP', 'Siemens', 'AWS', 'GCP'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typedElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 50;
      } else {
        typedElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500;
      }

      setTimeout(type, delay);
    }

    type();
  }

  // ============================================
  // Counter Animation
  // ============================================

  function initCounters() {
    const counters = document.querySelectorAll('.stat-value, .metric-value');

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  function animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/(\d+)/);
    if (!match) return;

    const target = parseInt(match[1]);
    const suffix = text.replace(/\d+/, '');
    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = text;
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================
  // Particle Background (Optional)
  // ============================================

  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 50;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      };
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
  }

  // ============================================
  // CSS Animation Injection
  // ============================================

  function injectAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ============================================
  // Initialize
  // ============================================

  function init() {
    injectAnimationStyles();
    initNavigation();
    initLanguageToggle();
    initScrollAnimations();
    initSolutionsFilter();
    initContactForm();
    initSmoothScroll();
    initSolutionDetail();
    initTypedEffect();
    initCounters();
    initParticles();

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose language functions globally
  window.ERPMon = {
    setLanguage,
    getLanguage,
    translations
  };

})();
