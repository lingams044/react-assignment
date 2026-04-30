import React from 'react';

const Home = () => {
  return (
    <div className="App-header">
      <div className="App-container">
        <h1 className="App-title">Welcome to Student Admission Portal</h1>
        <p className="App-description">
          Your future starts here. Apply now to join our prestigious institution and begin your journey towards excellence and innovation.
        </p>
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '1.1rem', color: '#667eea', fontWeight: '600' }}>🎓 Offering Premium Education 🎓</p>
          <p style={{ color: '#666', marginTop: '15px', lineHeight: '1.6' }}>
            Explore diverse programs, expert faculty, and world-class facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
