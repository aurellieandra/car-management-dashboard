const { User } = require('../models');

module.exports = class {
    static addUser(req, res, next) {
        User.create({
            nama: req.body.nama,
            email: req.body.email,
            password: req.body.password
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'a new user created!',
                    data: result
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static getAllUsers(req, res, next) {
        User.findAll()
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    data: result
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
} 