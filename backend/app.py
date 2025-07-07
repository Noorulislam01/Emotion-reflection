from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Allow frontend requests

@app.route('/analyze', methods=['POST'])
def analyze_emotion():
    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({'error': 'Text input is required'}), 400

    text = data['text']

    # Fake emotion analysis
    emotions = [
        ("Happy", "😊"),
        ("Anxious", "😟"),
        ("Calm", "😌"),
        ("Excited", "🤩"),
        ("Nervous", "😬"),
        ("Sad", "😢")
    ]
    emotion_text, emoji = random.choice(emotions)
    confidence = round(random.uniform(0.7, 1.0), 2)

    return jsonify({
        'emotion': emotion_text,
        'emoji': emoji,
        'confidence': confidence
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
