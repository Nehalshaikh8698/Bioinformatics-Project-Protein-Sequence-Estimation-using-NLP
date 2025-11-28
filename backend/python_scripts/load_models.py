from transformers import AutoTokenizer, AutoModelForMaskedLM, pipeline
import torch

MODEL_PATH = "../ml_models/protbert"  # relative to this file

def load_protbert_model():
    tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH, do_lower_case=False)
    model = AutoModelForMaskedLM.from_pretrained(MODEL_PATH)
    unmasker = pipeline("fill-mask", model=model, tokenizer=tokenizer, top_k=5)
    return unmasker


