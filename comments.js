// Create web server
// Create a web server that listens to incoming requests and sends back a response. 
// The server should respond with the content of the file comments.json when a GET request is made to the /comments URL. 
// Use the readFile function from the fs module to read the contents of the file. 
// The comments.json file contains an array of objects, each with a name and message property.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile('comments.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
        return;
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});