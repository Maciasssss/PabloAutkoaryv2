document.addEventListener('DOMContentLoaded', () => {
    // Selecting necessary DOM elements
    const nextButton = document.querySelector('#buses .next');
    const prevButton = document.querySelector('#buses .prev');
    const slide = document.querySelector('#buses .slide');
    const items = document.querySelectorAll('#buses .slide .item');
    const busButtons = document.querySelectorAll('#buses .bus-switcher .bus-btn');
    const slideItems = document.querySelectorAll('#buses .slide .item');
    const busSwitcher = document.querySelector('#buses .bus-switcher');
    const busSwitcherToggle = document.querySelector('#buses .bus-switcher-toggle');
    let touchStartX = 0;
    let touchEndX = 0;

    const busData = {
        bus1: [
            {
                image: 'images/Scania_irizar/1.jpg',
                name: 'Scania Irizar - Widok z przodu',
            },
            {
                image: 'images/Scania_irizar/2.jpg',
                name: 'Scania Irizar - Widok z boku',
            },
            {
                image: 'images/Scania_irizar/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
            },
            {
                image: 'images/Scania_irizar/4.jpg',
                name: 'Scania Irizar - Widok z boku',
            },
            {
                image: 'images/Scania_irizar/5.jpg',
                name: 'Scania Irizar - Wnętrze',
            },
            {
                image: 'images/Scania_irizar/6.jpg',
                name: 'Scania Irizar - Korytarz',
            },
            {
                image: 'images/Scania_irizar/7.jpg',
                name: 'Scania Irizar - Siedzenia',
            },
            {
                image: 'images/Scania_irizar/8.jpg',
                name: 'Scania Irizar - Korytarz',
            }
        ],
        bus2: [
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Autosan Gemini - Widok z przodu',
            },
            {
                image: 'images/Autosan_Gemini/2.jpg',
                name: 'Autosan Gemini - Widok z boku',
            },
            {
                image: 'images/Autosan_Gemini/3.jpg',
                name: 'Autosan Gemini - Widok z tyłu',
            },
            {
                image: 'images/Autosan_Gemini/4.jpg',
                name: 'Autosan Gemini - z tyłu',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Autosan Gemini - Wnętrze',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Autosan Gemini - Siedzenia',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Autosan Gemini - Korytarz',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Autosan Gemini - Przestrzeń bagażowa',
            }
        ],
        bus3: [
            {
                image: 'images/Van_Hool/1.jpg',
                name: 'Van Hool - Widok z przodu',
            },
            {
                image: 'images/Van_Hool/2.jpg',
                name: 'Scania Irizar - Widok z boku',
            },
            {
                image: 'images/Van_Hool/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
            },
            {
                image: 'images/Van_Hool/4.jpg',
                name: 'Scania Irizar - Widok z boku',
            },
            {
                image: 'images/Van_Hool/5.jpg',
                name: 'Scania Irizar - Wnętrze',
            },
            {
                image: 'images/Van_Hool/6.jpg',
                name: 'Scania Irizar - Pablo',
            },
            {
                image: 'images/Van_Hool/7.jpg',
                name: 'Scania Irizar - Siedzenia',
            },
            {
                image: 'images/Van_Hool/8.jpg',
                name: 'Scania Irizar - Siedzenia',
            }
        ],
        // Add more bus data here...
    };

  
 // Functions to handle slide transitions
 function nextSlide() {
    slide.appendChild(slide.firstElementChild);
  }

  function prevSlide() {
    slide.insertBefore(slide.lastElementChild, slide.firstElementChild);
  }

  // Event listeners for navigation buttons
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  }

  // Touch events for mobile swipe functionality
  slide.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slide.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    if (touchEndX < touchStartX - 50) {
      // Swiped left
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      // Swiped right
      prevSlide();
    }
  }

  // Function to update the gallery based on selected bus
  function updateGallery(bus) {
    const data = busData[bus];

    slideItems.forEach((item, index) => {
      if (data[index]) {
        const imageUrl = data[index].image;
        item.style.backgroundImage = `url(${imageUrl})`;
        item.setAttribute('data-src', imageUrl);

        const content = item.querySelector('.content');
        if (content) {
          const nameElem = content.querySelector('.name');
          nameElem.textContent = data[index].name;
        }

        item.style.opacity = 1;
        item.style.pointerEvents = 'auto';

        lazyLoadImage(item);
      } else {
        item.style.opacity = 0;
        item.style.pointerEvents = 'none';
      }
    });
  }

  // Lazy loading images
  function lazyLoadImage(item) {
    const imgSrc = item.getAttribute('data-src');
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      item.style.backgroundImage = `url(${imgSrc})`;
    };
  }

  // Event listener for bus switcher buttons
  busButtons.forEach((button) => {
    button.addEventListener('click', () => {
      busButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedBus = button.getAttribute('data-bus');
      updateGallery(selectedBus);

      // Close the bus switcher menu on mobile after selection
      if (window.innerWidth <= 768 && busSwitcher.classList.contains('active')) {
        busSwitcher.classList.remove('active');
        busSwitcherToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Initialize gallery with the first bus on page load
  const initialBusButton = document.querySelector('#buses .bus-switcher .bus-btn.active');
  if (initialBusButton) {
    const initialBus = initialBusButton.getAttribute('data-bus');
    updateGallery(initialBus);
  }

  // Bus Switcher Toggle Functionality for mobile
  if (busSwitcherToggle) {
    busSwitcherToggle.addEventListener('click', () => {
      busSwitcher.classList.toggle('active');
      const expanded = busSwitcher.classList.contains('active');
      busSwitcherToggle.setAttribute('aria-expanded', expanded);
    });

    // Close the bus switcher menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        !busSwitcher.contains(e.target) &&
        busSwitcher.classList.contains('active') &&
        !busSwitcherToggle.contains(e.target)
      ) {
        busSwitcher.classList.remove('active');
        busSwitcherToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});