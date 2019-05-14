const http = require("http");
const path = require("path");
const fs = require("fs");

// dev dependency for having the server hot loaded
const nodemon = require("nodemon");
/*
in package.json we added a script for nodemon to run
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
},
*/

const superSimpleServer = http.createServer((req, res) => {
  console.log(req.url);
  // meaing this is watching the navigation you do on the site

  if (req.url === "/") {
    // specifying the content type of html
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Hello port 5050!</h1>"); // skip the .write() step
  }
  if (req.url === "/cooking") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
      }
    );
  }
});

// port will most likely be in an evironmental variable
// so we'll have an or with port 5000
const PORT = process.env.PORT || 5050;

superSimpleServer.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
