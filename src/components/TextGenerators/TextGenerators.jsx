import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TextGenerators = () => {
  const navigate = useNavigate();
  const generators = [
    { name: 'Zalgo Text Generator', description: 'Create creepy text effects.', path: '/text-generators/zalgo' },
    { name: 'Glitch Text Generator', description: 'Generate glitchy text.', path: '/text-generators/glitch' },
    { name: 'Unicode Text Converter', description: 'Convert text to Unicode.', path: '/text-generators/unicode' },
    // Add more generators
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {generators.map((gen, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(gen.path)}
          >
            <h3 className="text-lg font-bold">{gen.name}</h3>
            <p>{gen.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TextGenerators; 