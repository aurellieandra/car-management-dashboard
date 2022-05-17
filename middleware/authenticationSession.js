const { User } = require('../models')

module.exports = async (req, res, next) => {
    try {
        res.status(200).send(req.session.user)
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: 'User not found!',
        })
        console.log(err)
    }
}