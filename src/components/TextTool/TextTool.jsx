import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextTool = () => {
  const [inputText, setInputText] = useState('');
  const [buttonList, setButtonList] = useState([]);

  useEffect(() => {
    setButtonList([
      "Copy to clipboard",
      "UPPER CASE",
      "lower case",
      "Capitilize Case",
      "Sentence case",
      "aLtErNaTiNg CaSe",
      "InVeRsInG cAsE",
      "Clear",
      "cAmel cAsing",
      "esreveR gnirtS"
    ]);
  }, []);

  const handleTextInput = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
  }

  const handleTextModification = (key, text) => {
    switch (key) {
      case 0:
        handleCopy(text);
        // function for copy to clipboard        
        break;
      case 1:
        setInputText(convertToUppercase(text));
        break;
      case 2:
        setInputText(convertToLowercase(text));
        break;
      case 3:
        setInputText(capitalizeEachWord(text));
        break;
      case 4:
        setInputText(capitalizeFirstLetter(text));
        break;
      case 5: setInputText(inverseAlternatingCase(text));
        break; alternatingCase
      case 6: setInputText(alternatingCase(text));
        break;
      case 7: setInputText('');
        break;
      case 8: setInputText(convertToCamelCase(text));
        break;
      case 9: setInputText(reverseString(text));
        break;

      default:
        notify("The function is not implemented");
        break;
    }

  }

  // * error window handler

  const notify = (message) => toast(message);

  // * end of error window handler

  // * all the functions for the inputting text

  const handleCopy = async () => {

    const inputRef = document.createElement('input');
    inputRef.value = inputText;
    document.body.appendChild(inputRef);
    inputRef.select();
    try {

      document.execCommand('copy');
    } catch (err) {
      console.error('Failed to copy text:', err);
      notify('Failed to copy text to clipboard');
      return;
    }

    document.body.removeChild(inputRef);
    notify('Copy to clipboard successfully');
  };

  function convertToCamelCase(str) {
    return str.split(' ')
      .map(word => word.charAt(0).toLowerCase() + word.charAt(1).toUpperCase() + word.slice(2).toLowerCase())
      .join(' ');
  }

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function capitalizeEachWord(sentence) {
    sentence = sentence.toLowerCase();
    const words = sentence.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalizedWords.join(" ");
  }

  function pasteContent() {

    navigator.clipboard.readText()
      .then(text => {
        console.log(text);
        setInputText(text);
      })
      .catch(error => {
        console.error('Error pasting content:', error);
      });
  }

  function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function convertToUppercase(text) {
    const newText = text.toString();
    return newText.toUpperCase();
  }

  function convertToLowercase(text) {
    const newText = text.toString();
    return newText.toLowerCase();
  }

  function alternatingCase(text) {
    let result = "";
    let isUpperCase = true;

    for (let i = 0; i < text.length; i++) {
      if (isUpperCase) {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }

      isUpperCase = !isUpperCase;
    }

    return result;
  }
  function inverseAlternatingCase(text) {
    let result = "";
    let isUpperCase = true;

    for (let i = 0; i < text.length; i++) {
      if (!isUpperCase) {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }

      isUpperCase = !isUpperCase;
    }

    return result;
  }

  // * end of all the functions for the inputting text

  const buttonTile = (name, index) => {

    return <button key={index} className="mx-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={() => handleTextModification(index, inputText)}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {name}
      </span>
    </button>
  }

  // * lower function

  const countWords = (text) => {
    return inputText.trim().split(/\s+/).filter(word => word !== '').length;
  }

  function countCharacters(text) {
    return text.trim().length;
  }

  function countSentences(text) {
    const sentences = text.split(/[.\?!]/);
    const filteredSentences = sentences.filter(sentence => sentence !== '');
    return filteredSentences.length;
  }

  function countLines(text) {
    // Split the text into lines based on newline characters (\n)
    const lines = text.split(/\r?\n/);

    // Filter out empty lines
    const filteredLines = lines.filter(line => line !== '');

    // Count the number of lines
    return filteredLines.length;
  }

  // * end of lower function

  return (

    <div className='mx-60'>
      {/* // * error window */}

      <div>
        <ToastContainer theme="dark" />
      </div>

      {/* // * error window ends */}
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Put your text here:</label>
      <textarea value={inputText} onChange={handleTextInput} id="message" rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your text here..."><button
        type="button"
        onClick={pasteContent}
        className="textarea-button"
      >
        Submit
      </button>
      </textarea>

      <div className='my-4 flex flex-wrap'>
        {
          buttonList.map((element, index) => {
            return <div key={index} >{buttonTile(element, index)}</div>;
          })
        }
      </div>
      <div className='flex'>
        <div className="word-count-container bg-gray-100 p-2 rounded-md mx-4">
          <p className="text-gray-700">Character Count: {countCharacters(inputText)}</p>
        </div>
        <div className="word-count-container bg-gray-100 p-2 rounded-md mr-4">
          <p className="text-gray-700">Word Count: {countWords(inputText)}</p>
        </div>
        <div className="word-count-container bg-gray-100 p-2 rounded-md mx-4">
          <p className="text-gray-700">Sentence Count: {countSentences(inputText)}</p>
        </div>
        <div className="word-count-container bg-gray-100 p-2 rounded-md mx-4">
          <p className="text-gray-700">Line Count: {countLines(inputText)}</p>
        </div>
      </div>
    </div>
  )
}

export default TextTool
