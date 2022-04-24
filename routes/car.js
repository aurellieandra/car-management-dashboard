var express = require('express');
var router = express.Router();
const CarController = require('../controller/car');

router.get('/api/cars', CarController.getAllCars);

router.get('/:id', CarController.getCar)

router.post('/api/:id', CarController.updateCars);

router.post('/cars', CarController.addCar);

router.delete('/cars/:id', CarController.deleteCars);

module.exports = router;