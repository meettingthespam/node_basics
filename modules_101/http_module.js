const http = require("http");

// Create server object,
// takes a request and a response
http
  .createServer((req, res) => {
    // Write response (outputs to the browser)
    res.write("Hello World");
    res.end();
  }) // on port 5000
  .listen(5000, () => console.log("server running..."));
