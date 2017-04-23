const DbHelper = require('../helpers/db');

/**
 * Task model.
 */
class Task {
  /**
   * Creates a new task instance.
   *
   * @param {Number} id The task id.
   * @param {String} title The task title.
   * @param {String} description The task description.
   * @param {String} icon The task icon.
   */
  constructor(id, title, description, icon) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.icon = icon;
  }

  /**
   * Gets all tasks from database.
   *
   * @return {Promise} A Promise that resolves with an array of tasks.
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      DbHelper.query('select * from tasks').then((rows) => {
        let tasks = new Array(rows.length);

        for (let row of rows) {
          tasks.push(new Task(row.id, row.title, row.description, row.icon));
        }

        resolve(tasks);
      });
    });
  }
}

module.exports = Task;
