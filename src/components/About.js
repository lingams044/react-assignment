import React from 'react';

const About = () => {
  return (
    <div className="App-header">
      <div className="App-container">
        <h1 className="App-title">About Our Institution</h1>
        <p className="App-description">
          We provide world-class education with a focus on innovation, excellence, and holistic development.
        </p>
        
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <h3>📍 Location</h3>
            <p>City Campus, Tech District</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <h3>📅 Established</h3>
            <p>1995 - Over 25 years of excellence</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h3>⭐ Accreditation</h3>
            <p>Grade A+ - Nationally Recognized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
