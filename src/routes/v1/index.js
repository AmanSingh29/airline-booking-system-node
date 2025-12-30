const express = require("express");
const router = express.Router();
const airplaneRouter = require("./airplane-route");

router.use("/airplane", airplaneRouter);

module.exports = router;
