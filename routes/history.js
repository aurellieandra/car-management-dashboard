var express = require('express');
var router = express.Router();
const HistoryController = require('../controller/history');
const Auth = require('../middleware/authentication')

router.get('/', HistoryController.getAllHistories);
router.post('/add', Auth, HistoryController.addHistory);

module.exports = router;