const fs = require('fs');


const requestHandler = (req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>FOrm page</title></head>');
    res.write('<body><form action="/submit" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/submit' && req.method == 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // fs.writeFileSync('message.txt', message);
        fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My Test page</title></head>');
  res.write('<body><h1>Hello!!!!!!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }
// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded test';
exports.handler = requestHandler;
exports.someText = 'some hard coded test';
