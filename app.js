const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from CI/CD Pipeline 🚀");
});

server.listen(7100, () => {
  console.log("Server running on port 7100");
});
