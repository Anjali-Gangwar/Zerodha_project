const express = require("express");
const router = express.Router();
const HoldingsModel = require("../schemas/HoldingsSchema");

router.get("/", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find();
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
