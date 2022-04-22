'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Car extends Model { }

  Car.init({
    nama: DataTypes.STRING,
    tipe: DataTypes.STRING,
    hrg_sewa: DataTypes.INTEGER,
    ukuran: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize
  });

  Car.associate = function (models) {
    Car.belongsToMany(models.User, { through: 'History' })
  }

  return Car;
};