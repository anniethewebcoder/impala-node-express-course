const random = Math.floor(Math.random() * 100);
const zone = 5;
const skill = 3;

function fishSize() {
  console.log(
    `You got a fish of a size ${
      (zone / 5) * ((skill + 2) / 10) * random
    } inches!`
  );
}

fishSize();
