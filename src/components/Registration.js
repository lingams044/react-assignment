import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '', email: '', age: '', course: '', gender: '', skills: [], address: ''
  });

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...formData.skills];
    if (checked) updatedSkills.push(value);
    else updatedSkills = updatedSkills.filter(skill => skill !== value);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Submitted:", formData);
    navigate('/success');
  };

  return (
    <div className="App-header">
      <form onSubmit={handleSubmit} className="App-container">
        <h1 className="App-title">Student Admission Form</h1>
        
        <div className="form-group">
          <label htmlFor="studentName">Full Name *</label>
          <input 
            id="studentName"
            type="text" 
            placeholder="Enter your full name" 
            required 
            value={formData.studentName}
            onChange={(e) => setFormData({...formData, studentName: e.target.value})} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input 
            id="email"
            type="email" 
            placeholder="Enter your email" 
            required 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input 
            id="age"
            type="number" 
            placeholder="Enter your age" 
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="course">Select Course *</label>
          <select 
            id="course"
            required
            value={formData.course}
            onChange={(e) => setFormData({...formData, course: e.target.value})}
          >
            <option value="">-- Choose a Course --</option>
            <option value="Computer Science">💻 Computer Science</option>
            <option value="Mechanical">⚙️ Mechanical Engineering</option>
            <option value="Arts">📚 Arts & Humanities</option>
            <option value="Commerce">💼 Commerce</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              /> Male
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              /> Female
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="radio" 
                name="gender" 
                value="Other" 
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              /> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" value="Java" onChange={handleSkillsChange} /> Java
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" value="Python" onChange={handleSkillsChange} /> Python
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" value="React" onChange={handleSkillsChange} /> React
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" value="JavaScript" onChange={handleSkillsChange} /> JavaScript
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea 
            id="address"
            placeholder="Enter your full address" 
            rows="4"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>

        <button type="submit" className="button" style={{ marginTop: '20px', width: '100%' }}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Registration;
      <textarea placeholder="Address" onChange={(e) => setFormData({...formData, address: e.target.value})} />
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Submit</button>
    </form>
  );
};

export default Registration;
