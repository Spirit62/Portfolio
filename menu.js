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
  console.log('Current pathname:', pathname);
  const isMenuPage = pathname.includes('menu.html');
  console.log('Is menu page:', isMenuPage);
  return isMenuPage ? '../index.html' : 'menu.html';
}

function renderNavbar() {
  console.log('renderNavbar called');
  const nav = document.querySelector('nav.navbar');
  console.log('Navbar element found:', !!nav);
  
  if (!nav) {
    console.warn('Navbar element not found');
    return;
  }

  const logoLink = getLogoLink();
  console.log('Logo link:', logoLink);

  nav.innerHTML = `
    <div class="navbar-container">
      <a href="${logoLink}" class="navbar-logo">Samriddha's Portfolio</a>
      <ul class="navbar-links">
        ${navLinks.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
      </ul>
    </div>
  `;
  console.log('Navbar rendered successfully');
}

// Run immediately if DOM is ready, otherwise wait
console.log('menu.js loaded, document.readyState:', document.readyState);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNavbar);
} else {
  renderNavbar();
}

