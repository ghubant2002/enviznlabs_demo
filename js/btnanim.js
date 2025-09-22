// JS: re-trigger on every enter/exit
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.en_serv_banbtn3');

  // Optional: set per-element stagger (0.15s between items)
  buttons.forEach((btn, i) => btn.style.setProperty('--delay', `${i * 2.8}s`));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        // Restart animation reliably:
        el.classList.remove('animate');   // ensure removed
        void el.offsetWidth;             // force reflow
        el.classList.add('animate');     // add to start animation
      } else {
        // Remove so it can animate again next time it comes back
        el.classList.remove('animate');
      }
    });
  }, { threshold: 0.2 }); // tweak threshold/rootMargin to taste

  buttons.forEach(btn => observer.observe(btn));
});
