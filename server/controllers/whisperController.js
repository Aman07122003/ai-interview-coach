// Mock Whisper transcription
exports.transcribe = (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No audio provided" });
  
    res.json({ transcript: "This is a mock transcription of your audio answer." });
  };
  
  