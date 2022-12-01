"use strict";

const Datastorage = require("./storage/dataStorageLayer");
const storage = new Datastorage();

// storage.getAll().then(console.log).catch(console.log)
// storage.getOne(2).then(console.log).catch(console.log)




storage.remove(10).then(console.log).catch(console.log)