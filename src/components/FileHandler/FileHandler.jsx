import React from 'react';
import './FileHandler.css';

const FileHandler = ({ onTextLoad }) => {
  const handleFileOpen = async () => {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [
          {
            description: 'Text Files',
            accept: {
              'text/*': ['.txt', '.json', '.md']
            }
          }
        ]
      });
      
      const file = await handle.getFile();
      const text = await file.text();
      onTextLoad(text);
    } catch (error) {
      console.error('Error opening file:', error);
    }
  };

  return (
    <div className="file-handler">
      <button onClick={handleFileOpen} className="file-btn">
        Open File 📂
      </button>
    </div>
  );
};

export default FileHandler;