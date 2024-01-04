---
layout: default
title: Submit Quote
permalink: /submit_quote/
published: false
---
<div class="submit-quote-form">
    <h2>Submit a Quote</h2>
    <form action="/submit_quote" method="post" id="submitQuoteForm">
        <label for="quote">Quote:</label>
        <textarea id="quote" name="quote" rows="4" required></textarea>
        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required>
        <input type="submit" value="Submit Quote">
    </form>
</div>
