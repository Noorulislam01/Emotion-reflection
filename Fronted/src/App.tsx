import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<{ emotion: string; emoji: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter your reflection.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", { text });
      setResult(response.data);
    } catch (err) {
      setError("Failed to get response from server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Emotion Reflection</h1>
        {/* <p className="subtitle">Understand your feelings through AI analysis</p> */}
      </div>
      
      <div className="input-card">
        <textarea
          placeholder="How are you feeling today? Share your thoughts..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="textarea"
          disabled={loading}
        />
        
        <div className="actions">
          <button 
            onClick={handleSubmit} 
            disabled={loading} 
            className={`submit-btn ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Analyzing...
              </>
            ) : (
              'Analyze Emotions'
            )}
          </button>
          {text && !loading && (
            <button 
              onClick={() => setText("")} 
              className="clear-btn"
            >
              Clear
            </button>
          )}
        </div>

        {error && <p className="error-msg">{error}</p>}
      </div>

      {result && (
        <div className="result-card">
          <div className="result-header">
            <h2>Your Emotion Analysis</h2>
            <div className="emoji-display">{result.emoji}</div>
          </div>
          
          <div className="result-details">
            <div className="detail-item">
              <span className="detail-label">Emotion:</span>
              <span className="detail-value capitalize">{result.emotion}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Confidence:</span>
              <span className="detail-value">{Math.round(result.confidence * 100)}%</span>
            </div>
          </div>
          
          
        </div>
      )}
      
      
    </div>
  );
}

export default App;