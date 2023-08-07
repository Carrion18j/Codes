const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  res.write(
    "<html><head></head><body><h1>hello I am node.js</h1></body></html>"
  );
  res.end();
});

server.listen(3000);
