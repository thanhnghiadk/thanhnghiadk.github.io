(function () {
  const root = document.documentElement;
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const fontBtn = document.querySelector('[data-font-toggle]');
  const printBtn = document.querySelector('[data-print]');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme', 'dark');

  const savedFont = localStorage.getItem('font');
  if (savedFont === 'serif') document.body.classList.add('font-serif');

  function syncButtons() {
    if (themeBtn) themeBtn.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    if (fontBtn) fontBtn.textContent = document.body.classList.contains('font-serif') ? 'Sans' : 'Serif';
  }

  themeBtn && themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncButtons();
  });

  fontBtn && fontBtn.addEventListener('click', () => {
    document.body.classList.toggle('font-serif');
    localStorage.setItem('font', document.body.classList.contains('font-serif') ? 'serif' : 'sans');
    syncButtons();
  });

  printBtn && printBtn.addEventListener('click', () => window.print());
  syncButtons();
})();
