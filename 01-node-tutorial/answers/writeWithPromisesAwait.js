const { read } = require("fs");

const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    const line_one = "Harvey appreciates a cup of coffee.";
    const line_two = "Harvey also loves a jar of home made pickles.";
    const line_three = "He's a doctor so he know what's good for you.";

    await writeFile("temp.txt", `${line_one}\n${line_two}\n${line_three}\n`, {
      flag: "a",
    });
  } catch (err) {
    console.log(err);
  }
};

writer();

const reader = async () => {
  try {
    const text = await readFile("temp.txt", "utf8");
    console.log(text);
  } catch (err) {}
};

reader();
