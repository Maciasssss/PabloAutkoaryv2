/* nav.js */

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button, .logo-button');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const busButtons = document.querySelectorAll('.bus-button');
    const navBusButtonsContainer = document.querySelector('.nav-bus-buttons');

    // Function to deactivate all nav buttons
    const deactivateNavButtons = () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
    };

   // Function to hide all sections
    const hideAllSections = () => {
        sections.forEach(section => {
            section.style.opacity = '0'; // Start fading out
            section.style.transition = 'opacity 0.5s ease'; // Ensure transition

            // Optional: use setTimeout to wait for transition before hiding
            setTimeout(() => {
                section.classList.remove('active');
            }, 500); // Match the timeout with your transition duration
        });
    };


    // Function to handle nav button clicks
    // Function to handle nav button clicks
const handleNavButtonClick = (button) => {
    const targetSection = button.getAttribute('data-section');
    
    deactivateNavButtons();
    hideAllSections();
    
    // Activate the clicked nav button
    button.classList.add('active');

    // Show the target section after fading out
    const activeSection = document.getElementById(targetSection);
    if (activeSection) {
        setTimeout(() => {
            activeSection.classList.add('active');
            activeSection.style.opacity = '1'; // Set opacity to 1 to fade in
        }, 500); // Match the timeout with your transition duration
    }

    // Close the nav menu on mobile after clicking
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    }

    // Show or hide bus buttons based on the active section
    if (targetSection === 'buses') {
        navBusButtonsContainer.classList.remove('hidden');
    } else {
        navBusButtonsContainer.classList.add('hidden');
    }

    // Optionally, update the URL hash without scrolling
    history.pushState(null, null, `#${targetSection}`);
};


    // Add click event listeners to nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleNavButtonClick(button);
        });
    });

    // Toggle Navigation Menu on Hamburger Click
    const toggleHamburger = () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
    };

    hamburger.addEventListener('click', toggleHamburger);
    hamburger.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleHamburger();
        }
    });


    // Initialize the default active section if not already active
    if (!document.querySelector('.section.active')) {
        const defaultButton = document.querySelector('.nav-button[data-section="home"]');
        if (defaultButton) {
            handleNavButtonClick(defaultButton);
        }
    }

    // Handle URL hash on page load
    const handleHashChange = () => {
        const hash = window.location.hash.substring(1); // Remove the '#' character
        const targetSection = document.getElementById(hash);
        const targetButton = document.querySelector(`.nav-button[data-section="${hash}"]`);

        if (targetSection && targetButton) {
            handleNavButtonClick(targetButton);
        }
    };

    // Listen for hash changes (e.g., back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);

    // On initial load, check if there's a hash in the URL
    handleHashChange();
});
