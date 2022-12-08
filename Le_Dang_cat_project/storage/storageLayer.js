"use strict";

const path = require("path");

const { storageFile, key } = require("./storageConfig.json");

const { readStorage, writeStorage } = require("./readWrite");

const storageFilePath = path.join(__dirname, storageFile);

const getAll = async () => {
  return readStorage(storageFilePath);
};

const getOne = async (id) => {
  return (
    (await readStorage(storageFilePath)).find((cat) => cat[key] == id) || null
  );
};

const addToStorage = async (newCat) => {
  const storage = await readStorage(storageFilePath);
  storage.push(newCat);
  return await writeStorage(storageFilePath, storage);
};

const updateStorage = async (modifiedCat) => {
  const storage = await readStorage(storageFilePath);
  const oldCat = storage.find((cat) => cat[key] == modifiedCat[key]);
  if (oldCat) {
    Object.assign(oldCat, modifiedCat);
    return await writeStorage(storageFilePath, storage);
  } else {
    return false;
  }
};

const deleteFromStorage = async (id) => {
  const storage = await readStorage(storageFilePath);
  const index = storage.findIndex((cat) => cat[key] == id);
  if (index < 0) return false;
  storage.splice(index, 1);
  return await writeStorage(storageFilePath, storage);
};

module.exports = {
  getAll,
  getOne,
  addToStorage,
  updateStorage,
  deleteFromStorage,
};

// test 

/* updateStorage({
  number: 100,
  name: "Lion III",
  yearOfBirth: 2007,
  breed: "dumbcat",
  length: 300,
}).then(console.log).catch(console.log); */

//deleteFromStorage(100).then(console.log)
// all tests done