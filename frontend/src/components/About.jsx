import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About This Research</h2>
        <p className="text-gray-600 dark:text-gray-300">NLP-driven protein sequence estimation</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Overview</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This research explores Natural Language Processing techniques in modeling 
          protein sequences. By leveraging pre-trained models like ProtBERT, ProtT5, 
          and Ankh3, we perform structure/function estimation without evolutionary profiles.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Findings</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Up to 87% precision in sequence prediction</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>40x faster inference than MSA approaches</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Effective for orphan proteins</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Multi-task learning enhances robustness</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
        <h3 className="text-xl font-semibold mb-3">Future Directions</h3>
        <ul className="space-y-2">
          <li>• Integration of multimodal biological data</li>
          <li>• Extension to nucleic acid–protein interaction sites</li>
          <li>• Enhanced model interpretability</li>
          <li>• Real-time prediction API's</li>
        </ul>
      </div>
    </div>
  );
};

export default About;