"use strict";

const {
  getAllFromStorage,
  getFromStorage,
  addToStorage,
  updateStorage,
  removeFromStorage,
} = require("./storageLayer");

// getAllFromStorage().then(console.log).catch(console.log);
// getFromStorage(2).then(console.log).catch(console.log);

/* addToStorage({
  number: 3,
  title: "a and b",
})
  .then(console.log)
  .catch(console.log); */

updateStorage({
  number: 3,
  title: "a and b in javascript",
})
  .then(console.log)
  .catch(console.log);
