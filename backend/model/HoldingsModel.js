const {Model} = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsSchema");

const HoldingsModel = new Model("holdings", HoldingsSchema);

module.exports = {HoldingsModel};
