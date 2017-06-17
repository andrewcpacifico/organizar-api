const chai = require('chai');
const sinon = require('sinon');

const assert = chai.assert;
chai.should();

const DbHelper = require('../../src/helpers/db');
const Task = require('../../src/models/task');

describe('TaskModel', () => {
  describe('.getAll()', () => {
    const returnedTasks = [
      new Task(0, 'A task 0', 'A task desc', 'task-icon'),
      new Task(1, 'A task 1', 'A task desc', 'task-icon'),
      new Task(2, 'A task 2', 'A task desc', 'task-icon'),
    ];

    beforeEach(() => {
      sinon.stub(DbHelper, 'query').resolves(returnedTasks);
    });

    afterEach(() => {
      DbHelper.query.restore();
    });

    it('should return a promise', () => {
      Task.getAll().should.be.a('promise');
    });

    it('should call DbHelper.query once', (done) => {
      Task.getAll().then(() => {
        sinon.assert.calledOnce(DbHelper.query);
        done();
      });
    });

    it('should resolve with returned tasks', (done) => {
      Task.getAll().then((tasks) => {
        tasks.should.deep.equal(returnedTasks);
        done();
      });
    });

    it('should throw an error if db query fails', (done) => {
      DbHelper.query.restore();
      sinon.stub(DbHelper, 'query').rejects();
      Task.getAll().then(() => {
        assert.fail();
        done();
      }).catch(() => done());
    });
  });
});
