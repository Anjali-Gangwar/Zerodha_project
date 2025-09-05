const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const PositionsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = mongoose.model("Positions", PositionsSchema);