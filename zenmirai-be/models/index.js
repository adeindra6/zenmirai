const dbConfig = require("../config/db.config.js");
const Sequelize = require("@sequelize/core");

const sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    ssl: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);

module.exports = db;