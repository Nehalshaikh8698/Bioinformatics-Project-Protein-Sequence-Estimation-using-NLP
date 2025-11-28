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
  