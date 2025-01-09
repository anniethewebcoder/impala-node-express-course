const EventEmitter = require("events");

const emitter = new EventEmitter();

const fish = [
  "Anchovy",
  "Smallmouth Bass",
  "Catfish",
  "Sunfish",
  "Herring",
  "Eel",
  "Sardine",
  "Shad",
  "Flounder",
  "Halibut",
];

setInterval(() => {
  emitter.emit("timer", fish[Math.round(Math.random() * 10)]);
}, 2000);

emitter.on("timer", (msg) => console.log(msg));

const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("happens", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("You caught a fish! The fish is: ", msg);
};

doWait();
emitter.emit("happens", fish[Math.round(Math.random() * 9)]);
