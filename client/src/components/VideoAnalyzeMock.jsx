import React, { useState } from "react";

function VideoAnalyzeMock() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  
  const handleFile = (e) => setFile(e.target.files[0]);

  const handleAnalyze = () => {
    if (file) {
      setMsg("Analyze (mock)... This might take a few seconds.");
      setTimeout(() => {
        setMsg("Analysis complete. Detected nervousness and poor eye contact.");
      }, 2000);
    } else {
      setMsg("Please select a video first.");
    }
  }

  return (
    <div className="p-4 border rounded-md mt-4">
      <h4>Analyze Your Video (Mock)</h4>
      <input 
        type="file" 
        onChange={handleFile}
        aria-label="Select Video File"
      /><br/>

      <button 
        onClick={handleAnalyze}
        className="bg-blue-500 text-gray-50 p-2 mt-2">
        Analyze
      </button>

      {msg && <p className="msg mt-2">{msg}</p>}

    </div>
  )
}

export default VideoAnalyzeMock;

