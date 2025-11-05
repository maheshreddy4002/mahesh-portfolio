// Fade-in timeline blocks when scrolled into view
document.addEventListener('DOMContentLoaded', function () {
  const timelineBlocks = document.querySelectorAll('.timeline-block');

  function showBlocks() {
    timelineBlocks.forEach(block => {
      const rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        block.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', showBlocks);
  window.addEventListener('resize', showBlocks);
  showBlocks();

  // Tooltip functionality for badge
  document.querySelectorAll('.edu-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function () {
      badge.classList.add('show-tip');
      if (!badge.querySelector('.tooltip')) {
        const tip = document.createElement('span');
        tip.className = 'tooltip';
        tip.innerText = badge.getAttribute('data-desc') || "";
        badge.appendChild(tip);
        setTimeout(() => {
          tip.style.opacity = "1";
        }, 50);
      }
    });
    badge.addEventListener('mouseleave', function () {
      badge.classList.remove('show-tip');
      const tip = badge.querySelector('.tooltip');
      if (tip) badge.removeChild(tip);
    });
  });
});
