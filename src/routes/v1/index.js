const express = require("express");
const router = express.Router();
const authRouter = require("./airplane-route");

router.use("/airplane", authRouter);

module.exports = router;
