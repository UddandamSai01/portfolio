// Navigation toggle
const togglebar = document.getElementById('togglebar');
const navList = document.querySelector('.navbarListItems .listItems');

if (togglebar && navList) {
    togglebar.addEventListener('click', () => {
        togglebar.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close menu when a nav item is clicked (mobile)
    const navLinks = document.querySelectorAll('.listItem a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            togglebar.classList.remove('active');
            navList.classList.remove('active');
        });
    });
}

// Project hover: now handled via pure CSS (see style.css)

/**
 * Certificate hover – show overlay and dim image
 */
const certificateCards = document.querySelectorAll('.certificateCard');

certificateCards.forEach(card => {
    const content = card.querySelector('.certificateContent');
    const imageWrapper = card.querySelector('.certificateImg');

    if (!content || !imageWrapper) return;

    card.addEventListener('mouseenter', () => {
        content.style.display = 'block';
        imageWrapper.style.filter = 'brightness(40%)';
    });

    card.addEventListener('mouseleave', () => {
        content.style.display = 'none';
        imageWrapper.style.filter = 'brightness(100%)';
    });
});
