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
<head>
  <style>
    /* Additional styles for better formatting */
    .image-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .image-item {
      margin-bottom: 20px;
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
  </style>
</head>

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
  {% include request_quote.md %}
</div>