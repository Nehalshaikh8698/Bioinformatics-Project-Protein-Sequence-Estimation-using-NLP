const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Batch route working!" });
});

module.exports = router;
