document.addEventListener('DOMContentLoaded', function() {
    const animationBackground = document.getElementById('animation-background');
    const bannerImages = [
        'Banner1.jpg',
        'Banner2.jpg',
        'Banner3.jpg',
        'Banner4.jpg',
        'Banner5.jpg'
    ];
    
    let currentImageIndex = 0;

    function changeBanner() {
        const currentImage = bannerImages[currentImageIndex];
        animationBackground.style.backgroundImage = `url('assets/${currentImage}')`;
        animationBackground.style.backgroundSize = 'cover';
        animationBackground.style.backgroundPosition = 'center';
        animationBackground.style.backgroundRepeat = 'no-repeat';
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    }

    changeBanner();
    animationBackground.style.transition = 'background-image 0.5s ease-in-out';

    const animationSection = document.getElementById('animation-section');
    let intervalId = setInterval(changeBanner, 4000);

    animationSection.addEventListener('mouseenter', function() {
        clearInterval(intervalId);
    });

    animationSection.addEventListener('mouseleave', function() {
        intervalId = setInterval(changeBanner, 4000);
    });
});
