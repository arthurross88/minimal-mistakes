document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    let currentImageIndex = 0;
  
    function toggleImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }
  
    // Toggle images every 3 seconds (3000 milliseconds)
    setInterval(toggleImage, 3000);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');
    content.style.opacity = '1';
  
    // Fade out content over 2 seconds (2000 milliseconds)
    setTimeout(() => {
      content.style.opacity = '0';
    }, 2000);
  });  
  