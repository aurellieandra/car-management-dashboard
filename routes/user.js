var express = require('express');
var router = express.Router();
const UserController = require('../controller/user');
const Auth = require('../middleware/authentication')

router.get('/', UserController.getAllUsers);
router.post('/add', UserController.addUser);

router.post('/login', UserController.login);
router.get('/getdatafromtoken', Auth);

// router.get('/getdatafromtoken', Auth, UserController.getAllUsers);

module.exports = router;