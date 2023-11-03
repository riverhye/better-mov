const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize (
    config.database,
    config.user,
    config.password,
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);

module.exports = db;