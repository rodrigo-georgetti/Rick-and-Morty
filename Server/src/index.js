const http = require("http");
const PORT = 3001;
const getCharById = require('./controllers/getCharById')


http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
     if (url.includes("/rickandmorty/character")) {
        
      const id = url.split("/").pop();
    //   const character = data.find((char) => {
    //     return char.id === id;
    //   });
    getCharById(res, id)
    //   res.writeHead(200, {'Content-Type':'application/json' });
    //   res.end(JSON.stringify(character));
    }
  })
  .listen(PORT, "localhost");
