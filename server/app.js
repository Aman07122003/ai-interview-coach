import express from "express";
import authRouter from "./routes/auth.js";
import interviewRouter from "./routes/interview.js";
import videoAnalyzeRouter from "./routes/videoAnalyze.js";
import whisperRouter from "./routes/whisper.js";
import db from "./config/db.js";

import dotenv from "dotenv";

dotenv.config();

db();

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/videoAnalyze', videoAnalyzeRouter);
app.use('/api/whisper', whisperRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}.`));

