import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [msg, setMsg] = useState('');
  
  const handleAnalyze = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMsg("Not authorized.");
        return;
      }

      const res = await axios.post('/api/interview/feedback',
        { question, answer },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFeedback(res.data.evaluation);
      setMsg('');
    } catch (error) {
      setMsg(error.response?.data?.message || "Analysis failed.");
    }
  }

  return (
    <div className="p-4">
      <h2>Interview Dashboard</h2>
      <form onSubmit={handleAnalyze} className="bg-gray-100 p-4 rounded-md shadow-md">
        <input
          className="border p-2 mr-2"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          required
        /><br/>

        <textarea
          className="border p-2 mt-2"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your Answer"
          required
        /><br/>

        <button className="bg-blue-500 text-gray-50 p-2 mt-2">Analyze</button>

        {msg && <p className="msg mt-2">{msg}</p>}

        {feedback && (
          <div className="bg-green-100 p-4 mt-4 rounded-md">
            <h4>Evaluation</h4>
            <p>Score: {feedback.score}/10</p>
            <p>Feedback: {feedback.feedback}</p>
          </div>
        )}

      </form>
    </div>
  )
}

export default Dashboard;

