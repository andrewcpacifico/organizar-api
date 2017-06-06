const express = require('express');
const TaskController = require('../controllers/task');

const TaskRouter = express.Router(); // eslint-disable-line new-cap

TaskRouter.route('/')
  /**
   * Gets all stored tasks.
   *
   * @api {get} /tasks Gets all tasks.
   * @apiName GetAllTasks
   * @apiGroup Task
   * @apiVersion  1.0.0
   */
  .get(TaskController.getAll);

module.exports = TaskRouter;
