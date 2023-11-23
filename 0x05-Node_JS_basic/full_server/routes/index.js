const express = require('express');

const router = express.Router();
const studentsController = require('../controllers/StudentsController');
const appController = require('../controllers/AppController');

router.get('/', appController.getHomepage);
router.get('/students', studentsController.getAllStudents);

router.get('/students/:major', studentsController.getAllStudentsByMajor);
module.exports = router;
