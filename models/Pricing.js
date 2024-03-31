// models/Pricing.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Organization = require('./Organization');
const Item = require('./Item');

const Pricing = sequelize.define('Pricing', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  organizationId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Organization,
      key: 'id',
    },
  },
  itemId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Item,
      key: 'id',
    },
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  baseDistanceInKm: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  kmPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fixPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Pricing;