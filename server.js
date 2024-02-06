const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port for your server

app.use(bodyParser.json());

// Handle POST requests to /submit-feedback
app.post('/submit-feedback', (req, res) => {
  const feedback = req.body.feedback;

  // Process the feedback (you can store it in a database, log it, etc.)
  console.log('Received feedback:', feedback);

  res.status(200).json({ message: 'Feedback received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
