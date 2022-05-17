const { User } = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('../helper/jwt')
const UserService = require('../service/users')

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

    // Contoh enkripsi yang tidak best-practice
    /*
    static async addUser(req, res, next) {
        const newPassword = await bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: newPassword })
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
    */

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

    static async login(req, res, next) {
        try {
            const user = await User.findOne({ where: { email: req.body.email } })
            if (!user) {
                res.status(404).send({
                    status: 404,
                    message: 'User not found!'
                })
            }

            const isValidPassword = await bcrypt.compare(req.body.password, user.password)

            if (!isValidPassword) {
                res.status(404).send({
                    status: 400,
                    message: 'Email and password not match!'
                })
            }

            /*
                // Token 
                const token = jwt.generateToken({ email: user.email, password: user.password })
                const secureUser = user.dataValues
                delete secureUser.password
            */

            // Session
            const secureUser = user.dataValues
            req.session.isAuthenticated = true;
            req.session.user = user;

            res.status(200).send({
                status: 200,
                message: 'User found!',
                data: {
                    user: secureUser,
                    // token: token
                }
            })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    // Example of Query Usage
    static async findAllUsersSample(req, res, next) {
        try {
            const response = await UserService.findAll()
            res.status(200).send(response)
        } catch (error) {
            res.status(500).send(error)
        }
    }
} 