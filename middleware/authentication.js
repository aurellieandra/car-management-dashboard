const jwt = require('../helper/jwt')
const { User } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const payload = jwt.verifyToken(req.headers.token)
        if (!payload) {
            res.status(404).send({ message: 'User not found!' })
        }

        const user = await User.findOne({
            where: { email: payload.email, password: payload.password },
        })
        if (!user) {
            res.status(404).send({ message: 'User not found!' })
        } else {
            req.userlogin = user.dataValues
            // res.status(200).send(user)
            next()
        }
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: 'User not found!',
        })
        console.log(err)
    }
} 