---
layout: default
title: Here Comes The Sun - Sounding That Fiery Spring Equinox
permalink: /page2.md/
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Here Comes The Sun - Sounding That Fiery Spring Equinox </title>
  <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css" />
  <style>
    body, html {
    height: 100%;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #000; /* Set the background color to black */
  }
  .back-to-gallery {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #FFD700;
    color: black; /* Set the font color to black */
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  .back-to-gallery:hover {
    background-color: silver;
    color: #8B0000;
  }
    .center-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      overflow: hidden;
      max-width: 100%; /* Added max-width for better responsiveness */
      margin: 0 auto; /* Center the content horizontally */
    }
    .fullscreen-container {
      position: relative;
      width: 100%;
      max-height: 70vh;
      overflow: hidden;
    }
    .fullscreen-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
    .fullscreen-image.show {
      opacity: 1;
    }
    .center-text {
      font-size: 1.5vw;
      color: #FFD700;
      max-width: 80%;
      margin: 15px auto;
    }
    .small-image {
      cursor: pointer;
      max-width: 100%;
      height: auto;
      transition: transform 0.5s ease-in-out, opacity 1s ease-in-out, border 0.3s ease-in-out;
      opacity: 0;
      margin-top: 15px;
    }
    .small-image.show {
      opacity: 1;
      border: 3px solid #FFD700;
    }
    .modal {
      display: none;
      position: fixed;
      top: auto;
      right: 0; /* Stick to the right */
      bottom: 0;
      left: auto; /* Unset left */
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      pointer-events: none; /* Clicks on the modal won't trigger events */
}
    .modal-content {
      width: 100%;
      height: auto;
      max-width: 100%; /* Adjusted max-width */
      max-height: 100%; /* Adjusted max-height */
      object-fit: contain;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
    }
    .modal-image {
      width: 100%;
      height: auto;
      max-width: 100vw; /* Adjusted max-width to fit the viewport width */
      max-height: 100vh; /* Adjusted max-height to fit the viewport height */
      object-fit: contain;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .modal.fade-in {
      animation: fadeIn 2s ease-in-out; /* Increased duration to 2 seconds */
      opacity: 1;
    }
    .modal.fade-out {
      opacity: 0;
    }
    /* Add a transition for the fade-out effect */
    .modal.fade-out .modal-content {
      transition: opacity 1s ease-in-out;
    }
    .modal:hover .modal-content {
      box-shadow: 0 0 30px rgba(255, 215, 0, 1);
    }
    @media only screen and (max-width: 1200px) {
      .center-text {
        font-size: 2vw;
      }
    }
    @media only screen and (max-width: 768px) {
      .center-text {
        font-size: 3vw;
      }
    }
  </style>
</head>
<body>
  <div class="center-content">
    <div id="newText" style="display: block;">
      <img src="{{ site.baseurl }}/assets/images/gallery/halo.jpeg" alt="Description of Small Image" class="small-image" />
    </div>
    <div class="fullscreen-container">
      <img src="{{ site.baseurl }}/assets/images/gallery/halo.jpeg" alt="Fullscreen Image" class="fullscreen-image fade-out show" />
    </div>
    <div class="center-text">
      <p>Within the series: Sun & Spring Kaleidoscope

Radiant model in this work: Louïs Rault Watanabe Louïs Rault Watanabe @louisrault (IG)

Photography of background blossoms: Patty Den Boer

- This so called material and earthly life seems to bare with it an unquenchable thirst that only death could stop.

And until we come back to realizing to need no thing but love and all the beauty and joy that comes with it whilst it so abundantly flows from it, that, with its ethereal light, reaches far beyond that ephemeral dream time of men's existence, indeed beyond all imaginary and idol needs, for all eternity. -

Text by: The Eternal Fire Of The Gods - Miguel Angel Plukkel</p>
    </div>
    <!-- Back to Gallery button -->
    <a href="{{ site.baseurl }}/recipes/" class="back-to-gallery">Back to Gallery</a>
  </div>

  <div id="myModal" class="modal" onclick="toggleModal()">
    <div class="modal-content fullscreen-modal">
      <img src="{{ site.baseurl }}/assets/images/gallery/second_image2.jpeg" alt="Popup Image" class="modal-image" />
    </div>
  </div>

  <!-- ... Your existing HTML code ... -->

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const firstImage = document.querySelector("#newText .small-image");
    const modal = document.getElementById('myModal');
    const modalImage = document.querySelector(".modal-image");

    firstImage.addEventListener("click", function (event) {
      if (event.target.classList.contains('small-image') && event.target.src.includes('halo.jpeg')) {
        if (modal.style.display === 'flex') {
          modal.classList.add('fade-out');
          setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fade-out', 'fade-in');
          }, 1000);
        } else {
          modalImage.src = event.target.src;
          modal.style.display = 'flex';
          modal.classList.add('fade-in');
        }
      }
    });

    modal.addEventListener("click", function () {
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out', 'fade-in');
      }, 1000);
    });

    setTimeout(function () {
      firstImage.classList.add('show');
      const fullscreenImage = document.querySelector(".fullscreen-image");
      fullscreenImage.classList.add('show');
    }, 500);

    const backButton = document.querySelector(".back-to-gallery");
    backButton.addEventListener("click", function () {
      window.location.href = "{{ site.baseurl }}/recipes/";
    });
  });
</script>
</body>
</html>