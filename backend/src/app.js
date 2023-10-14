const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of Express app
const app = express();

// Middleware for parsing incoming request bodies in JSON format
app.use(bodyParser.json());

// Serve the static files from the frontend folder
app.use(express.static(path.join(__dirname, '../../frontend/src')));

// Redirect all routes to the frontend's index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/src/index.html'));
});


// ***** Connect to Mongodb *****
mongoose.connect('mongodb://localhost:2010/eaglewatchdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB database');
});
// ***** Connect to Mongodb *****


// ... other API routes and configurations ...

const stockapiRoute = require('./routes/stockapiRoute');
app.use('/api', stockapiRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
