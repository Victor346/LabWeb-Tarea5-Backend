const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);

router.get('/tasks', tasksController.list);

router.post('/tasks', tasksController.store);

router.post('/delete', tasksController.delete)

router.post('/update', tasksController.done)

module.exports = router;
