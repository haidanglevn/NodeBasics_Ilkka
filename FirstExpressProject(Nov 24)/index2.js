"use strict";
// another way to do the server, like the vanila version
const http= require('http');

const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

const server = http.createServer(app);

// create first root
app.get("/", (req, res) => res.send("<h1>Hello work from index2</h1>"));

// put app into listen mode
server.listen(port, host, () => console.log(`Server ${host}:${port} is running`));


