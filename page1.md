---
layout: default
title: IESUS | The Sun God And The Flower Of Life
permalink: /page1.md/
---
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IESUS | The Sun God And The Flower Of Life</title>
  <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css" />
  <style>
    html {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .center-content {
      display: flex;
      flex-direction: column; /* Display children in a column */
      align-items: center;
      text-align: center;
      height: 100vh;
    }
    .fullscreen-container {
      position: relative;
    }
    .fullscreen-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 70vh; /* Set a maximum height for the image */
    }
    .center-text {
      font-size: 1.5vw; /* Further reduced font size for the title */
      color: #FFD700;
      max-width: 80%;
      margin: 15px auto; /* Adjusted margin for better spacing */
    }
    .small-image {
      cursor: pointer;
      max-width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out, opacity 1s ease-in-out, border 0.3s ease-in-out; /* Increased opacity duration */
      opacity: 0;
      margin-top: 15px; /* Adjusted margin for better spacing */
    }
    .small-image.show {
      opacity: 1;
      border: 3px solid #FFD700; /* Add a border to make it stand out */
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
    @media only screen and (max-width: 768px) {
      .center-text {
        font-size: 3vw; /* Adjusted font size for smaller screens */
      }
    }
  </style>
</head>

<body>

  <div class="center-content">
    <div id="newText" style="display: block;">
      <img src="{{ site.baseurl }}/assets/images/gallery/second_image.jpg" alt="Description of Small Image" class="small-image" />
    </div>
    <div class="fullscreen-container">
      <img src="{{ site.baseurl }}/assets/images/gallery/second_image.jpg" alt="Fullscreen Image" class="fullscreen-image fade-out" />
    </div>
    <div class="center-text">
      <h1>IESUS | The Sun God And The Flower Of Life</h1>
      <p>Within the series: IESUS & Sun Flower Kaleidoscope
        *Church of San Giovanni Battista (Saint John The Baptist) at Mogno, Ticino Canton, Lavizara, Switzerland (Land Of The Two Sisters)
        **Architect: Mario Botta @mariobottaarchitetti_official (IG)
        **IESUS: Ancient Greek Sun God
        ***Flower Of Life (Sacred Geometry).</p>
    </div>
  </div>

  <div id="myModal" class="modal" onclick="closeModal()">
    <div class="modal-content fullscreen-modal">
      <img src="{{ site.baseurl }}/assets/images/gallery/second_image.jpg" alt="Popup Image" class="modal-image fullscreen-image" />
    </div>
  </div>

  <script>
    function openModal() {
      document.getElementById('myModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('myModal').style.display = 'none';
    }

    document.addEventListener("DOMContentLoaded", function () {
      const secondImage = document.querySelector("#newText .small-image");
      secondImage.addEventListener("click", function () {
        openModal();
      });

      // Adding a small delay before adding the 'show' class to allow the fade-in effect
      setTimeout(function () {
        secondImage.classList.add('show');
      }, 100);
    });
  </script>
</body>

</html>
