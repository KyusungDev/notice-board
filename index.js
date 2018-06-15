const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const redis = require('redis').createClient(process.env.REDIS_URL);

console.log(process.env.REDIS_URL);

redis.set('my string', 'this is a string', redis.print);
redis.get('my string', function(err, result) {
  console.log(result); // this is a string
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  res.json('Hello');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
