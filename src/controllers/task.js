const Task = require('../models/task');

const TaskController = {
  getAll(req, res) {
    Task.getAll().then((tasks) => {
      res.json(tasks);
    });
  },
};

module.exports = TaskController;
