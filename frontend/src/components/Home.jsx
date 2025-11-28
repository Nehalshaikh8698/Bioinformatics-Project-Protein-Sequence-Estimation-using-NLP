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
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center transition-colors">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{metric.label}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{metric.desc}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-3 gap-8">
        {[
          { title: 'Sequence Analysis', desc: 'Extract contextual embeddings and predict protein structure' },
          { title: 'Model Comparison', desc: 'Compare performance across multiple transformer models' },
          { title: 'Batch Processing', desc: 'Upload FASTA files for large-scale analysis' }
        ].map((feature, idx) => (
          <div key={idx} className="space-y-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🧬</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Research Highlights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Highlights</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
