📝 Emotion Reflection App
A simple, mobile-first web app where users can enter short text reflections and receive a mock "emotion analysis" powered by a Python Flask API.

🔧 Tech Stack
Frontend: React + TypeScript

Backend: Python + Flask

Styling: Plain CSS

📦 Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone <your-repo-url>
cd <project-folder>
2. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
The frontend will be available at:
👉 http://localhost:3000

3. Backend Setup (Flask API)
Make sure you have Python installed (preferably version 3.8+).

bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
The backend API will run at:
👉 http://127.0.0.1:5000

🛠 Requirements File Example (backend/requirements.txt)
nginx
Copy
Edit
flask
flask-cors
🎉 Usage
Run both the frontend and backend.

Open the web app in your browser.

Enter your reflection text and click Analyze.

View the random emotion and confidence returned by the backend.

