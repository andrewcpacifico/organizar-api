const cwd = process.cwd();
const chai = require('chai');
const sinon = require('sinon');

const assert = chai.assert;
chai.should();

const DbHelper = require(cwd + '/src/helpers/db');
const Task = require(cwd + '/src/models/task');

describe('TaskModel', function() {
  describe('.getAll()', function() {
    const returnedTasks = [
      new Task(0, 'A task 0', 'A task desc', 'task-icon'),
      new Task(1, 'A task 1', 'A task desc', 'task-icon'),
      new Task(2, 'A task 2', 'A task desc', 'task-icon'),
    ];

    beforeEach(function() {
      sinon.stub(DbHelper, 'query').resolves(returnedTasks);
    });

    afterEach(function() {
      DbHelper.query.restore();
    });

    it('should return a promise', function() {
      Task.getAll().should.be.a('promise');
    });

    it('should call DbHelper.query once', function(done) {
      Task.getAll().then((tasks) => {
        sinon.assert.calledOnce(DbHelper.query);
        done();
      });
    });

    it('should resolve with returned tasks', function(done) {
      Task.getAll().then((tasks) => {
        tasks.should.deep.equal(returnedTasks);
        done();
      });
    });

    it('should throw an error if db query fails', function(done) {
      DbHelper.query.restore();
      sinon.stub(DbHelper, 'query').rejects();
      Task.getAll().then((tasks) => {
        assert.fail();
        done();
      }).catch((err) => {
        done();
      });
    });
  });
});
