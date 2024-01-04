---
layout: default
title: Image Page
permalink: /page2.md/
---

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
        text-align: center;
      }
      /* Additional styles for better formatting */
      #newText {
        max-width: 800px;
        margin: 0 auto;
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
          <br /><br /><br /><br /><br />
          <!-- Introductory Text Section -->
          <div class="intro-text center-text">
            <h1>Here Comes The Sun - Sounding That Fiery Spring Equinox (19.10.2020)</h1>
            <p>
              <!-- ... your content ... -->
            </p>
          </div>
          <!-- End Introductory Text Section -->
          <!-- New Text Section -->
          <div id="newText" style="display: none;">
          <img 
  src="{{ site.baseurl }}/assets/images/gallery/halo.jpeg" 
  alt="Description of Small Image" 
  class="small-image"
  style="width: 400px; height: auto;"
/>

            <p>Within the series: Sun & Spring Kaleidoscope

Radiant model in this work: Louïs Rault Watanabe Louïs Rault Watanabe @louisrault (IG)

Photography of background blossoms: Patty Den Boer

- This so called material and earthly life seems to bare with it an unquenchable thirst that only death could stop.

And until we come back to realizing to need no thing but love and all the beauty and joy that comes with it whilst it so abundantly flows from it, that, with its ethereal light, reaches far beyond that ephemeral dream time of men's existence, indeed beyond all imaginary and idol needs, for all eternity. -

Text by: The Eternal Fire Of The Gods - Miguel Angel Plukkel</p>
          </div>
          <!-- End New Text Section -->
          <!-- Request a Quote Section -->
          <div id="quoteSection" style="display: none;">
            {% include request_quote.md %}
          </div>
          <!-- End Request a Quote Section -->
          <script>
            document.addEventListener("DOMContentLoaded", function() {
              const fadeOutElement = document.querySelector(".fade-out-element img");
              const introText = document.querySelector(".intro-text");
              const quoteSection = document.getElementById("quoteSection");
              const newText = document.getElementById("newText");
              // Add an event listener for the animation end
              fadeOutElement.addEventListener("animationend", function() {
                // Remove the fade-out class after the animation ends
                fadeOutElement.classList.remove("fade-out");
                // Hide the intro text and image
                introText.style.display = "none";
                fadeOutElement.style.display = "none";
                // Display the new text and quote section
                newText.style.display = "block";
                quoteSection.style.display = "block";
              });
            });
          </script>
        </div>
      </div>
    </div>
  </body>
</html>
