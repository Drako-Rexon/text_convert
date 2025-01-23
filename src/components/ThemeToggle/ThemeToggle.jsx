import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <button 
        className={`theme-toggle-btn ${isDark ? 'dark' : 'light'}`}
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
      >
        <span className="icon sun">🌞</span>
        <span className="icon moon">🌙</span>
        <span className="toggle-thumb"></span>
      </button>
    </div>
  );
};

export default ThemeToggle; 