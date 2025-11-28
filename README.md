🧬 Protein Sequence Estimation using NLP
Deep-Learning Based Missing Residue Prediction with ProtBERT

A full-stack AI system that predicts missing amino acids in protein sequences using advanced Transformer-based NLP models.
Built with Python (ProtBERT), a Node.js backend, and a React frontend for real-time residue completion.

⭐ Overview

This project uses ProtBERT (Rostlab/prot_bert) — a 420M-parameter protein language model trained on UniRef100 (216M+ sequences) — to intelligently fill missing residues.

✔ Predicts amino acids for masked positions
✔ Supports FASTA input
✔ Provides confidence scores
✔ Full-stack real-time system
✔ Clean and interactive UI

🚀 Features
🔬 AI-Powered Protein Sequence Completion

Predicts missing residues (?, _, X, or masked tokens)

Automatically cleans FASTA headers

Handles noisy or incomplete protein sequences

Returns:

Completed sequence

Top residue predictions

Confidence probabilities

🧬 Model Summary
Model	Parameters	Dataset	Architecture
ProtBERT	420M	UniRef100	BERT Transformer
🏗️ Full-Stack Architecture
Layer	Technology
Frontend	React, TailwindCSS, Vite
Backend	Node.js, Express.js
Machine Learning	Python, Transformers, PyTorch
Model	ProtBERT (local model directory)
📁 Project Structure
<img width="740" height="634" alt="image" src="https://github.com/user-attachments/assets/902fccd9-2c40-4a52-a69f-e2a8944e1c36" />

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/Nehalshaikh8698/Bioinformatics-Project-Protein-Sequence-Estimation-using-NLP.git

cd PROJECT_NLP

2️⃣ Download ProtBERT Model (Required)

GitHub cannot store large ML models, so download manually:

from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("Rostlab/prot_bert", do_lower_case=False)
model = AutoModelForMaskedLM.from_pretrained("Rostlab/prot_bert")

tokenizer.save_pretrained("./backend/ml_models/protbert")
model.save_pretrained("./backend/ml_models/protbert")

3️⃣ Backend Setup (Node.js + Python)
cd backend
npm install
npm start


Backend runs at:
👉 http://localhost:5000

4️⃣ Frontend Setup (React + Vite)
cd frontend
npm install
npm start


Frontend runs at:
👉 http://localhost:3000

🧪 API Usage
Predict missing residues:
curl -X POST http://localhost:5000/api/models/fill-missing \
  -H "Content-Type: application/json" \
  -d '{"model":"protbert","sequence":"MKTI?ALSYIF"}'

🎨 Frontend Highlights

FASTA cleanup

Residue prediction visualization

Confidence score ranking

Dark mode

Fully responsive design

Real-time ML processing via backend

📊 Example Output
Input
MK?TI?AL?YI

Output
Completed: MKLTILALRYI
Missing position predictions:
? → L (0.82)
? → T (0.71)
? → R (0.64)

#DEMO:
#HOME PAGE
<img width="1128" height="1039" alt="image" src="https://github.com/user-attachments/assets/1efe3875-3537-4bd3-900a-c67117ec69e0" />

#INPUT PAGE
<img width="1885" height="950" alt="image" src="https://github.com/user-attachments/assets/69a1e3aa-68fb-4134-abb0-54e2adbfc29b" />

#OUPUT PAGE
<img width="944" height="968" alt="image" src="https://github.com/user-attachments/assets/ceb9ed83-baed-4e9d-8db0-d85c571171f3" />



🧾 Tech Stack
Frontend

React.js

Tailwind CSS

Lucide Icons

Backend

Node.js

Express.js

Python bridge (child_process)

ML Engine

HuggingFace Transformers

ProtBERT

PyTorch

🔮 Future Enhancements

Support for ProtT5, ESM-2, Ankh models

Multi-mask simultaneous prediction

Batch FASTA file upload

Attention heatmaps

Fine-tuning module

🧠 Research Importance

Protein sequence completion helps in:

Drug discovery

Structural biology

Function prediction

Repairing incomplete experimental datasets

Enhancing annotation pipelines

👨‍💻 Author

Nehal Shaikh
AI & DS | Full-Stack Developer | Protein NLP Research

🔗 GitHub: @Nehalshaikh8698
