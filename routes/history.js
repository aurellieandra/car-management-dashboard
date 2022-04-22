var express = require('express');
var router = express.Router();
const HistoryController = require('../controller/history');

router.get('/', HistoryController.getAllHistories);
router.post('/add', HistoryController.addHistory);

module.exports = router;