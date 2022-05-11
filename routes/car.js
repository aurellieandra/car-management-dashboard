var express = require('express');
var router = express.Router();
const CarController = require('../controller/car');

router.get('/api/cars', CarController.getAllCars);

router.post('/cars', CarController.addCar);

router.get('/edit-car/:id', CarController.getCar)

router.post('/edit-car/:id', CarController.updateCars);

router.get('/delete/:id', CarController.deleteCars);

module.exports = router;