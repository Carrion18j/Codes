const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<h1>Hello Welcome to my page</h1>");
    res.write(
      "<form method='POST action='/create-user'><input/><button>Submit</button></form>"
    );
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (data) => {
      body.push(data);
    });
    req.on("end", () => {
      fs.writeFileSync("./data.txt", body.toString());
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  if (url === "/users") {
    const users = fs.readFileSync("./data.txt");
    res.write(`${users}`);
  }

  res.end();
}

module.exports = requestHandler;
