import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('labspace_theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  const themeBtn = document.getElementById('btn-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('labspace_theme', next);
    });
  }

  const collapseBtn = document.getElementById('btn-collapse-sidebar');
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-collapsed');
    });
  }

  const quickSearch = document.getElementById('sidebar-quick-search');
  if (quickSearch) {
    quickSearch.addEventListener('input', () => {
      const q = quickSearch.value.trim().toLowerCase();
      document.querySelectorAll('[data-cf-item]').forEach((item) => {
        item.style.display = !q || item.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.body.classList.remove('sidebar-collapsed');
        quickSearch.focus();
        quickSearch.select();
      }
    });
  }

  const drawer = document.getElementById('mobile-drawer');
  const openBtn = document.getElementById('btn-mobile-drawer');
  const closeBtn = document.getElementById('btn-close-drawer');
  const scrim = document.getElementById('drawer-scrim');
  if (drawer && openBtn) {
    openBtn.addEventListener('click', () => drawer.classList.remove('hidden'));
    if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
    if (scrim) scrim.addEventListener('click', () => drawer.classList.add('hidden'));
  }
});
