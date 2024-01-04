<h2>Request a Quote</h2><form
  action="https://formspree.io/f/mvoeoqrz"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('requestQuoteForm');
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            // Perform form validation and submission logic here
            // Redirect to the Thank You page
            window.location.href = '/thank-you/';
        });
    });
</script>
