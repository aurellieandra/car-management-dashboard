const { response } = require('express')
const UserRepository = require('../repository/user')

module.exports = class {
    static findAll() {
        try {
            const response = UserRepository.findAll()

            if (!response) {
                UserRepository.findAllQuery()
            }
        } catch (error) {
            throw error
        }
    }
}