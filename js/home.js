/* home.js */

document.addEventListener('DOMContentLoaded', () => {
  // Function to check if device is mobile (768px and below)
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Function to load appropriate images based on screen size
  function loadImages() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (!swiperWrapper) return;

    // Clear existing slides
    swiperWrapper.innerHTML = '';

    // Define image sets
    const desktopImages = [
      'images/MainPage/1.jpg',
      'images/MainPage/2.JPG', 
      'images/MainPage/3.JPG',
      'images/MainPage/4.JPG'
    ];

    const mobileImages = [
      'images/MainPage/mobile/1.jpg',
      'images/MainPage/mobile/2.jpg',
      'images/MainPage/mobile/3.jpg',
      'images/MainPage/mobile/4.jpg'
    ];

    // Choose appropriate image set
    const images = isMobile() ? mobileImages : desktopImages;

    // Create slides
    images.forEach((imageSrc, index) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<img src="${imageSrc}" alt="Autokar ${index + 1}" loading="lazy">`;
      swiperWrapper.appendChild(slide);
    });
  }

  // Load images on page load
  loadImages();

  // Initialize Swiper after images are loaded
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    // If you want pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
       el: '.swiper-scrollbar',
     },
  });

  // Reload images when window is resized
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const wasMobile = isMobile();
      loadImages();
      // Reinitialize Swiper if needed
      if (swiper) {
        swiper.update();
      }
    }, 250);
  });
});
