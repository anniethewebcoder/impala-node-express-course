const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
            <h1>Stardew Valley Home Page<h1>
            <h3>Welcome to Your New Home</h1>
            <p>You'll begin your new farm life with a spartan one-room cabin that you can choose to upgrade -- as Robin is so kind to point out -- to something much more spacious once you've got the money and resources.</p>
            <p><a href="/about">About Page</a></p>
        `);
  } else if (req.url === "/about") {
    res.end(`
            <h1>About Page</h1>
            <h3>Stardew Valley Guidebook</h3>
            <p>The handy farmer's almanac covers farming, crafting, foraging, combat, fishing and mining: it also include detailed information on the residents of Stardew Valley, so you can truly make the most of your wonderful new life on the farm.</p>
            <p>Updated to include the version 1.5 update, Spring 2021</p>
            <p>By Kari Fry & ConcernedApe</p>
            <p><a href="/">Back Home</a></p>

        `);
  } else {
    res.end(`
        <h1>?</h1>
        <p>Looks like you're lost...</p>
        <p><a href="/">Back Home</a></p>
    `);
  }
});

server.listen(3000);
console.log("Listening on port 3000...");
