// buses.js

document.addEventListener('DOMContentLoaded', () => {
    // Main element selections
    const menuContainer = document.querySelector('#buses .buses-menu');
    const heroImg = document.querySelector('#buses .buses-hero-image');
    const scrollArrow = document.querySelector('#buses .scroll-down-arrow');

    // NEW element selections
    const mobileMenuToggle = document.querySelector('#buses .buses-menu-toggle');
    const busInfoName = document.querySelector('#buses .bus-info-name');
    const busInfoButton = document.querySelector('#buses .bus-info-button');

    const busData = {
        bus1: {
            fullName: 'Autosan Gemini 33',
            photos: [
                { image: 'images/Autosan_Gemini/1.jpg', name: 'Autosan Gemini - Widok z przodu' },
                { image: 'images/Autosan_Gemini/2.jpg', name: 'Autosan Gemini - Widok z boku' },
                { image: 'images/Autosan_Gemini/3.jpg', name: 'Autosan Gemini - Widok z tyłu' },
                { image: 'images/Autosan_Gemini/4.jpg', name: 'Autosan Gemini - z tyłu' }
            ]
        },
        bus2: {
            fullName: 'Scania Irizar 50',
            photos: [
                { image: 'images/Scania_Irizar/1.jpg', name: 'Scania Irizar - Widok z przodu' },
                { image: 'images/Scania_Irizar/2.jpg', name: 'Scania Irizar - Widok z boku' },
                { image: 'images/Scania_Irizar/3.jpg', name: 'Scania Irizar - Widok z tyłu' },
                { image: 'images/Scania_Irizar/4.jpg', name: 'Scania Irizar - Widok z boku' }
            ]
        },
        bus3: {
            fullName: 'Van Hool Alicron 64',
            photos: [
                { image: 'images/Van_Hool55/1.jpg', name: 'Van Hool - Widok z przodu' },
                { image: 'images/Van_Hool55/2.jpg', name: 'Van Hool - Widok z boku' },
                { image: 'images/Van_Hool55/3.jpg', name: 'Van Hool - Widok z tyłu' },
                { image: 'images/Van_Hool55/4.jpg', name: 'Van Hool - Widok z boku' }
            ]
        },
        bus4: {
            fullName: 'Van Hool Alicron 64',
            photos: [
                { image: 'images/Van_Hool64/1.jpg', name: 'Van Hool - Widok z przodu' },
                { image: 'images/Van_Hool64/2.jpg', name: 'Van Hool - Widok z boku' },
                { image: 'images/Van_Hool64/3.jpg', name: 'Van Hool - Widok z tyłu' },
                { image: 'images/Van_Hool64/4.jpg', name: 'Van Hool - Widok z boku' }
            ]
        }
    };

    function renderPhotos(busKey) {
        const photosRoot = document.querySelector(`#${busKey}-photos`);
        if (!photosRoot) return;
        photosRoot.innerHTML = '';
        const photos = busData[busKey]?.photos || [];
        photos.slice(1).forEach((p, idx) => {
            const img = document.createElement('img');
            img.src = p.image;
            img.alt = p.name || `${busKey} ${idx + 2}`;
            img.loading = 'lazy';
            photosRoot.appendChild(img);
        });
    }

    function setActiveBus(busKey) {
        document.querySelectorAll('#buses .buses-menu-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = document.querySelector(`#buses .buses-menu-btn[data-bus="${busKey}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        const bus = busData[busKey];
        if (!bus) return;

        // Update hero image
        const heroData = bus.photos[0];
        if (heroImg && heroData) {
            heroImg.src = heroData.image;
            heroImg.alt = heroData.name;
        }

        // NEW: Update the bus name in the overlay
        if (busInfoName) {
            busInfoName.textContent = bus.fullName;
        }

        // Show/hide correct gallery
        document.querySelectorAll('.bus-photos').forEach(gallery => {
            gallery.style.display = 'none';
        });
        const activeGallery = document.querySelector(`#${busKey}-photos`);
        if (activeGallery) {
            activeGallery.style.display = 'block';
        }
        
        setupImageObserver();
    }
    
    function setupImageObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { root: document.querySelector('#buses'), threshold: 0.15 });

        document.querySelectorAll('#buses .buses-hero-image, #buses .bus-photos img').forEach(img => {
            observer.observe(img);
        });
    }

    function init() {
        renderPhotos('bus1');
        renderPhotos('bus2');
        renderPhotos('bus3');
        setActiveBus('bus1');
    
        // Main menu button logic
        document.querySelectorAll('#buses .buses-menu-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-bus');
                if (!key) return;
                setActiveBus(key);
                document.querySelector('#buses').scrollTo({ top: 0, behavior: 'smooth' });
                if (menuContainer.classList.contains('is-open')) {
                    menuContainer.classList.remove('is-open');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    
        // Mobile menu toggle logic
        mobileMenuToggle?.addEventListener('click', () => {
            const isOpen = menuContainer.classList.toggle('is-open');
            mobileMenuToggle.setAttribute('aria-expanded', isOpen);
        });
    
        // --- REFINED SCROLL LOGIC ---
        let lastScroll = 0;
        const busesSection = document.querySelector('#buses');
        const navbar = document.querySelector('.navbar');
        
        busesSection?.addEventListener('scroll', () => {
            const currentScroll = busesSection.scrollTop;
    
            // Hide the small down-arrow after a little scroll
            if (scrollArrow) {
                scrollArrow.classList.toggle('hidden', currentScroll > 50);
            }
    
            // Check if we are at the top of the page
            if (currentScroll <= 0) {
                navbar?.classList.remove('hidden');
                menuContainer?.classList.remove('hidden');
                lastScroll = 0;
                return;
            }
    
            // Determine scroll direction
            if (currentScroll > lastScroll) {
                // Scrolling Down: Hide the menus
                navbar?.classList.add('hidden');
                menuContainer?.classList.add('hidden');
            } else {
                // Scrolling Up: Show the menus
                navbar?.classList.remove('hidden');
                menuContainer?.classList.remove('hidden');
            }
    
            // Update lastScroll for the next scroll event
            lastScroll = currentScroll;
        });
    }

    init();
});