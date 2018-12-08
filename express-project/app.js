//const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middle');
  next(); // allows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log('In another middle');
  res.send('<h1>Hello from express</h>');
});

// const server = http.createServer(app);
// server.listen(4000);
// or
app.listen(4000);
