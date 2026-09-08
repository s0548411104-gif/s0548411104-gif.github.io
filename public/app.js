const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const isHebrew = document.documentElement.lang === 'he';
const navigationLabel = open => isHebrew ? (open ? 'סגירת תפריט ניווט' : 'פתיחת תפריט ניווט') : (open ? 'Close navigation' : 'Open navigation');
function closeMenu() { menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label',navigationLabel(false)); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label',navigationLabel(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed',String(item === button)));
  let count = 0;
  document.querySelectorAll('.project-card').forEach(card => { const show = filter === 'all' || card.dataset.categories.split(',').includes(filter); card.hidden = !show; if (show) count++; });
  document.querySelector('.project-count').textContent = `${count} ${isHebrew ? 'פרויקטים' : 'projects'}`;
}));
let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const dialog = document.getElementById(`dialog-${button.dataset.project}`);
  if (!dialog) return;
  lastTrigger = button;
  dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('dialog-open');
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { const box = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastTrigger?.focus(); });
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active',a.hash === `#${entry.target.id}`));
  }, {rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

const languageToggle = document.querySelector('.language-toggle');
const languagePanel = document.querySelector('#language-panel');
function closeLanguagePanel(restoreFocus = false) {
  languagePanel.hidden = true;
  languageToggle.setAttribute('aria-expanded', 'false');
  if (restoreFocus) languageToggle.focus();
}
languageToggle.addEventListener('click', () => {
  const open = languagePanel.hidden;
  languagePanel.hidden = !open;
  languageToggle.setAttribute('aria-expanded', String(open));
  if (open) languagePanel.querySelector('[aria-current="true"]').focus();
});
document.querySelector('.language-close').addEventListener('click', () => closeLanguagePanel(true));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !languagePanel.hidden) closeLanguagePanel(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.language-widget')) closeLanguagePanel();
});
document.querySelector('.language-widget').addEventListener('focusout', event => {
  if (!event.currentTarget.contains(event.relatedTarget)) closeLanguagePanel();
});
document.querySelectorAll('[data-language]').forEach(link => {
  const updateDestination = () => { link.href = `./${link.dataset.language === 'he' ? 'he.html' : 'index.html'}${location.hash}`; };
  updateDestination();
  window.addEventListener('hashchange', updateDestination);
  link.addEventListener('click', () => {
    try { localStorage.setItem('portfolio-language', link.dataset.language); } catch { /* Language links also work without storage. */ }
  });
});
// Only redirect returning visitors at the root entry; direct language links remain authoritative.
if (location.pathname.endsWith('/')) {
  try {
    if (localStorage.getItem('portfolio-language') === 'he') location.replace(`./he.html${location.hash}`);
  } catch { /* Restricted storage must not prevent access to the site. */ }
}
