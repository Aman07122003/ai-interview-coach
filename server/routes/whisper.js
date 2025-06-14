// whisper.js
import express from "express";
import whisperController from "../controllers/whisperController.js";
import auth from "../middleware/auth.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "temp/" });

router.post('/transcribe', auth, upload.single("file"), whisperController.transcribe);

export default router;

