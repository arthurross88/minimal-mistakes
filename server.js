const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('keys/www.theeternalfireofthegods.com_key.txt'),
  cert: fs.readFileSync('keys/www.theeternalfireofthegods.com.crt'),
};

const server = https.createServer(options, app);
server.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});


// Enable CORS
app.use(cors());

app.use(bodyParser.json());

// Handle GET requests to the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Feedback Server. Use POST requests to submit feedback.');
});

// Handle GET requests to /submit-feedback
app.get('/submit-feedback', (req, res) => {
  res.send('This endpoint is for handling POST requests. Use POST to submit feedback.');
});

// Handle POST requests to /submit-feedback
app.post('/submit-feedback', (req, res) => {
  const feedback = req.body.feedback;

  // Log the feedback to the console
  console.log('Received feedback:', feedback);

  // Store the feedback in a file-based database (e.g., feedback.json)
  const feedbackData = loadFeedbackData();
  feedbackData.push({ feedback, timestamp: new Date() });
  saveFeedbackData(feedbackData);

  res.status(200).json({ message: 'Feedback received successfully' });
});

// Load feedback data from the file
function loadFeedbackData() {
  try {
    const data = fs.readFileSync('feedback.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Save feedback data to the file
function saveFeedbackData(data) {
  fs.writeFileSync('feedback.json', JSON.stringify(data, null, 2), 'utf-8');
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
