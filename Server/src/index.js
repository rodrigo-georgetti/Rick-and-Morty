const http = require("http");
const PORT = 3001;
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").pop());
      const character = data.find((char) => {
        return char.id === id;
      });
      res.writeHead(200, {'Content-Type':'application/json' });
      res.end(JSON.stringify(character));
    }
  })
  .listen(PORT, "localhost");
