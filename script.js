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

  // Side tab behavior
document.querySelectorAll('.boxing-tab').forEach(tab => {
  tab.addEventListener('click', function () {

    const wrapper = this.closest('.boxing-layout');

    // Remove active from tabs
    wrapper.querySelectorAll('.boxing-tab')
      .forEach(t => t.classList.remove('active'));

    // Remove active from panels
    wrapper.querySelectorAll('.boxing-panel')
      .forEach(p => p.classList.remove('active'));

    // Activate clicked tab
    this.classList.add('active');

    // Show correct panel
    const target = this.dataset.target;
    wrapper.querySelector('#' + target).classList.add('active');

    // Recalculate accordion height
    const parentPanel = wrapper.closest('.panel');
    if (parentPanel && parentPanel.style.maxHeight) {
      parentPanel.style.maxHeight = parentPanel.scrollHeight + "px";
    }
  });
});

  // Accordion behavior for lessons page
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      if (!panel) return;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});

// Toggle member details on click
function toggleMemberDetails(element) {
  const details = element.querySelector('.member-details');
  if (!details) return;
  details.classList.toggle('show');
}
button.addEventListener("click", function () {
  const panel = this.nextElementSibling;

  this.classList.toggle("active");
  panel.classList.toggle("open");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});