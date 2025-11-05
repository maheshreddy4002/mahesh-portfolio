document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.skill-card');
  function revealCards() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 35) {
        card.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealCards);
  window.addEventListener('resize', revealCards);
  revealCards();
});



