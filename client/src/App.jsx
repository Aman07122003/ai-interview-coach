import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import WhisperMock from "./components/WhisperMock";
import VideoAnalyzeMock from "./components/VideoAnalyzeMock";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/whisper" element={<WhisperMock />} />
        <Route path="/video-analyze" element={<VideoAnalyzeMock />} />
      </Routes>
    </Router>
  )
}

export default App;

