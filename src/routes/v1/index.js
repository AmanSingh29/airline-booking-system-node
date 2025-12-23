const express = require("express");
const router = express.Router();

router.use("/info", (req, res) => {
    return res.json({message: `This is rout: ${req.url}`})
});

module.exports = router;
