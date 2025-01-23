import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <nav className="navbar" style={{ color: isDark ? 'white' : 'inherit' }}>
      <div className="nav-brand">
        <Link to="/" style={{ color: isDark ? 'white' : 'inherit' }}>TextTools</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Text Editor</Link>
        <Link to="/calculator" className="nav-link">Programming Calc</Link>
        
        <button 
          onClick={() => setIsDark(!isDark)} 
          className="theme-toggle"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
