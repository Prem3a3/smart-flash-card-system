const falshCardController = require('../controllers/flash-card-controller');
const express = require('express');
var router = express.Router();

router.post('/flashcard', falshCardController.createFlashCard);

module.exports = router;
