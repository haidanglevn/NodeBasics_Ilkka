'use strict';

const express = require('express');
const app = express();

const port = 3000;
const host = "localhost";

// create first root 
app.get("/", (req,res)=> res.send('<h1>Hello work</h1>'));

// put app into listen mode
app.listen(port,host, ()=> console.log(`Server ${host}:${port} is running`));


