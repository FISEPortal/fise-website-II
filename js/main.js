// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Copyright year
document.getElementById('footer-year').textContent = new Date().getFullYear();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Staggered pillar reveal
const pillars = document.querySelectorAll('.pillar.reveal');
const pillarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.pillar.reveal')];
      siblings.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
        pillarObserver.unobserve(el);
      });
    }
  });
}, { threshold: 0.1 });

if (pillars.length) pillarObserver.observe(pillars[0]);

// Staggered audience cards
const cards = document.querySelectorAll('.audience-card.reveal');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.audience-card.reveal')];
      siblings.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 100);
        cardObserver.unobserve(el);
      });
    }
  });
}, { threshold: 0.1 });

if (cards.length) cardObserver.observe(cards[0]);
