// contact.js

// Toast notification logic
function showToast(message) {
  let toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '60px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#007BFF';
  toast.style.color = '#fff';
  toast.style.padding = '12px 26px';
  toast.style.borderRadius = '8px';
  toast.style.fontSize = '1rem';
  toast.style.boxShadow = '0 2px 10px #007bff33';
  toast.style.zIndex = 9999;
  toast.style.opacity = '0.97';
  document.body.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 1800);
}

// Handle click-to-copy on .contact-details spans
document.querySelectorAll('.contact-details').forEach(function(span) {
  span.style.cursor = 'pointer';
  span.title = 'Click to copy';
  span.addEventListener('click', function(e) {
    // Copy value
    const text = e.target.innerText;
    navigator.clipboard.writeText(text)
      .then(() => showToast('Copied to clipboard!'))
      .catch(() => showToast('Failed to copy.'));
    e.stopPropagation();
  });
});

// Optional: Keyboard accessibility for contact-box
document.querySelectorAll('.contact-box').forEach(function(box) {
  box.setAttribute('tabindex', '0');
  box.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      box.click();
    }
  });
});

