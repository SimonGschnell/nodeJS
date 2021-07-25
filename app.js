const { defaultCipherList } = require("constants");
const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("you visited the home route");
      break;
    case "/about":
      res.end("you visited the about route");
      break;
    default:
      res.end("you visited neither the home or the about page");
  }
});
server.listen(2000);
