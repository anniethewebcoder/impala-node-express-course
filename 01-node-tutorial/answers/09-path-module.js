const path = require("path");

console.log(path.sep);

const filePath = path.join("/temporary/", "farm", "letter.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "temporary", "farm", "letter.txt");
console.log(absolute);
