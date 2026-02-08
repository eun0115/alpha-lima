function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.querySelector('.menu-btn');

  const isActive = sidebar.classList.toggle("active");
  if (isActive) {
    overlay && overlay.classList.add('active');
    menuBtn && menuBtn.setAttribute('aria-expanded', 'true');
    overlay && overlay.setAttribute('aria-hidden', 'false');
  } else {
    overlay && overlay.classList.remove('active');
    menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
    overlay && overlay.setAttribute('aria-hidden', 'true');
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.querySelector('.menu-btn');

  sidebar && sidebar.classList.remove('active');
  overlay && overlay.classList.remove('active');
  menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
  overlay && overlay.setAttribute('aria-hidden', 'true');
}

document.addEventListener('DOMContentLoaded', function() {
  // Close sidebar when a nav link is clicked (mobile)
  const links = document.querySelectorAll('.sidebar nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      closeSidebar();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSidebar();
  });
});
