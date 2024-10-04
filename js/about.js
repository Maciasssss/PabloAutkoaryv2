/* about.js */

document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  // Example: Reveal features on scroll
  const revealFeatures = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    features.forEach(feature => {
      const elementTop = feature.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        feature.classList.add('visible');
      } else {
        feature.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', revealFeatures);
  revealFeatures(); // Initial check
});
