const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
const langToggle = document.getElementById('lang-toggle');
const LANG_KEY = 'portfolio-lang';

const translations = {
  en: window?.TRANSLATIONS_EN || {},
  es: window?.TRANSLATIONS_ES || {}
};

const t = (key, lang) => translations[lang]?.[key] ?? translations.en[key] ?? '';

function applyTranslations(lang) {
  const finalLang = ['en', 'es'].includes(lang) ? lang : 'en';
  document.documentElement.setAttribute('lang', finalLang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key, finalLang);
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = t(key, finalLang);
    if (text) el.setAttribute('placeholder', text);
  });

  if (langToggle) {
    langToggle.setAttribute('aria-pressed', finalLang === 'es');
    langToggle.textContent = finalLang === 'es' ? 'ES | EN' : 'EN | ES';
  }
}

function setLanguage(lang) {
  const finalLang = ['en', 'es'].includes(lang) ? lang : 'en';
  localStorage.setItem(LANG_KEY, finalLang);
  applyTranslations(finalLang);
}

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId.startsWith('#')) return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active state on scroll
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav a[href="#${id}"]`);
      if (navLink) {
        navLink.classList.toggle('active', entry.isIntersecting);
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
}

// Language toggle
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = localStorage.getItem(LANG_KEY) || 'en';
    const next = current === 'en' ? 'es' : 'en';
    setLanguage(next);
  });
}

// Initialize language on load
const storedLang = localStorage.getItem(LANG_KEY) || 'en';
applyTranslations(storedLang);

// Form feedback
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const lang = localStorage.getItem(LANG_KEY) || 'en';
    const successText = t('form.success', lang);
    if (formMessage) {
      formMessage.textContent = successText;
    } else {
      alert(successText);
    }
    form.reset();
    if (formMessage) {
      setTimeout(() => { formMessage.textContent = ''; }, 5000);
    }
  });
}
