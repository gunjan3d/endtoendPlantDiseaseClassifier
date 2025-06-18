# 🌿 Plant Disease Classifier 🌿

A web-based Plant Disease Classification system that uses a **FastAPI backend** for image inference, a **React frontend** for user interaction, and is fully containerized using **Docker**.

---

## 🚀 Features

- Upload plant leaf images to predict diseases.
- FastAPI handles model inference and API endpoints.
- React provides an intuitive UI.
- Docker ensures consistent deployment across environments.

---

## 🧱 Project Structure

plant-disease-classifier/
│
├── backend/ # FastAPI backend
│ ├── main.py
│ ├── model/ # Saved ML model (TensorFlow/Keras)
│ ├── requirements.txt
│ └── Dockerfile
│
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ ├── Dockerfile
│ └── package.json
│
├── docker-compose.yml
└── README.md

yaml
Copy
Edit

---

## ⚙️ Requirements

- Docker & Docker Compose
- (Optional) Python 3.9+ & Node.js 16+ if running outside containers

---

## 🐳 Running the App with Docker (Recommended)

### 1. Clone the Repository
git clone https://github.com/&&&&&&&&/plant-disease-classifier.git
cd plant-disease-classifier
2. Build and Run Containers
bash
Copy
Edit
docker-compose up --build
This will:

Build the FastAPI backend on port 8000

Build the React frontend on port 3000

Connect both containers via Docker Compose

3. Open in Browser
Visit: http://localhost:3000

🧪 Backend (FastAPI)
If you want to run it without Docker:

Setup
bash
Copy
Edit
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
Run FastAPI
bash
Copy
Edit
uvicorn main:app --host 0.0.0.0 --port 8000
API Endpoints
POST /predict: Accepts image file and returns disease prediction

🌐 Frontend (React)
If you want to run it without Docker:

Setup
bash
Copy
Edit
cd frontend
npm install
Run Development Server
bash
Copy
Edit
npm start
Make sure the backend is running on port 8000.

🛠️ Configuration
Update the API base URL in the React frontend if you're not using Docker Compose:

js
Copy
Edit
// src/api.py or wherever the endpoint is defined
const API_URL = "http://localhost:8000";
📦 Deployment Tips
For production, consider:

Nginx reverse proxy

Using Docker volumes for static builds

HTTPS setup (Let’s Encrypt)

📸 Example Prediction
Upload: tomato_leaf.jpg

Output:

json
Copy
Edit
{
  "prediction": "Tomato___Late_blight",
  "confidence": 0.97
}
👨‍💻 Author
Gunjan Sarode
LinkedIn • Analyst Trainee at KPMG

