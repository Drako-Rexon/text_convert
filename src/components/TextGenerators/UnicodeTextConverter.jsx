import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UnicodeTextConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const convertToUnicode = (text) => {
    return text.split('').map(char => {
      return '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0');
    }).join(' ');
  };

  const handleConvert = () => {
    setOutput(convertToUnicode(input));
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
        placeholder="Enter text to convert to Unicode..."
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleConvert}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Convert to Unicode
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

export default UnicodeTextConverter; 