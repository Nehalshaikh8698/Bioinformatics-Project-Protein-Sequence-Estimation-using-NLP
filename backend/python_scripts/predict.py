import sys, json, os
from transformers import AutoTokenizer, AutoModelForMaskedLM, pipeline

# Cache models in memory
MODELS = {}
VALID_AAS = set("ACDEFGHIKLMNPQRSTVWY")

def load_model(model_name):
    """Load ProtBERT or any other model from ml_models folder."""
    if model_name in MODELS:
        return MODELS[model_name]

    base_path = os.path.join(os.path.dirname(__file__), "..", "ml_models", model_name.lower())
    tokenizer = AutoTokenizer.from_pretrained(base_path, do_lower_case=False)
    model = AutoModelForMaskedLM.from_pretrained(base_path)
    unmasker = pipeline("fill-mask", model=model, tokenizer=tokenizer, top_k=5)
    MODELS[model_name] = unmasker
    return unmasker


def fill_multiple_masks(sequence, model_name):
    """Handle prediction of multiple masked amino acids (?, _, X)."""
    unmasker = load_model(model_name)
    mask_token = unmasker.tokenizer.mask_token  # Usually [MASK]

    # Replace ? _ X with [MASK]
    seq_masked = "".join(mask_token if c in {"?", "_", "X"} else c for c in sequence.strip().upper())
    mask_positions = [i for i, c in enumerate(sequence) if c in {"?", "_", "X"}]

    if not mask_positions:
        return {"error": "No missing residues found."}

    predictions = []
    seq_chars = list(sequence.strip().upper())

    for idx in mask_positions:
        # Build current masked version
        current_seq = "".join(mask_token if i == idx else seq_chars[i] for i in range(len(seq_chars)))
        results = unmasker(current_seq)

        # Handle list-of-lists case
        if isinstance(results[0], list):
            mask_result = results[0]
        else:
            mask_result = results

        # Keep valid amino acid predictions only
        valid_preds = [r for r in mask_result if r["token_str"].strip() in VALID_AAS]

        predictions.append({
            "position": idx + 1,
            "predictions": [
                {"aa": r["token_str"].strip(), "score": float(r["score"])}
                for r in valid_preds
            ]
        })

        # Replace with top prediction
        if valid_preds:
            seq_chars[idx] = valid_preds[0]["token_str"].strip()
        else:
            seq_chars[idx] = "X"

    completed_seq = "".join(seq_chars)
    return {"completed_sequence": completed_seq, "predictions": predictions}


def main():
    try:
        raw_input = sys.stdin.read().strip()
        if not raw_input:
            print(json.dumps({"error": "No input received."}))
            return

        try:
            data = json.loads(raw_input)
        except json.JSONDecodeError as e:
            print(json.dumps({"error": f"Invalid JSON input: {str(e)}"}))
            return

        model = data.get("model", "protbert")
        sequence = data.get("sequence", "").strip()

        if not sequence:
            print(json.dumps({"error": "No sequence provided."}))
            return

        output = fill_multiple_masks(sequence, model)
        print(json.dumps(output))

    except Exception as e:
        print(json.dumps({"error": f"Python script crashed: {str(e)}"}))


if __name__ == "__main__":
    main()
