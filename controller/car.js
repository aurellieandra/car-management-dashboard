const { Car } = require('../models');

module.exports = class {
    /* Create Car */
    static async addCar(req, res, next) {
        try {
            const result = await Car.create({
                nama: req.body.nama,
                tipe: req.body.tipe,
                hrg_sewa: req.body.hrg_sewa,
                ukuran: req.body.ukuran,
                foto: req.body.foto
            })
            res.status(201).send({
                status: 201,
                message: 'a new car created!',
                data: result
            }, res.redirect("/"))
        } catch (error) {
            console.log(error)
        }

    }

    /* Get All Car */
    static async getAllCars(req, res, next) {
        try {
            const result = await Car.findAll()
            res.status(201).send({
                status: 201,
                data: result
            })
        } catch (error) {
            console.log(error);
        }
    }

    /* Get Car by Id */
    static async getCar(req, res, next) {
        try {
            const id = req.params.id
            const result = await Car.findByPk(id)
            res.status(201).send({
                status: 201,
                data: result
            },
                res.render('editCar', { mobil: result })
            )
        } catch (error) {
            console.log(error)
        }
    }

    /* Update Car */
    static async updateCars(req, res, next) {
        try {
            const result = await Car.update({
                nama: req.body.nama,
                tipe: req.body.tipe,
                hrg_sewa: req.body.hrg_sewa,
                ukuran: req.body.ukuran,
                foto: req.body.foto
            },
                { where: { id: req.params.id } })
            res.status(201).send({
                status: 201,
                message: 'car sucessfully updated!',
                data: result
            },
                res.redirect('/')
            )
        } catch (error) {
            console.log(error)
        }
    }

    /* Delete Car */
    static async deleteCars(req, res, next) {
        try {
            await Car.destroy({
                where: { id: req.params.id }
            })
            res.status(201).send({
                status: 201,
                message: 'car sucessfully deleted!',
            }, res.redirect('/'))
        } catch {
            console.log(error)
        }
    }
}  