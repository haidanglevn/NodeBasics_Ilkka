"use strict";

const http = require("http");
const path = require("path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const { read, send, sendError, sendJson, isIn } = require(path.join(
  __dirname,
  "library",
  "utilities.js"
));

const { getAllFlavors, hasFlavor, getIceCream } = require(path.join(
  __dirname,
  "iceCreamStorage",
  "iceCreamFreezer.js"
));

const resourceRoutes = ["/favicon", "/styles/", "/js/", "/images/"];

const homePath = path.join(__dirname, "home.html");

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(`http://${req.headers.host}${req.url}`);
  const route = decodeURIComponent(pathname);

  try {
    if (route === "/") {
      const result = await read(homePath);
      send(res, result);
    } else if (isIn(route, ...resourceRoutes)) {
      const result = await read(path.join(__dirname, route));
      send(res, result);
    } else if (route === "/all") {
      const flavors = await getAllFlavors();
      sendJson(res, flavors);
    } else if (isIn(route, '/icecreams/')) {
        // route is '/icecream/vanilla' etc
      const pathParts = route.split('/');
      if (pathParts.length > 2) {
        const iceCreamFlavor = pathParts[2];
        if (await hasFlavor(iceCreamFlavor)) {
            const icecream = await getIceCream(iceCreamFlavor);
            sendJson(res, icecream);
        }
        else {
            sendError(res, "icecream not found")
        }
      }
    } else {
      sendError(res, "Not Found");
    }
  } catch (err) {
    sendError(res, err.message, 400);
  }
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running....`)
);
