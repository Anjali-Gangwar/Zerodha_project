const {Model} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new Model("position", PositionsSchema);

module.exports = {PositionsModel};
