const Sequelize = require("sequelize");
const db = require("../util/database");

const Order = db.define("orders", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },

    price: Sequelize.INTEGER,

    dish: Sequelize.STRING,

    table: Sequelize.STRING
});

module.exports = Order;