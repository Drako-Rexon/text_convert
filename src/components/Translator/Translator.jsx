import React, { useState } from 'react';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const handleTranslate = () => {
    // Dummy translation logic
    setOutputText(inputText.split('').reverse().join(''));
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
      <textarea
        className="w-full p-3 mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate..."
      />
      <div className="flex justify-between mb-4">
        <select
          className="p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg"
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          {/* Add more languages */}
        </select>
        <select
          className="p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          {/* Add more languages */}
        </select>
      </div>
      <button
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleTranslate}
      >
        Translate
      </button>
      <textarea
        className="w-full p-3 mt-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg"
        value={outputText}
        readOnly
        placeholder="Translated text will appear here..."
      />
    </div>
  );
};

export default Translator; 