const { createReadStream } = require("fs");

const stream = createReadStream("temp.txt", {
  highWaterMark: 200,
  encoding: "utf8",
});
let counter = 0;
stream.on("data", (chunk) => {
  console.log(counter++, chunk);
});
stream.on("error", (err) => console.log(err));
