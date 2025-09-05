const {Model} = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new Model("order", OrdersSchema);

module.exports = {OrdersModel};
