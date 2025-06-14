import React, { useState } from "react";

function WhisperMock() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  
  const handleFile = (e) => setFile(e.target.files[0]);

  const handleTranscribe = () => {
    if (file) {
      setMsg("Transcribing (mock)... This might take a few seconds.");
      setTimeout(() => {
        setMsg("Transcribed text: This is a mock transcription.");
      }, 2000);
    } else {
      setMsg("Please select a file first.");
    }
  }

  return (
    <div className="p-4 border rounded-md mt-4">
      <h4>Whisper Transcribe (Mock)</h4>
      <input 
        type="file" 
        onChange={handleFile}
        aria-label="Select Audio File"
      /><br/>

      <button 
        onClick={handleTranscribe}
        className="bg-blue-500 text-gray-50 p-2 mt-2">
        Transcribe
      </button>

      {msg && <p className="msg mt-2">{msg}</p>}

    </div>
  )
}

export default WhisperMock;

