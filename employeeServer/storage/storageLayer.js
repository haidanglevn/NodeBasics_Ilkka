"use strict";

const path = require("path");

const { storageFile, adapterFile, key } = require("./storageConfig.json");

const { readStorage, writeStorage } = require("./readerWriter");

const storageFilePath = path.join(__dirname, storageFile);

// MODULE_NOT_FOUND from this line
// const { adapt } = require(path.join(__dirname, adapterFile));

// console.log(storageFilePath);

async function getAllFromStorage() {
  return readStorage(storageFilePath);
}

async function getFromStorage(id) {
  return (
    (await readStorage(storageFilePath)).find((item) => item[key] == id) || null
  );
}

async function addToStorage(newObject) {
  const storageData = await readStorage(storageFilePath);
  // adapt doesnt work so I deleted it
  storageData.push(newObject);
  return await writeStorage(storageFilePath, storageData);
}
async function updateStorage(modifiedObject) {
  const storageData = await readStorage(storageFilePath);
  const oldObject = storageData.find((item) => item[key] == modifiedObject[key]);
  if (oldObject) {
    Object.assign(oldObject, modifiedObject);
    return await writeStorage(storageFilePath, storageData);
  } else {
    return false;
  }
}

async function removeFromStorage(id) {
  const storageData = await readStorage(storageFilePath);
  const i = storageData.findIndex((item) => item[key] == id);
  if (i < 0) return false;
  storageData.splice(i, 1);
  return await writeStorage(storageFilePath, storageData);
}

module.exports = {
  getAllFromStorage,
  getFromStorage,
  addToStorage,
  updateStorage,
  removeFromStorage,
};

// tests
// getAllFromStorage().then(console.log).catch(console.log)
// getFromStorage(12).then(console.log)

/* addToStorage({
  id: "10",
  firstname: "Leilaih",
  lastname: "Hokkikka",
  department: "ict",
  salary: 6000,
}).then(console.log).catch(console.log); */

/* updateStorage({
  id: 10,
  firstname: "Leilaih",
  lastname: "Hokkikka",
  department: "ict",
  salary: 7500,
})
  .then(console.log)
  .catch(console.log); */

/* removeFromStorage(10)
  .then(console.log)
  .catch(console.log); */
