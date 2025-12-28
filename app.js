const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from taj && kubernetes Node.js running on EC2 and jenkins with github 🚀');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Node js Server running on port 3000');
});

