function toggleEnlarged(image) {
  // Toggle the 'enlarged' class to adjust size and styling
  image.classList.toggle('enlarged');
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script executed'); // Add this line for debugging
  const fadeOutElement = document.querySelector('.fade-out-element img');
  const introText = document.querySelector('.intro-text');
  const newText = document.getElementById('newText');
  const fullscreenContainer = document.querySelector('.fullscreen-container');

  // Add an event listener for the animation end
  fadeOutElement.addEventListener('animationend', function () {
    // Remove the fade-out class after the animation ends
    fadeOutElement.classList.remove('fade-out');
    // Hide the intro text and image
    introText.style.display = 'none';
    fadeOutElement.style.display = 'none';
    // Display the new text
    newText.style.display = 'block';
    // Set fullscreen-container height to auto
    fullscreenContainer.style.height = 'auto';
  });
});
