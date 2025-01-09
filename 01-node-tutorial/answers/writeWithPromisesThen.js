const { write } = require("fs");

const { writeFile, readFile } = require("fs").promises;

const line_one = "Harvey appreciates a cup of coffee.";
const line_two = "Harvey also loves a jar of home made pickles.";
const line_three = "He's a doctor so he know what's good for you.";

writeFile("temp.txt", line_one, { flag: "a" })
  .then((res) => {
    writeFile("temp.txt", line_two, { flag: "a" });
    console.log(res);
  })
  .then((res) => {
    writeFile("temp.txt", line_two, { flag: "a" });
    console.log(res);
  })
  .catch((err) => console.log(err));
