---
layout: default
title: IESUS | The Sun God And The Flower Of Life
permalink: /page1.md/
---
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IESUS | The Sun God And The Flower Of Life</title>
  <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css" />
  <style>
    body, html {
      height: 100%;
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .center-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      overflow: hidden;
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
      top: 30%; /* Adjust the top position as needed */
      left: 25%; /* Adjust the left position as needed */
      width: 70%; /* Adjust the width as needed */
      height: 70vh; /* Adjust the height as needed */
      background: rgba(0, 0, 0, 0);
    }
    .modal-content {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
      transition: box-shadow 0.3s ease-in-out, opacity 5s ease-in-out;
    }
    .modal-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .modal:hover .modal-content {
      box-shadow: 0 0 30px rgba(255, 215, 0, 1);
    }
    @media only screen and (max-width: 1200px) {
      .center-text {
        font-size: 2vw;
      }
      .modal {
        top: 35%;
        left: 20%;
        width: 60%;
      }
    }
    @media only screen and (max-width: 768px) {
      .center-text {
        font-size: 3vw;
      }
      .modal {
        top: 40%;
        left: 10%;
        width: 80%;
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
      <img src="{{ site.baseurl }}/assets/images/gallery/second_image.jpg" alt="Fullscreen Image" class="fullscreen-image fade-out show" />
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

  <div id="myModal" class="modal" onclick="toggleModal()">
    <div class="modal-content fullscreen-modal">
      <img src="{{ site.baseurl }}/assets/images/gallery/jesus.jpg" alt="Popup Image" class="modal-image" />
    </div>
  </div>

  <script>
    let modalOpen = false;

    function toggleModal() {
      const modal = document.getElementById('myModal');
      const modalContent = document.querySelector('.modal-content');

      if (!modalOpen) {
        modal.style.display = 'flex';
        modalContent.classList.remove('fade-out');
      } else {
        modalContent.classList.add('fade-out');
        setTimeout(() => {
          modal.style.display = 'none';
          modalContent.classList.remove('fade-out');
        }, 5000);
      }

      modalOpen = !modalOpen;
    }

    document.addEventListener("DOMContentLoaded", function () {
      const secondImage = document.querySelector("#newText .small-image");
      const modalImage = document.querySelector(".modal-image");

      secondImage.addEventListener("click", function () {
        toggleModal();
        modalImage.src = this.src;
      });

      setTimeout(function () {
        secondImage.classList.add('show');
        const fullscreenImage = document.querySelector(".fullscreen-image");
        fullscreenImage.classList.add('show');
      }, 500);
    });
  </script>

</body>

</html>
