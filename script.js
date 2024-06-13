document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const overlay = document.getElementById('overlay');

    menuButton.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('open');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });

    overlay.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
        overlay.style.display = 'none';
    });

    let currentIndex = 0;
    const carousel = document.getElementById('carousel');
    const carouselImages = document.querySelectorAll('#carousel img');
    const totalImages = carouselImages.length;

    document.getElementById('next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000); // Change image every 5 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-btn');
    const fixedIcon = document.querySelector('.fixed-icon');

    const closeBtnLeft = document.querySelector('.close-btn-left');
    const fixedIconLeft = document.querySelector('.fixed-icon-left');
    const popupIcon = document.getElementById('popup-icon');
    const popup = document.getElementById('popup');
    const popupClose = document.querySelector('.popup-close');

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fixedIcon.style.display = 'none';
    });

    closeBtnLeft.addEventListener('click', (e) => {
        e.preventDefault();
        fixedIconLeft.style.display = 'none';
    });

    popupIcon.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Cerrar el popup al hacer clic fuera de su contenido
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
