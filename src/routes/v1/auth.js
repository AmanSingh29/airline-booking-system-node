const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  return res.json({ message: `This is rout of signup: ${req.url}` });
});

router.get("/login", (req, res) => {
  return res.json({ message: `This is rout of login: ${req.url}` });
});

module.exports = router;
