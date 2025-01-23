import React, { useState } from 'react';

const ProgrammingCalc = () => {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('text-to-binary');

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

  const handleConvert = () => {
    if (mode === 'text-to-binary') {
      setInput(textToBinary(input));
    } else {
      setInput(binaryToText(input));
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-gray-900 text-white rounded-lg shadow-md">
      <select
        className="w-full p-3 mb-4 bg-gray-800 text-white border border-gray-700 rounded-lg"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="text-to-binary">Text to Binary</option>
        <option value="binary-to-text">Binary to Text</option>
      </select>
      <textarea
        className="w-full min-h-[200px] p-4 mb-4 bg-gray-800 text-white border border-gray-700 rounded-lg resize-vertical"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text or binary..."
      />
      <button
        className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleConvert}
      >
        Convert
      </button>
    </div>
  );
};

export default ProgrammingCalc; 