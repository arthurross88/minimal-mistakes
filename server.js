const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync('keys/www.theeternalfireofthegods.com_key.txt'),
  cert: fs.readFileSync('keys/www.theeternalfireofthegods.com.crt'),
};

const server = https.createServer(options, app);

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect(`https://${req.get('host')}${req.url}`);
  }
  next();
});

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
  const { feedback, reaction, additionalComments } = req.body;

  // Log the received data (you can replace this with your desired processing logic)
  console.log('Received feedback:', feedback);
  console.log('Reaction:', reaction);
  console.log('Additional Comments:', additionalComments);

  // Assuming you want to send a response back to the client
  res.status(200).json({ message: 'Feedback received successfully!' });
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
server.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
