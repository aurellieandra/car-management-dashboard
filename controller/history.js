const { History, Car, User } = require('../models')

module.exports = class {
    static addHistory(req, res, next) {
        History.create({
            CarId: req.body.CarId,
            UserId: req.userlogin.id
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'new history created!',
                    data: result
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    }

    static getAllHistories(req, res, next) {
        History.findAll({
            where: {},
            include: [
                { model: Car }, { model: User }
            ]
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    data: result
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    }

}