import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import TextTool from './components/TextTool/TextTool';
import ProgrammingCalc from './components/ProgrammingCalc/ProgrammingCalc';
import Translator from './components/Translator/Translator';
import TextGenerators from './components/TextGenerators/TextGenerators';
import ZalgoTextGenerator from './components/TextGenerators/ZalgoTextGenerator';
import GlitchTextGenerator from './components/TextGenerators/GlitchTextGenerator';
import UnicodeTextConverter from './components/TextGenerators/UnicodeTextConverter';
import TilesSection from './components/TilesSection/TilesSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<TextTool />} />
              <Route path="/calculator" element={<ProgrammingCalc />} />
              <Route path="/translator" element={<Translator />} />
              <Route path="/text-generators" element={<TextGenerators />} />
              <Route path="/text-generators/zalgo" element={<ZalgoTextGenerator />} />
              <Route path="/text-generators/glitch" element={<GlitchTextGenerator />} />
              <Route path="/text-generators/unicode" element={<UnicodeTextConverter />} />
            </Routes>
            <TilesSection />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
