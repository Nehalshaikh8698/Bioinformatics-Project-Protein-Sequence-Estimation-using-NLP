const { spawn } = require("child_process");
const path = require("path");

exports.runPython = (script, inputData) => {
  return new Promise((resolve, reject) => {
    const pyPath = path.join(__dirname, "..", "python_scripts", script);
    console.log(`🚀 Running Python script: ${pyPath}`);

    const process = spawn("python", [pyPath]);

    let output = "";
    let errorOutput = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    process.on("close", (code) => {
      if (errorOutput) {
        console.error("🐍 Python stderr:", errorOutput);
      }

      console.log("🔚 Python exited with code:", code);
      console.log("📤 Python stdout:", output);

      try {
        const parsed = JSON.parse(output);
        resolve(parsed);
      } catch (err) {
        console.error("❌ Failed to parse Python JSON:", err);
        reject(new Error(`Invalid JSON from Python. STDERR: ${errorOutput}`));
      }
    });

    process.stdin.write(JSON.stringify(inputData));
    process.stdin.end();
  });
};
