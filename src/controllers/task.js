const Task = require('../models/task');

const TaskController = {};

TaskController.getAll = function getAll(req, res) {
  Task.getAll().then((tasks) => {
    res.json(tasks);
  });
};

module.exports = TaskController;
