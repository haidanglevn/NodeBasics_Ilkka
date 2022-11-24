"use strict";

const fs = require("fs").promises;
const path = require("path");

const MIMETYPES = require("./mimetypes.json");

const read = (filePath) => {
    const extension = path.extname(filePath).toLocaleLowerCase();
    const mime = MIMETYPES[extension] || {type:'application/octet-stream', encoding: 'binary'};

    return fs.readFile(filePath, mime.encoding)
    .then(fileData => ({fileData, mime})).catch(err=>err);
}

const send = (res,resource) => {
    res.writeHead(200, {
        "Content-Type": resource.mime.type,
        "COntent-Length": Buffer.byteLength(resource.fileData, resource.mime.encoding)
    });
    res.end(resource.fileData, resource.mime.encoding);
}

const sendJson = (res, jsonResource) => { 
    const jsonData =JSON.parse(jsonResource);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(jsonData)
}

const sendError = (res, message, code =404) => {
    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(JSON.stringify({message}))
}

const isIn = (route, ...routes) => {
    for (const start of routes) {
        if(route.startWith(start)) return true;
    } return false;
}

module.exports={read, send, sendError, sendJson, isIn};