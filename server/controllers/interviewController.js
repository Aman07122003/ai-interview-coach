// Mock GPT-4 evaluation
function evaluateInterviewQuestion(question, answer) {
    return {
      score: Math.round(Math.random() * 10),
      feedback: "Consider adding more depth to your answer.",
    };
  }
  
  exports.feedback = (req, res) => {
    const { question, answer } = req.body;
  
    if (!question || !answer) {
      return res.status(400).json({ message: "Question and answer are required" });
    }
  
    const evaluation = evaluateInterviewQuestion(question, answer);
    res.json({ evaluation });
  };
  
  