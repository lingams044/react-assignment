import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="App-header">
      <div className="App-container" style={{
        background: 'linear-gradient(135deg, rgba(81, 207, 102, 0.1) 0%, rgba(81, 207, 102, 0.05) 100%)',
        border: '2px solid #51cf66',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
        <h1 style={{
          color: '#51cf66',
          fontSize: '2rem',
          marginBottom: '15px'
        }}>Registration Successful!</h1>
        <p className="App-description">
          Congratulations! Your application has been submitted successfully.
        </p>
        <p className="App-description">
          Our admissions team will review your application and contact you within 3-5 business days.
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <Link to="/" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
          }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
