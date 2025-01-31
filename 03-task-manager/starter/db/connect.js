const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://annie:rT1uMq7Byg1t3fGY@nodeexpressprojects.bv3xntw.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
