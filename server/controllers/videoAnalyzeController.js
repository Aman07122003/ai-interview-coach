const { spawn } = require("child_process");

const fs = require("fs");

exports.analyze = (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No video provided" });

  const videoPath = req.file.path;

  // Mock OpenCV + Mediapipe process
  res.json({ message: "Analysis complete.", result: { expression: "happy", confidence: 0.97 } });

  // Uncomment if you want to enable actual script:
  // const process = spawn("python", ["ai/video_processor.py", videoPath]);

  // let stdout = '';
  // let stderr = '';
  // process.stdout.on("data", (data) => (stdout += data.toString()));
  // process.stderr.on("data", (data) => (stderr += data.toString()));

  // process.on("close", (code) => {
  //   if (code == 0) {
  //     res.json({ message: "Analysis complete.", result: JSON.parse(stdout) });
  //   } else {
  //     res.status(500).json({ message: "Analysis failed.", error: stderr });
  //   }
  // });
};

