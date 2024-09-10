document.addEventListener("scroll", function() {
    const mainContent = document.getElementById('main-content');
    const header = document.getElementById('header');
    const scrollY = window.scrollY;

    const fadePoint = 300;  // Scroll point where the photo fades and the header changes

    // Calculate opacity for both the image and the header background based on scroll position
    const opacityValue = Math.max(1 - scrollY / fadePoint, 0); 

    // Apply fading to main content (photo and name) and synchronize with header color change
    mainContent.style.opacity = opacityValue;
    
    if (scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Apply opacity to the header background to synchronize with the fade
    header.style.backgroundColor = `rgba(51, 51, 51, ${1 - opacityValue})`;
});
