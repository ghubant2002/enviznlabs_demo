// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const dotsContainer = document.querySelector('.dots-container');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const cardsPerView = 2;

    // Create 8 dots initially
    dotsContainer.innerHTML = ''; 
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        // Calculate the exact width of a single card including its margin
        const cardWidth = cards[0].offsetWidth;
        const margin = parseInt(window.getComputedStyle(cards[0]).marginRight);
        const totalCardWidth = cardWidth + margin;

        const offset = -currentIndex * totalCardWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
        
        updateNavButtons();
        updateDotActiveState();
    }
    
    function updateDotActiveState() {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }
    
    function updateNavButtons() {
        prevButton.style.opacity = currentIndex === 0 ? '0' : '1';
        prevButton.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';

        nextButton.style.opacity = currentIndex === totalCards - 1 ? '0' : '1';
        nextButton.style.pointerEvents = currentIndex === totalCards - 1 ? 'none' : 'auto';
    }
    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) { 
            currentIndex++;
            updateCarousel();
        }
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Initial setup
    updateCarousel();
    
    // Also update on window resize to handle responsiveness correctly
    window.addEventListener('resize', updateCarousel);
});