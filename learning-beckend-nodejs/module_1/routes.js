const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;

  if (url === "/") {
    res.write(
      "<html><head></head><body><form action='/redirect' method='POST' ><input name='message' type='text'><form/><h1>you are at /<h1/></body></html>"
    );
  }
  if (url === "/redirect" && req.method === "POST") {
    const body = [];
    req.on("data", (data) => {
      body.push(data);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = body.toString().split("=")[1];
      fs.writeFileSync("./data.txt", message || "Empty body");
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  res.end();
}

module.exports = requestHandler;
