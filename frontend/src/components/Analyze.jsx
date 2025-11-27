import React, { useState } from 'react';
import { analyzeSequence } from '../utils/api';
import { validateSequence } from '../utils/constants';
import { Loader, AlertCircle, CheckCircle } from 'lucide-react';

const Analyze = () => {
  const [sequence, setSequence] = useState('');
  const [selectedModel, setSelectedModel] = useState('protbert');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  // 🧬 Clean FASTA input (remove headers, spaces, numbers, etc.)
  const cleanSequenceInput = (raw) => {
    if (!raw) return '';
    return raw
      .replace(/^>.*$/gm, '') // remove FASTA headers
      .replace(/[0-9\s\n\r\t]/g, '') // remove whitespace and numbers
      .toUpperCase()
      .trim();
  };

  const handleSequenceChange = (e) => {
    const cleaned = cleanSequenceInput(e.target.value);
    setSequence(cleaned);
  };

  const handleAnalyze = async () => {
    setError('');
    setResults(null);

    if (!sequence.trim()) {
      setError('Please enter a protein sequence.');
      return;
    }

    if (!validateSequence(sequence)) {
      setError('Invalid sequence. Only standard amino acids and ?/_/X allowed.');
      return;
    }

    setLoading(true);
    try {
      const data = await analyzeSequence(sequence, selectedModel);
      setResults(data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Analysis failed. Check backend logs.');
    } finally {
      setLoading(false);
    }
  };

  // 🧬 Highlight predicted residues within the sequence
  const renderHighlightedSequence = () => {
    if (!results?.completed_sequence || !Array.isArray(results.predictions)) {
      return <span className="font-mono">{sequence}</span>;
    }

    const highlighted = [];
    const predictedPositions = new Map();

    results.predictions.forEach((p) => {
      const top = p.predictions?.[0];
      if (top) {
        predictedPositions.set(p.position, {
          aa: top.aa,
          score: top.score,
        });
      }
    });

    results.completed_sequence.split('').forEach((aa, i) => {
      const pos = i + 1;
      if (predictedPositions.has(pos)) {
        const { aa: predAA, score } = predictedPositions.get(pos);
        highlighted.push(
          <span
            key={i}
            className="text-green-600 dark:text-green-400 font-bold hover:underline cursor-pointer"
            title={`Predicted: ${predAA} (Confidence: ${(score * 100).toFixed(3)}%)`}
          >
            [{aa}]
          </span>
        );
      } else {
        highlighted.push(
          <span key={i} className="text-gray-800 dark:text-gray-100">
            {aa}
          </span>
        );
      }
    });

    return <span className="font-mono text-lg">{highlighted}</span>;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analyze Protein Sequence
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Paste a FASTA sequence or enter amino acids (use “?” for missing residues)
        </p>
      </div>

      {/* Model Selection */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Select Model
        </label>
        <div className="grid grid-cols-4 gap-3">
          {['protbert', 'prott5', 'esm2', 'ankh3'].map((model) => (
            <button
              key={model}
              onClick={() => setSelectedModel(model)}
              className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                selectedModel === model
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              {model.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Sequence Input */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Protein Sequence / FASTA Input
        </label>
        <textarea
          value={sequence}
          onChange={handleSequenceChange}
          placeholder={`>sp|P12345|MY_PROTEIN Homo sapiens\nMKTIIALSYIFCLVFADYKD?DDDK`}
          className="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Length: {sequence.length} amino acids
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:bg-gray-400 dark:disabled:bg-gray-600 flex items-center justify-center gap-2 transition-colors"
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          'Analyze Sequence'
        )}
      </button>

      {/* Results Display */}
      {results && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Prediction Results
          </h3>

          {/* Highlighted Completed Sequence */}
          {results.completed_sequence ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-green-800 dark:text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Completed Sequence:</span>
              </div>
              <div className="overflow-x-auto">{renderHighlightedSequence()}</div>
              <p className="text-xs text-gray-500 mt-2">
                Green residues = predicted replacements (hover to see confidence)
              </p>
            </div>
          ) : (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg text-yellow-800 dark:text-yellow-300">
              ⚠️ No missing amino acid detected or no predictions returned.
            </div>
          )}

          {/* Predictions per position */}
          {Array.isArray(results.predictions) && results.predictions.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Predicted Residues by Position:
              </h4>
              {results.predictions.map((pos, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                    🧩 Position {pos.position}
                  </h5>
                  <table className="w-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-1 border-b border-gray-300 dark:border-gray-600">
                          Rank
                        </th>
                        <th className="px-3 py-1 border-b border-gray-300 dark:border-gray-600">
                          Amino Acid
                        </th>
                        <th className="px-3 py-1 border-b border-gray-300 dark:border-gray-600">
                          Confidence
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pos.predictions.map((p, i) => (
                        <tr
                          key={i}
                          className="border-t border-gray-200 dark:border-gray-700"
                        >
                          <td className="px-3 py-1">{i + 1}</td>
                          <td className="px-3 py-1 font-mono">{p.aa}</td>
                          <td className="px-3 py-1">{p.score.toExponential(5)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Analyze;
