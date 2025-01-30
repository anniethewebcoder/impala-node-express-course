const getAllTasks = (req, res) => {
  res.send("All Items");
};

const createTask = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
  res.send("get a task");
};

const updateTask = (req, res) => {
  res.send("update a task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
