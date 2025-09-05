const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode : String,
});

module.exports = mongoose.model("Orders", OrdersSchema);