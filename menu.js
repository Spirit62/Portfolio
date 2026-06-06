const navLinks = [
  { href: 'experience.html', text: 'Experience' },
  { href: 'extra-curriculars.html', text: 'ECAs' },
  { href: 'social-work.html', text: 'Skills' },
  { href: 'projects.html', text: 'Projects' },
  { href: '../pdf/research-paper.pdf', text: 'Research' },
  { href: 'social-media.html', text: 'Social Media' }
];

function getLogoLink() {
  const pathname = window.location.pathname;
  const isMenuPage = pathname.includes('menu.html');
  return isMenuPage ? '../index.html' : 'menu.html';
}

function renderNavbar() {
  const nav = document.querySelector('nav.navbar');
  if (!nav) {
    console.warn('Navbar element not found');
    return;
  }

  nav.innerHTML = `
    <div class="navbar-container">
      <a href="${getLogoLink()}" class="navbar-logo">Samriddha's Portfolio</a>
      <ul class="navbar-links">
        ${navLinks.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
      </ul>
    </div>
  `;
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNavbar);
} else {
  renderNavbar();
}
