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
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Your existing styles and head content -->

  <style>
    /* Additional styles for better formatting */
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
      background-color: #ffd700; /* Change color on hover */
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
      color: #daa520 !important; /* Set the text color to golden */
      text-decoration: none; /* Remove the default underline */
      font-weight: bold; /* Optionally set the font weight to bold */
    }

    .golden-link:hover {
      text-decoration: underline; /* Add underline on hover */
    }

    .golden-text {
      color: #daa520 !important; /* Set the text color to golden */
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
  </style>
</head>

<body>
  <!-- Rest of your HTML content -->
  <div class="image-gallery">
    <div class="image-item">
      <a href="/page1.md/" class="golden-link">
        <img src="/assets/images/gallery/jesus.jpg" alt="Image 1" />
        <div class="image-caption">
          <p class="golden-text">IESUS | The Sun God And The Flower Of Life (16.02.2018)</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/page2.md/" class="golden-link">
        <img src="/assets/images/gallery/halo.jpeg" alt="Image 2" />
        <div class="image-caption">
          <p class="golden-text">Here Comes The Sun - Sounding That Fiery Spring Equinox (19.10.2020)</p>
        </div>
      </a>
    </div>
  </div>

  <!-- Scroll-up button -->
  <button id="scrollUpBtn" onclick="scrollToTop()">Scroll Up</button>

  <!-- Your existing scripts and body content -->

  <script>
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
