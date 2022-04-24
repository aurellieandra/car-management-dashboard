const { Car } = require('../models');

module.exports = class {
    /* Create Car */
    static addCar(req, res, next) {
        Car.create({
            nama: req.body.nama,
            tipe: req.body.tipe,
            hrg_sewa: req.body.hrg_sewa,
            ukuran: req.body.ukuran,
            foto: req.body.foto
        })
            .then((result) => {
                res.status(201).send(
                    {
                        status: 201,
                        message: 'a new car created!',
                        data: result
                    },
                    res.redirect("/")
                )
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /* Get All Car */
    static getAllCars(req, res, next) {
        Car.findAll()
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    data: result
                })
                // res.render('index', { result })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /* Get Car by Id */
    static getCar(req, res, next) {
        const id = req.params.id

        Car.findByPk(id)
            .then((result) => {
                // res.status(201).send({
                //     status: 201,
                //     data: result
                // }),
                res.render('editCar', { mobil: result })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /* Update Car */
    static updateCars(req, res, next) {
        let body = {
            nama: req.params.nama,
            hrg_sewa: req.params.hrg_sewa,
            ukuran: req.params.ukuran,
            foto: req.params.foto
        }
        Car.update(body, {
            where: { id: req.params.id }
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'car sucessfully updated!',
                    type: 'PUT',
                    data: req.body
                }, res.redirect('/'))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    /* Delete Car */
    static deleteCars(req, res, next) {
        Car.destroy({
            where: { id: req.params.id }
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'car sucessfully deleted!',
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
} 