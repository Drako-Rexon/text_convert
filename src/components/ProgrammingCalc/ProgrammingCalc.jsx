import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProgrammingCalc = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const textToBinary = (text) => {
    return text.split('').map(char =>
      char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join(' ');
  };

  const binaryToText = (binary) => {
    try {
      return binary.split(' ').map(bin =>
        String.fromCharCode(parseInt(bin, 2))
      ).join('');
    } catch (error) {
      alert('Invalid binary input! Baby please check your input 🥺');
      return input;
    }
  };

  const decimalToBinary = (decimal) => {
    return parseInt(decimal, 10).toString(2);
  };

  const binaryToDecimal = (binary) => {
    return parseInt(binary, 2).toString(10);
  };

  const decimalToOctal = (decimal) => {
    return parseInt(decimal, 10).toString(8);
  };

  const octalToDecimal = (octal) => {
    return parseInt(octal, 8).toString(10);
  };

  const decimalToHexadecimal = (decimal) => {
    return parseInt(decimal, 10).toString(16).toUpperCase();
  };

  const hexadecimalToDecimal = (hexadecimal) => {
    return parseInt(hexadecimal, 16).toString(10);
  };

  const handleConvert = (conversionFunction) => {
    try {
      setError('');
      const result = conversionFunction(input);
      setOutput(result);
    } catch (error) {
      setError('Invalid input! Please enter a valid number.');
    }
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto my-8 p-8 bg-gray-900 text-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        className="w-full p-3 mb-4 bg-gray-800 text-white border border-gray-700 rounded-lg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your number..."
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.button
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleConvert(decimalToBinary)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Decimal to Binary
        </motion.button>
        <motion.button
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleConvert(binaryToDecimal)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Binary to Decimal
        </motion.button>
        <motion.button
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleConvert(decimalToOctal)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Decimal to Octal
        </motion.button>
        <motion.button
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleConvert(octalToDecimal)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Octal to Decimal
        </motion.button>
        <motion.button
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleConvert(decimalToHexadecimal)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Decimal to Hexadecimal
        </motion.button>
        <motion.button
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleConvert(hexadecimalToDecimal)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hexadecimal to Decimal
        </motion.button>
      </div>
      {output && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg">
          <p>Result: {output}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProgrammingCalc; 