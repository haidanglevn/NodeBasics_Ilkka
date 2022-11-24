"use strict";

const { getAllFlavors, hasFlavor, getIceCream} = require("./iceCreamStorage/iceCreamFreezer")

getAllFlavors().then(console.log).catch(console.log);
hasFlavor('vanilla').then(console.log).catch(console.log);
getIceCream('strawberry').then(console.log).catch(console.log);


