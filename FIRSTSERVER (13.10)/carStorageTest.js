"use strict";
const { getAllCars, getAllModels, getCar } = require("./carStorage");

console.log(getAllCars());
console.log(getAllModels());
console.log(`\nAll available models: \n\t${getAllModels().join("\n\t")}`);

console.log(getCar("model", "Fast GT"));
