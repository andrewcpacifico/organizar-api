const Task = require('../models/task');

const TaskController = {};

TaskController.getAll = function(req, res) {
  Task.getAll().then((tasks) => {
    res.json(tasks);
  });
};

module.exports = TaskController;
