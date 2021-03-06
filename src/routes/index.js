const express = require('express');
const TaskRouter = require('./task');

const router = express.Router(); // eslint-disable-line new-cap

/**
 * Checks if api is healthy.
 *
 * @api {get} /health API health check
 * @apiName HealthCheck
 * @apiGroup Health
 * @apiVersion  1.0.0
 *
 * @apiSuccess (200) {String} apiStatus The api status.
 */
router.get('/health', (req, res) => {
  res.send('Ok');
});

router.use('/tasks', TaskRouter);

module.exports = router;
