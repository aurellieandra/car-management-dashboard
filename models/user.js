'use strict';

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model { }

  User.init({
    nama: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: {
        args: true,
        msg: 'Email address is already in use!'
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (record, options) => {
        // apabila tidak di enkripsi, pembuktian:
        //   record.password = "thisismy"+record.password
        record.password = bcrypt.hashSync(record.password, 10)
      },
      afterCreate: (record, options) => {
        console.log(record)
      }
    },
    sequelize
  });

  User.associate = function (models) {
    User.belongsToMany(models.Car, { through: 'History' })
  }
  return User;
};