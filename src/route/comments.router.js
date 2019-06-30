const express = require('express');
const router = express.Router();
const comments_controller = require('../controllers/comments.controller');

router.post('/create', comments_controller.create);
router.get('/retrive', comments_controller.retrive);
router.get('/retriveAll', comments_controller.retriveAll);

module.exports = router;