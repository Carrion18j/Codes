const http = require("http");
const routes = require("./assingment");

const server = http.createServer(routes);

server.listen(3000);
