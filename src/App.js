import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <nav style={{
        padding: '15px 30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        display: 'flex',
        gap: '30px',
        justify: 'center',
        box-shadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
        align-items: 'center'
      }}>
        <Link to="/" style={{
          color: 'white',
          margin: '0 15px',
          font-weight: '600',
          transition: 'all 0.3s ease',
          font-size: '1.1rem'
        }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.5)'}
           onMouseLeave={(e) => e.target.style.textShadow = 'none'}>Home</Link>
        <Link to="/register" style={{
          color: 'white',
          margin: '0 15px',
          font-weight: '600',
          transition: 'all 0.3s ease',
          font-size: '1.1rem'
        }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.5)'}
           onMouseLeave={(e) => e.target.style.textShadow = 'none'}>Register</Link>
        <Link to="/about" style={{
          color: 'white',
          margin: '0 15px',
          font-weight: '600',
          transition: 'all 0.3s ease',
          font-size: '1.1rem'
        }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.5)'}
           onMouseLeave={(e) => e.target.style.textShadow = 'none'}>About</Link>
      </nav>

      <div style={{ padding: '20px', min-height: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
