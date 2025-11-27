const { runPython } = require("../services/pythonBridge");

exports.fillMissingResidues = async (req, res) => {
  try {
    const { model, sequence } = req.body;

    if (!model || !sequence)
      return res.status(400).json({ error: "Model and sequence are required" });

    console.log("🧬 Incoming request:", { model, sequence });

    const predictions = await runPython("predict.py", { model, sequence });

    console.log("✅ Python result:", predictions);
    res.json(predictions);
  } catch (err) {
    console.error("❌ Error in fillMissingResidues:", err);
    res.status(500).json({ error: "Model inference failed" });
  }
};
