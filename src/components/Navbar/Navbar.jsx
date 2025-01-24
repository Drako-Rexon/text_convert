import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <nav className="navbar bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <div className="nav-brand">
        <Link to="/" style={{ color: isDark ? 'white' : 'inherit' }}>TextTools</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Text Editor</Link>
        <Link to="/calculator" className="nav-link">Programming Calc</Link>
        <Link to="/text-generators" className="nav-link">Text Generators</Link>
        
        <button 
          onClick={() => setIsDark(!isDark)} 
          className="theme-toggle-btn"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
