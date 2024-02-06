function openModal() {
    var modal = document.getElementById("feedback-modal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("feedback-modal");
    modal.style.display = "none";
  }
  
  function sendFeedback(feedback) {
    // You can send the feedback data to your server or perform other actions here
    alert("Feedback submitted: " + feedback);
    closeModal();
  }
  