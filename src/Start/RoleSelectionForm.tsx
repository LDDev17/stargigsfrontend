import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './selectionform.css'; // Import the CSS file

const RoleSelectionForm = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedRole === 'performer') {
      navigate('/performer-signup');
    } else if (selectedRole === 'planner') {
      navigate('/planner-signup');
    }
  };

  return (
    <form className="role-selection-form" onSubmit={handleSubmit}>
      <div className="role-selection-container">
        <h1 className="role-selection-title">Select Your Role</h1>
        <p className="role-selection-description">Choose the role that best describes you.</p>
        <div className="role-selection-options">
          <div className="radio-option">
            <input
              type="radio"
              id="performer"
              name="role"
              value="performer"
              className="radio-icon"
              onChange={handleRoleChange}
            />
            <label htmlFor="performer" className="radio-label">Performer</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="planner"
              name="role"
              value="planner"
              className="radio-icon"
              onChange={handleRoleChange}
            />
            <label htmlFor="planner" className="radio-label">Planner</label>
          </div>
        </div>
        <button type="submit" className="role-selection-button">Continue</button>
        <div className="role-selection-login">
          Already have an account? <button className="role-selection-login-button">Login</button>
        </div>
      </div>
    </form>
  );
};

export default RoleSelectionForm;
