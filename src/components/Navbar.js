import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';




function MyComponent() {
  return (
    <div className="d-flex flex-row mb-3">
      <div className="p-2">
        <NavLink to="/" className="text-decoration-none">
          <button className="btn btn-secondary">Go to Home</button>
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink to="/main" className="text-decoration-none">
          <button className="btn btn-secondary">Go to Main</button>
        </NavLink>
      </div>
      <div className="p-2">
        <NavLink to="/about" className="text-decoration-none">
          <button className="btn btn-secondary">Go to About</button>
        </NavLink>
      </div>
    </div>
  );
}

export default MyComponent;
