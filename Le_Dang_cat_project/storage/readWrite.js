"use strict";

const fs = require("fs").promises;

const readStorage = async (storageFile) => {
  try {
    const data = await fs.readFile(storageFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

// readStorage("./Le_Dang_cats.json").then(console.log)

const writeStorage = async (storageFile, data) => {
  try {
    await fs.writeFile(storageFile, JSON.stringify(data, null, 4), {
      encoding: "utf-8",
      flag: "w",
    });
    return true;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

module.exports = { readStorage, writeStorage };
