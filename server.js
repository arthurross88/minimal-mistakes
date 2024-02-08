const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync('/Users/mac/Desktop/www.theeternalfireofthegods.com_key.txt'),
  cert: fs.readFileSync('certificate/www.theeternalfireofthegods.com.crt'),
};

// Create a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/feedbackdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verify the MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Enable CORS
app.use(cors({
  origin: 'https://your-frontend-domain.com',
  optionsSuccessStatus: 200,
}));


// Parse incoming JSON requests
app.use(bodyParser.json());

// Create a feedback schema
const feedbackSchema = new mongoose.Schema({
  feedback: String,
  reaction: String,
  additionalComments: String,
});

// Create a Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Redirect HTTP to HTTPS middleware
app.use((req, res, next) => {
  const forwardedProto = req.get('X-Forwarded-Proto');
  if (forwardedProto !== 'https' && !req.secure) {
    return res.redirect(`https://${req.get('host')}${req.url}`);
  }
  next();
});

// Handle POST requests to /submit-feedback
app.post('/submit-feedback', async (req, res) => {
  const { feedback, reaction, additionalComments } = req.body;

  // Log the received data (you can replace this with your desired processing logic)
  console.log('Received feedback:', feedback);
  console.log('Reaction:', reaction);
  console.log('Additional Comments:', additionalComments);

  // Create a new Feedback instance
  const newFeedback = new Feedback({
    feedback,
    reaction,
    additionalComments,
  });

  try {
    // Save the feedback to the database
    await newFeedback.save();
    console.log('Feedback saved to MongoDB');

    // Assuming you want to send a response back to the client
    res.status(200).json({ message: 'Feedback received successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle GET requests to the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Feedback Server. Use POST requests to submit feedback.');
});

// Handle GET requests to /submit-feedback
app.get('/submit-feedback', (req, res) => {
  res.send('This endpoint is for handling POST requests. Use POST to submit feedback.');
});

// Start the server
const server = https.createServer(options, app);
server.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
