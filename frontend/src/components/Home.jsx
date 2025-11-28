import React from 'react';




const Home = ({ setActiveTab }) => {
  const metrics = [
    { label: 'Accuracy', value: '87%', desc: 'Prediction Precision' },
    { label: 'Speed', value: '40x', desc: 'Faster Inference' },
    { label: 'Sequences', value: '250M+', desc: 'Training Data' },
    { label: 'Models', value: '4', desc: 'Pre-trained pLMs' }
  ];
  

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
          AI-Powered Protein Analysis
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Protein Sequence Estimation<br/>Using NLP
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Leverage state-of-the-art transformer models like ProtBERT, ProtT5, and Ankh3 
          for rapid, accurate protein sequence analysis
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <button 
            onClick={() => setActiveTab('analyze')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Start Analysis
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
            Documentation
