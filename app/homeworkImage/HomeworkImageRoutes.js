const express = require('express');

const router = express.Router();
const homeworkImageController = require('./HomeworkImageController');

router.delete('/image/:id', homeworkImageController.deleteImageByIdHomework);

module.exports = router;
