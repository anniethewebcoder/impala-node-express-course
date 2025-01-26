const { readFileSync, writeFileSync } = require("fs");

const fileA = readFileSync("./temporary/fileA.txt", "utf8");

console.log(fileA);

const farming = writeFileSync(
  "./temporary/farming-sync.txt",
  `Farming: ${fileA}`,
  { flag: "a" }
);
