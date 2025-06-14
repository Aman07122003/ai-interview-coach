const express = require("express");
const router = express.Router();
const videoAnalyzeController = require("../controllers/videoAnalyzeController");
const auth = require("../middleware/auth");
const multer = require("multer");
const upload = multer({ dest: "temp/" });

router.post('/analyze', auth, upload.single("file"), videoAnalyzeController.analyze);

module.exports = router;
