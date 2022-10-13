"use strict";

const cars = require("./cars.json");

console.log(cars);
console.log(cars[0]);
console.log(cars[0].model);
console.log(cars[cars.length - 1].model);
console.log("######################");

for (const car of cars) {
  console.log(car.model);
}
console.log("######################");

// print licences of Fast-gt model only
for (const car of cars) {
  if (car.model.toLocaleLowerCase() === "fast gt") {
    console.log(car.licence);
  }
}
console.log("######################");

// print all available model, but each only one
let models = [];
for (const car of cars) {
  if (!models.includes(car.model)) {
    models.push(car.model);
  }
}
console.log(`Available models: ${models.join(", ")}`);

console.log(cars.filter((car) => car.model === "Fast GT"));
