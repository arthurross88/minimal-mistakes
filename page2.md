---
layout: default
title: Here Comes The Sun - Sounding That Fiery Spring Equinox (19.10.2020)
permalink: /page2.md/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... same as before ... -->
  <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css" />
  <style>
    /* Center the text */
    .center-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* 100% of the viewport height */
    }
    .center-text {
        font-size: 24px; /* Adjust the font size as needed */
      text-align: center;
      color: goldenrod; /* Set the text color to goldenrod */
    }
    /* Additional styles for better formatting */
    #newText {
        font-size: 14px; /* Adjust the font size as needed */
      max-width: 800px;
      margin: 0 auto;
      color: goldenrod; /* Set the text color to goldenrod */
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    /* Enlarge image on hover */
    .small-image {
      transition: transform 0.3s ease-in-out; /* Add transition effect */
      cursor: pointer;
    }
    .small-image:hover {
      transform: scale(1.2); /* Increase the scale on hover (you can adjust the value) */
    }
    .enlarged {
      width: 80vw; /* Adjust the width to make it 80% of the viewport */
      height: auto; /* Auto-adjust height to maintain aspect ratio */
      object-fit: contain; /* Maintain aspect ratio and fit inside the container */
    }
    /* Style for the back button */
    .back-button {
      background-color: goldenrod;
      color: black;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    }
    /* Style for the modal */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      justify-content: center;
      align-items: center;
    }
    /* Style for the modal content */
    /* Style for the modal content */
/* Style for the modal content */
.modal-content {
  width: auto; /* Allow the width to adjust based on the image */
  height: auto; /* Allow the height to adjust based on the image */
  max-width: 80%; /* Set a maximum width if needed */
  max-height: 80vh; /* Set a maximum height if needed */
  object-fit: contain; /* Maintain aspect ratio and fit inside the container */
}
  </style>
</head>
<body>
  <div class="fade-in-out">
    <div class="fullscreen-container">
      <div class="fade-out-element center-content">
        <img
          src="{{ site.baseurl }}/assets/images/gallery/halo.jpeg"
          alt="Fullscreen Image"
          class="fullscreen-image fade-out"
        />
        <!-- Introductory Text Section -->
        <div class="intro-text center-text">
          <h1>Here Comes The Sun - Sounding That Fiery Spring Equinox (19.10.2020)</h1>
          <p>
            <!-- ... your content ... -->
          </p>
        </div>
        <!-- End Introductory Text Section -->
        <!-- New Text Section -->
        <div id="newText" style="display: block;">
          <img
            src="{{ site.baseurl }}/assets/images/gallery/halo.jpeg"
            alt="Description of Small Image"
            class="small-image"
            style="width: 500px; height: auto;"
            onclick="openModal()"
          />
          <p>Within the series: Sun & Spring Kaleidoscope

Radiant model in this work: Louïs Rault Watanabe Louïs Rault Watanabe @louisrault (IG)

Photography of background blossoms: Patty Den Boer

- This so called material and earthly life seems to bare with it an unquenchable thirst that only death could stop.

And until we come back to realizing to need no thing but love and all the beauty and joy that comes with it whilst it so abundantly flows from it, that, with its ethereal light, reaches far beyond that ephemeral dream time of men's existence, indeed beyond all imaginary and idol needs, for all eternity. -

Text by: The Eternal Fire Of The Gods - Miguel Angel Plukkel<</p>
          <!-- Back to Collection Button -->
          <button class="back-button" onclick="backToCollection()">Back to Gallery</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
<div id="myModal" class="modal" onclick="closeModal()">
  <div class="modal-content">
    <img
      src="{{ site.baseurl }}/assets/images/gallery/halo.jpeg"
      alt="Description of Small Image"
      class="enlarged"
      style="width: auto; height: auto; max-width: 80%; max-height: 80vh; object-fit: contain;"
    />
  </div>
</div>


  <script>
    function openModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'flex';
    }

    function closeModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
    }

    function backToCollection() {
      // Redirect or navigate back to the collection page
      window.location.href = "{{ site.baseurl }}/recipes"; // Update the URL to your collection page
    }

    document.addEventListener("DOMContentLoaded", function() {
      console.log("DOMContentLoaded Event Fired");
      const fadeOutElement = document.querySelector(".fade-out-element img");
      const introText = document.querySelector(".intro-text");
      const newText = document.getElementById("newText");
      // Add an event listener for the animation end
      fadeOutElement.addEventListener("animationend", function() {
        // Remove the fade-out class after the animation ends
        fadeOutElement.classList.remove("fade-out");
        // Hide the intro text and image
        introText.style.display = "none";
        fadeOutElement.style.display = "none";
        // Display the new text
        newText.style.display = "block";
      });
      // Add a click event listener to the second image
      const secondImage = document.querySelector("#newText .small-image");
      secondImage.addEventListener("click", function() {
        console.log("Second Image Clicked");
        openModal();
      });
    });
  </script>
</body>
</html>
