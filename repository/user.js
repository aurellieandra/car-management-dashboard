const { User } = require('../models');

// Contoh Service Repository Pattern
module.exports = class {
    static findAll() {
        return User.findAll()
    }

    static findAllQuery() {
        return User.query('SELECT * FROM `Users`', { type: QueryTypes.SELECT })
    }
}