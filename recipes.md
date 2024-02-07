---
title: Gallery
layout: collection
permalink: /recipes/
collection: recipes
excerpt: "Baz Boom design system including logo mark, website design, and branding applications."
sidebar:
  - title: "Miguel Angel Plukkel"
    image: /assets/images/gallery/miguel.jpeg
    image_alt: "logo"
    text: "Artist"
---
<html lang="en">

<head>
  <!-- Your existing styles and head content -->

  <style>
    /* Additional styles for better formatting */
    body {
      color: #FFD700 !important; /* Set the text color to yellow for the entire page */
    }

    .image-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    #scrollUpBtn {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #daa520;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    #scrollUpBtn:hover {
      background-color: #FFD700; /* Change color on hover */
    }

    .image-item {
      margin-bottom: 20px;
      overflow: hidden; /* Hide overflow to prevent layout shifts on hover */
    }

    .image-item img {
      transition: transform 0.3s ease-in-out; /* Add transition effect */
    }

    .image-item:hover img {
      transform: scale(1.2); /* Increase the scale on hover (adjust the value as needed) */
    }

    .image-caption {
      text-align: center;
    }

    .golden-link {
      color: #FFD700 !important; /* Set the text color to yellow */
      text-decoration: none; /* Remove the default underline */
      font-weight: bold; /* Optionally set the font weight to bold */
    }

    .golden-link:hover {
      text-decoration: underline; /* Add underline on hover */
    }

    .golden-text {
      color: #FFD700 !important; /* Set the text color to yellow */
    }

    /* Styles for moving the request a quote to the side */
    .quote-container {
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 300px; /* Adjust the width as needed */
      background-color: #f8f8f8;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
      background-color: #f8f8f8; /* Adjust background color to match your website */
      color: #333; /* Adjust text color to match your website */
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Adjust the width as needed for responsiveness */
    }

    .modal-content textarea {
      background-color: #333; /* Darken the background color of the textarea */
      color: #fff; /* Adjust text color to match your website */
    }

    .feedback-text {
      color: #FFD700; /* Set the text color to yellow */
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

    /* Responsive styles */
    @media only screen and (max-width: 768px) {
      .image-gallery {
        justify-content: center;
      }

      .image-item {
        width: 100%;
      }

      .modal-content {
        width: 100%;
      }
    }

    /* Added style for selected feedback button */
    .selected-feedback {
      background-color: #FFD700 !important;
    }
  </style>
</head>

<body>
  <!-- Rest of your HTML content -->
  <div class="image-gallery">
    <div class="image-item">
      <a href="/page1.md/" class="golden-link">
        <img src="/assets/images/gallery/jesus.jpg" alt="Iesus" />
        <div class="image-caption">
          <p class="golden-text">IESUS | The Sun God And The Flower Of Life (16.02.2018)</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/page2.md/" class="golden-link">
        <img src="/assets/images/gallery/halo.jpeg" alt="Sun" />
        <div class="image-caption">
          <p class="golden-text">Here Comes The Sun - Sounding That Fiery Spring Equinox (19.10.2020)</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/page3.md/" class="golden-link">
        <img src="/assets/images/gallery/garden.jpeg" alt="Trees" />
        <div class="image-caption">
          <p class="golden-text">Them Trees And Waters Preparing Highest Frequencies For The Landing Of The Seraphim (Thé Déjà Vu Version, Pianíssimo Grandissimo Claro) (10.06.2021)</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/page4.md/" class="golden-link">
        <img src="/assets/images/gallery/guardian.jpeg" alt="Guardians" />
        <div class="image-caption">
          <p class="golden-text">The Enlightened Guardians Of The Emerald Tablet Holding The "Solve et Coagula" As Above So Below (18.03.2021)</p>
        </div>
      </a>
    </div>
  </div>

  <button onclick="openModal()">Give Feedback</button>

  <!-- Feedback Modal -->
  <div id="feedback-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>How happy are you with the website?</h2>
      <div id="feedback-buttons">
        <button onclick="selectFeedback(this, 'Very Happy', '😃')">Very Happy</button>
        <button onclick="selectFeedback(this, 'Happy', '😊')">Happy</button>
        <button onclick="selectFeedback(this, 'Neutral', '😐')">Neutral</button>
        <button onclick="selectFeedback(this, 'Unhappy', '😞')">Unhappy</button>
        <button onclick="selectFeedback(this, 'Very Unhappy', '😢')">Very Unhappy</button>
      </div>
      <div>
        <label for="additionalComments">Additional Comments:</label>
        <textarea id="additionalComments" rows="4" cols="50"></textarea>
      </div>
      <button onclick="submitFeedback()">Submit Feedback</button>
    </div>
  </div>

  <p>Please tell us what you think of the website. We appreciate your support!</p>

  <!-- Scroll-up button -->
  <button id="scrollUpBtn" onclick="scrollToTop()">Scroll to Top</button>
<script>
  function openModal() {
    var modal = document.getElementById("feedback-modal");
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("feedback-modal");
    modal.style.display = "none";
  }
  function sendFeedback(feedback, reaction, additionalComments) {
  // Perform an AJAX request to submit feedback to the server
  // Replace 'https://localhost:3000/submit-feedback' with the actual URL of your server-side route
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://localhost:3000/submit-feedback', true); // Use the correct URL
  xhr.setRequestHeader("Content-Type", "application/json");
  var data = {
    feedback: feedback,
    reaction: reaction,
    additionalComments: additionalComments
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Feedback submitted successfully');
      } else {
        console.error('Error submitting feedback:', xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}
  function selectFeedback(button, feedback, reaction) {
    // Remove the selected class from all buttons
    var feedbackButtons = document.querySelectorAll('#feedback-buttons button');
    feedbackButtons.forEach(function (btn) {
      btn.classList.remove('selected-feedback');
    });
    // Add the selected class to the clicked button
    button.classList.add('selected-feedback');
    // Log the selected feedback
    console.log('Selected Feedback:', feedback, 'Reaction:', reaction);
  }
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("feedback-modal");
    modal.style.display = "none";
  }
  // Function to submit feedback
  // Function to submit feedback
function submitFeedback() {
  var selectedButton = document.querySelector('#feedback-buttons button.selected-feedback');
  var feedback = selectedButton ? selectedButton.textContent : '';
  var reaction = selectedButton ? selectedButton.getAttribute('data-reaction') : '';
  var additionalComments = document.getElementById("additionalComments").value;
  console.log('Feedback:', feedback, 'Reaction:', reaction, 'Additional Comments:', additionalComments);
  // Implement your actual feedback submission logic here
  sendFeedback(feedback, reaction, additionalComments);
  // Display a confirmation message
  var confirmationMessage = document.createElement('p');
  confirmationMessage.innerText = 'Thank you for your feedback!';
  // Append the message to the modal content
  var modalContent = document.querySelector('.modal-content');
  modalContent.appendChild(confirmationMessage);
  // Close the modal after submission (optional)
  setTimeout(function () {
    closeModal();
  }, 2000); // Close the modal after 2 seconds (adjust the delay as needed)
}
  // Show/hide the scroll-up button based on scroll position
  window.onscroll = function () {
    showScrollUpButton();
  };
  function showScrollUpButton() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  }
  // Scroll to the top function
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
</script>
</body>

</html>
