const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let arr = [];
let message = "";
let skill = 1;
let zone = 1;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8"></head>
  <body>
  <p>${message}</p>
  <p>Your current skill is at level ${skill}</p>
  <form method="POST">
    <label for="fish">Choose a zone to fish:</label>
      <select id="fish" name="fish">
        <option value="1">Zone 1</option>
        <option value="2">Zone 2</option>
        <option value="3">Zone 3</option>
        <option value="4">Zone 4</option>
        <option value="5">Zone 5</option>
      </select>
    <button type="submit">Go fish!</button>
  </form>
  <p>
    You got a fish of a size ${Math.round(
      (zone / 5) * ((skill + 2) / 10) * Math.floor(Math.random() * 100)
    )} inches!
  <p>
  </body>
  </html>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic

      if (body["fish"]) {
        zone = parseInt(body["fish"]);
        if (skill < 10) {
          skill += 1;
        } else if (skill == 10) {
          message =
            "You've reached maxium level of 10. You're a fishing expert!";
        }
      } else {
        message = "Please pick a zone.";
      }

      // Your code changes would end here

      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

server.listen(3000);
console.log("The server is listening on port 3000.");
