const { readFile, writeFile } = require("fs");

readFile("./temporary/fileA.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const fileA = result;

  writeFile(
    "./temporary/result-async.txt",
    `Farming: ${fileA}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    }
  );
});
