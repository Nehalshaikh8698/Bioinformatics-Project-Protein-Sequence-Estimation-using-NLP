🧬 Protein Sequence Estimation using NLP
Deep Learning–based Missing Residue Prediction using ProtBERT

This project uses Natural Language Processing (NLP) techniques and Transformer-based protein models (ProtBERT) to estimate missing amino acids in protein sequences.
It provides a full-stack ML system with:

🧠 Python ML backend (ProtBERT masked-LM)

🚀 Node.js API server

🎨 React Frontend UI

🔍 Real-time protein sequence prediction

🧪 Supports FASTA input, missing residue filling, sequence cleaning

📌 Features
🔬 AI-Powered Protein Analysis

Predicts missing residues (?, _, or masked positions)

Handles partial or noisy sequences (FASTA headers auto-cleaned)

Displays top predicted residues with confidence scores

Generates a completed protein sequence

🧬 Model Used

ProtBERT (Rostlab/prot_bert)

420M parameters

Trained on UniRef100 (216M+ sequences)

Works using masked language modeling (MLM)

💻 Full-Stack Architecture
Layer	Technology
Frontend	React, TailwindCSS
Backend	Node.js, Express.js
ML Engine	Python, Transformers, PyTorch
ML Model	ProtBERT (local)

PROJECT_NLP/
│── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── python_scripts/
│   │   ├── predict.py
│   │   ├── load_models.py
│   ├── ml_models/        # (ignored — add model manually)
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   ├── public/
│
│── .gitignore
│── README.md



⚙️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/yourusername/protein-nlp.git
cd protein-nlp


🧠 2️⃣ Download the ProtBERT Model (Required)

ProtBERT is too large for GitHub, so download it manually:

from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("Rostlab/prot_bert", do_lower_case=False)
model = AutoModelForMaskedLM.from_pretrained("Rostlab/prot_bert")

tokenizer.save_pretrained("./backend/ml_models/protbert")
model.save_pretrained("./backend/ml_models/protbert")



🚀 3️⃣ Install Backend
cd backend
npm install

Run backend:
npm start
Backend starts on:
http://localhost:5000




💻 4️⃣ Install Frontend
bash
Copy code
cd frontend
npm install
npm start
Frontend starts on:

arduino
Copy code
http://localhost:3000



🧪 Testing the API
Missing residue prediction
curl -X POST http://localhost:5000/api/models/fill-missing \
  -H "Content-Type: application/json" \
  -d '{"model":"protbert","sequence":"MKTI?ALSYIF"}'


  🎨 Frontend Features

FASTA cleanup
Sequence length counter
Model selection (ProtBERT/others future-ready)
Confidence table with ranked predictions
Completed sequence display
Dark mode

📊 Example Prediction

Input sequence:
MK?TI?AL?YI


Output:
Completed: MKLTILALRYI
Predicted residues at ?, ?, ?
Confidence scores for each position


🧾 Tech Stack
Frontend

React.js
Tailwind CSS
Lucide Icons

Backend
Node.js
Express.js
Python bridge (child_process → spawn)
Machine Learning
HuggingFace Transformers
ProtBERT model
PyTorch



🔮 Future Enhancements

Add multi-mask prediction
Support ProtT5, ESM2, Ankh
Batch FASTA uploads
Model accuracy visualization
Fine-tuning on custom datasets

🧠 Research Importance

Protein sequence completion helps in:

Drug discovery
Structural biology
Predicting protein function
Filling gaps in experimental data
Improving annotation of incomplete sequences

👨‍💻 Author

Nehal Shaikh
Data Analyst & Full-Stack Developer
AI & Protein NLP Research
GitHub: @Nehalshaikh8698
