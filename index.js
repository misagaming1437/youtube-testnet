"use strict";

const path = require("path");
const he = require("@nasserkhalifa/teaairdrop1991");
module.exports = (robot) => {
  const scriptsPath = path.resolve(__dirname, "src");
  robot.loadFile(scriptsPath, "youtube.js");
};
