document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.querySelector('#buses .next');
  const prevButton = document.querySelector('#buses .prev');
  const slide = document.querySelector('#buses .slide');
  const items = document.querySelectorAll('#buses .slide .item');
  let currentIndex = 0;
  const totalItems = items.length;

  nextButton.addEventListener('click', () => {
      // Move the first item to the end
      slide.appendChild(slide.querySelector('.item'));
  });

  prevButton.addEventListener('click', () => {
      // Move the last item to the beginning
      const lastItem = slide.querySelector('.item:last-child');
      slide.insertBefore(lastItem, slide.firstChild);
  });
});

// Additional Script for Bus Switching
// JavaScript for Bus Switching
document.addEventListener('DOMContentLoaded', () => {
    // Define data for each bus
    const busData = {
        bus1: [
            {
                image: 'images/Scania_irizar/1.jpg',
                name: 'Scania Irizar - Widok z przodu',
                description: 'Imponujący przód autobusu Scania Irizar, gotowego do długich podróży w komforcie.'
            },
            {
                image: 'images/Scania_irizar/2.jpg',
                name: 'Scania Irizar - Widok z boku',
                description: 'Elegancka linia boczna Scania Irizar, podkreślająca jego nowoczesny design.'
            },
            {
                image: 'images/Scania_irizar/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
                description: 'Tył autobusu Scania Irizar, zaprojektowany z myślą o aerodynamice i estetyce.'
            },
            {
                image: 'images/Scania_irizar/4.jpg',
                name: 'Scania Irizar - Koła',
                description: 'Solidne koła Scania Irizar, gwarantujące bezpieczną i stabilną jazdę.'
            },
            {
                image: 'images/Scania_irizar/5.jpg',
                name: 'Scania Irizar - Wnętrze',
                description: 'Przestronne i komfortowe wnętrze Scania Irizar, idealne na długie podróże.'
            },
            {
                image: 'images/Scania_irizar/6.jpg',
                name: 'Scania Irizar - Siedzenia',
                description: 'Wygodne siedzenia w Scania Irizar, zapewniające relaks podczas jazdy.'
            },
            {
                image: 'images/Scania_irizar/7.jpg',
                name: 'Scania Irizar - Korytarz',
                description: 'Szeroki korytarz w Scania Irizar, ułatwiający poruszanie się po autobusie.'
            },
            {
                image: 'images/Scania_irizar/8.jpg',
                name: 'Scania Irizar - Przestrzeń bagażowa',
                description: 'Pojemna przestrzeń bagażowa w Scania Irizar, pomieści bagaże wszystkich pasażerów.'
            }
        ],
        bus2: [
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Widok z przodu',
                description: 'Imponujący przód autobusu Scania Irizar, gotowego do długich podróży w komforcie.'
            },
            {
                image: 'images/Autosan_Gemini/2.jpg',
                name: 'Scania Irizar - Widok z boku',
                description: 'Elegancka linia boczna Scania Irizar, podkreślająca jego nowoczesny design.'
            },
            {
                image: 'images/Autosan_Gemini/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
                description: 'Tył autobusu Scania Irizar, zaprojektowany z myślą o aerodynamice i estetyce.'
            },
            {
                image: 'images/Autosan_Gemini/4.jpg',
                name: 'Scania Irizar - Koła',
                description: 'Solidne koła Scania Irizar, gwarantujące bezpieczną i stabilną jazdę.'
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Wnętrze',
                description: 'Przestronne i komfortowe wnętrze Scania Irizar, idealne na długie podróże.'
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Siedzenia',
                description: 'Wygodne siedzenia w Scania Irizar, zapewniające relaks podczas jazdy.'
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Korytarz',
                description: 'Szeroki korytarz w Scania Irizar, ułatwiający poruszanie się po autobusie.'
            },
            {
                image: 'images/Autosan_Gemini/1.jpg',
                name: 'Scania Irizar - Przestrzeń bagażowa',
                description: 'Pojemna przestrzeń bagażowa w Scania Irizar, pomieści bagaże wszystkich pasażerów.'
            }
        ],
        bus3: [
            {
                image: 'images/Van_Hool/1.jpg',
                name: 'Scania Irizar - Widok z przodu',
                description: 'Imponujący przód autobusu Scania Irizar, gotowego do długich podróży w komforcie.'
            },
            {
                image: 'images/Van_Hool/2.jpg',
                name: 'Scania Irizar - Widok z boku',
                description: 'Elegancka linia boczna Scania Irizar, podkreślająca jego nowoczesny design.'
            },
            {
                image: 'images/Van_Hool/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
                description: 'Tył autobusu Scania Irizar, zaprojektowany z myślą o aerodynamice i estetyce.'
            },
            {
                image: 'images/Van_Hool/4.jpg',
                name: 'Scania Irizar - Koła',
                description: 'Solidne koła Scania Irizar, gwarantujące bezpieczną i stabilną jazdę.'
            },
            {
                image: 'images/Van_Hool/5.jpg',
                name: 'Scania Irizar - Wnętrze',
                description: 'Przestronne i komfortowe wnętrze Scania Irizar, idealne na długie podróże.'
            },
            {
                image: 'images/Van_Hool/6.jpg',
                name: 'Scania Irizar - Siedzenia',
                description: 'Wygodne siedzenia w Scania Irizar, zapewniające relaks podczas jazdy.'
            },
            {
                image: 'images/Van_Hool/7.jpg',
                name: 'Scania Irizar - Korytarz',
                description: 'Szeroki korytarz w Scania Irizar, ułatwiający poruszanie się po autobusie.'
            },
            {
                image: 'images/Van_Hool/8.jpg',
                name: 'Scania Irizar - Przestrzeń bagażowa',
                description: 'Pojemna przestrzeń bagażowa w Scania Irizar, pomieści bagaże wszystkich pasażerów.'
            }
        ],
        bus4: [
            {
                image: 'images/Renault_trafic/1.jpg',
                name: 'Scania Irizar - Widok z przodu',
                description: 'Imponujący przód autobusu Scania Irizar, gotowego do długich podróży w komforcie.'
            },
            {
                image: 'images/Renault_trafic/2.jpg',
                name: 'Scania Irizar - Widok z boku',
                description: 'Elegancka linia boczna Scania Irizar, podkreślająca jego nowoczesny design.'
            },
            {
                image: 'images/Renault_trafic/3.jpg',
                name: 'Scania Irizar - Widok z tyłu',
                description: 'Tył autobusu Scania Irizar, zaprojektowany z myślą o aerodynamice i estetyce.'
            },
            {
                image: 'images/Renault_trafic/4.jpg',
                name: 'Scania Irizar - Koła',
                description: 'Solidne koła Scania Irizar, gwarantujące bezpieczną i stabilną jazdę.'
            },
            {
                image: 'images/Renault_trafic/5.jpg',
                name: 'Scania Irizar - Wnętrze',
                description: 'Przestronne i komfortowe wnętrze Scania Irizar, idealne na długie podróże.'
            },
            {
                image: 'images/Renault_trafic/6.jpg',
                name: 'Scania Irizar - Siedzenia',
                description: 'Wygodne siedzenia w Scania Irizar, zapewniające relaks podczas jazdy.'
            },
            {
                image: 'images/Renault_trafic/7.jpg',
                name: 'Scania Irizar - Korytarz',
                description: 'Szeroki korytarz w Scania Irizar, ułatwiający poruszanie się po autobusie.'
            },
            {
                image: 'images/Renault_trafic/8.jpg',
                name: 'Scania Irizar - Przestrzeń bagażowa',
                description: 'Pojemna przestrzeń bagażowa w Scania Irizar, pomieści bagaże wszystkich pasażerów.'
            }
        ],
        // Add more bus data here...
    };

  

   // Select all bus switcher buttons and slide items
   const busButtons = document.querySelectorAll('#buses .bus-switcher .bus-btn');
   const slideItems = document.querySelectorAll('#buses .slide .item');

   // Function to update the gallery based on selected bus
   function updateGallery(bus) {
       const data = busData[bus];

       slideItems.forEach((item, index) => {
           if (data[index]) {
               // Update background image
               const imageUrl = data[index].image;
               item.style.backgroundImage = `url(${imageUrl})`;
               item.setAttribute('data-src', imageUrl); // Set data-src for lazy loading

               // Update content
               const content = item.querySelector('.content');
               if(content){
                   const nameElem = content.querySelector('.name');
                   const descElem = content.querySelector('.des');

                   nameElem.textContent = data[index].name;
                   descElem.textContent = data[index].description;
               }

               // Ensure the item is visible
               item.style.opacity = 1;
               item.style.pointerEvents = 'auto';

               // Lazy load the image when it comes into view
               lazyLoadImage(item);
           } else {
               // Hide the item if no data is available
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