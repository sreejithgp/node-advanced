const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
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
});

server.listen(4000);
