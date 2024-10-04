document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.querySelector('#buses .next');
  const prevButton = document.querySelector('#buses .prev');
  const slide = document.querySelector('#buses .slide');
  const items = document.querySelectorAll('#buses .slide .item');
  let currentIndex = 0;
  const totalItems = items.length;

  nextButton.addEventListener('click', () => {
      slide.appendChild(slide.querySelector('.item'));
  });

  prevButton.addEventListener('click', () => {
      const lastItem = slide.querySelector('.item:last-child');
      slide.insertBefore(lastItem, slide.firstChild);
  });
});

document.addEventListener('DOMContentLoaded', () => {
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
                name: 'Scania Irizar - Widok z przodu',
            },
            {
                image: 'images/Autosan_Gemini/2.jpg',
                name: 'Scania Irizar - Widok z boku',
            },
            {
                image: 'images/Autosan_Gemini/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
            },
            {
                image: 'images/Autosan_Gemini/4.jpg',
                name: 'Scania Irizar - Koła',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Wnętrze',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Siedzenia',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Korytarz',
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Przestrzeń bagażowa',
            }
        ],
        bus3: [
            {
                image: 'images/Van_Hool/1.jpg',
                name: 'Scania Irizar - Widok z przodu',
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
                name: 'Scania Irizar - Koła',
            },
            {
                image: 'images/Van_Hool/5.jpg',
                name: 'Scania Irizar - Wnętrze',
            },
            {
                image: 'images/Van_Hool/6.jpg',
                name: 'Scania Irizar - Siedzenia',
            },
            {
                image: 'images/Van_Hool/7.jpg',
                name: 'Scania Irizar - Korytarz',
            },
            {
                image: 'images/Van_Hool/8.jpg',
                name: 'Scania Irizar - Przestrzeń bagażowa',
            }
        ],
        // Add more bus data here...
    };

  

   const busButtons = document.querySelectorAll('#buses .bus-switcher .bus-btn');
   const slideItems = document.querySelectorAll('#buses .slide .item');

   function updateGallery(bus) {
       const data = busData[bus];

       slideItems.forEach((item, index) => {
           if (data[index]) {
               // Update background image
               const imageUrl = data[index].image;
               item.style.backgroundImage = `url(${imageUrl})`;
               item.setAttribute('data-src', imageUrl); 

               const content = item.querySelector('.content');
               if(content){
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

   // Lazy load images when they are in the viewport
   function lazyLoadImage(item) {
       const imgSrc = item.getAttribute('data-src');
       const img = new Image();
       img.src = imgSrc;

       img.onload = () => {
           item.style.backgroundImage = `url(${imgSrc})`;
       };
   }

   // Event listener for bus switcher buttons
   busButtons.forEach(button => {
       button.addEventListener('click', () => {
           busButtons.forEach(btn => btn.classList.remove('active'));
           button.classList.add('active');

           const selectedBus = button.getAttribute('data-bus');
           updateGallery(selectedBus);
       });
   });

   // Initialize gallery with the first bus on page load
   const initialBus = document.querySelector('#buses .bus-switcher .bus-btn.active').getAttribute('data-bus');
   updateGallery(initialBus);
});