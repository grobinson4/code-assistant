const express = require('express');
const router = express.Router();

const { chatCompletion } = require('../controllers/ChatCompletionController');

router.post('/chatCompletion', chatCompletion);

module.exports = router;