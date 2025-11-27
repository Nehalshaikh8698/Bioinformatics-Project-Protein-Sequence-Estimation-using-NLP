export const MODELS = {
  protbert: {
    name: 'ProtBERT',
    description: 'BERT-based model trained on UniRef100',
    params: '420M',
    accuracy: '85%'
  },
  prott5: {
    name: 'ProtT5',
    description: 'T5 architecture with sequence-to-sequence capabilities',
    params: '3B',
    accuracy: '87%'
  },
  esm2: {
    name: 'ESM-2',
    description: 'Evolutionary Scale Modeling',
    params: '650M',
    accuracy: '86%'
  },
  ankh3: {
    name: 'Ankh3',
    description: 'Multi-task model with denoising',
    params: '1.5B',
    accuracy: '88%'
  }
};

// ✅ Include missing/unknown placeholders for NLP inference
export const AMINO_ACIDS = 'ACDEFGHIKLMNPQRSTVWY?X_';

// ✅ Updated validation — allows standard + placeholder amino acids
export const validateSequence = (sequence) => {
  const cleanSeq = sequence.toUpperCase().replace(/\s/g, '');
  const regex = new RegExp(`^[${AMINO_ACIDS}]+$`);
  return regex.test(cleanSeq);
};
