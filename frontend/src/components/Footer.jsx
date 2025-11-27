import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Protein Sequence Estimation Using NLP | Research Platform 2025</p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Built with MERN Stack | Models: ProtBERT, ProtT5, ESM2, Ankh3
        </p>
      </div>
    </footer>
  );
};

export default Footer;