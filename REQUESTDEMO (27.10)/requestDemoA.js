"use strict";

const http = require("http");

const { port, host } = require("./config.json");

const server = http.createServer((req, res) => {
  /* console.log(req); */
  /*   console.log(req.headers) */
  const urlData = new URL(`http://${host}:${port}${req.url}`);
  /* console.log(urlData); */
  const { pathname } = urlData;
  console.log(pathname);
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(urlData.URL));
});

server.listen(port, host, () =>
  console.log(`Server ${host}: ${port} is running....`)
);
