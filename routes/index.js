var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/add-car', (req, res) => {
    res.render('addCar')
})

router.get('/edit-car', (req, res) => {
    res.render('editCar')
})

router.use('/', require('./car'))
router.use('/user', require('./user'))
router.use('/history', require('./history'))

module.exports = router;
