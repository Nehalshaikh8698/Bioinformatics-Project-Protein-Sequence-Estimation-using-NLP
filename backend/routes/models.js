// backend/routes/models.js
const express = require("express");
const router = express.Router();
const { fillMissingResidues } = require("../controllers/modelController");

// 🧠 Route for filling missing amino acids
router.post("/fill-missing", fillMissingResidues);

// (Optional later) You can also add:
// const { completeSequence } = require("../controllers/modelController");
// router.post("/complete", completeSequence);

module.exports = router;
