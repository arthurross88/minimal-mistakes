---
layout: default
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
            src="{{ site.baseurl }}/assets/images/gallery/Flag_of_Zambia.png"
            alt="Fullscreen Image"
            class="fullscreen-image fade-out"
          />
          <br /><br /><br /><br /><br />
          <!-- Introductory Text Section -->
          <div class="intro-text center-text">
            <h1>Zambia sports community</h1>
            <p>
              <!-- ... your content ... -->
            </p>
          </div>
          <!-- End Introductory Text Section -->
          <!-- New Text Section -->
          <div id="newText" style="display: none;">
          <img
  src="{{ site.baseurl }}/assets/images/gallery/Flag_of_Zambia.png" 
  alt="Description of Small Image" 
  class="small-image"
  style="width: 400px; height: auto;"
/>
<br><br>
Invest in my Zambian sports community
Become an investor!

In Zambia we’re creating a sports community. Our goal is to first of all erupt rugby poles. We need libraries, hospitals, schools and more! Our intent is for Rosscoin to rapidly grow to 1600 euros, easily tradeable for Ethereum. It will also be possible to mine these coins, for limited time only. 200000 will be mineable, check out our <a href="https://arthur-ross.gitbook.io/rosscoin-1/">whitepaper</a>
          </div>
          <!-- End New Text Section -->
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
