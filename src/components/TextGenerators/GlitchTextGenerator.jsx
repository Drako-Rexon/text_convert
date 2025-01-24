import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlitchTextGenerator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const generateGlitch = (text) => {
    return text.split('').map(char => {
      return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  };

  const handleGenerate = () => {
    setOutput(generateGlitch(input));
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto my-8 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.textarea
        className="w-full p-3 mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text for glitch effect..."
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleGenerate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Generate Glitch Text
      </motion.button>
      <motion.div 
        className="mt-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>{output}</p>
      </motion.div>
    </motion.div>
  );
};

export default GlitchTextGenerator; 