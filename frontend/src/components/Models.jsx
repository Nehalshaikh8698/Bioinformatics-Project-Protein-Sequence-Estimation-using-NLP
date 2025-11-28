import React from 'react';
import { MODELS } from '../utils/constants';

const Models = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Pre-trained Protein Language Models
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          State-of-the-art transformer architectures
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(MODELS).map(([key, model]) => (
          <div
            key={key}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {model.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {model.description}
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-center">
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Parameters
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {model.params}
                </div>
              </div>

