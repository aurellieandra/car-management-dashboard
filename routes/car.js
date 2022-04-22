var express = require('express');
var router = express.Router();
const CarController = require('../controller/car');

router.get('/cars', CarController.getAllCars);
router.post('/cars', CarController.addCar);
router.put('/cars/:id', CarController.updateCars);
router.delete('/cars/:id', CarController.deleteCars);

module.exports = router;