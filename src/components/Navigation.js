// src/components/Navigation.js
import React from 'react';

const Navigation = ({ onNavigate }) => {
  return (
    <div>
      <button onClick={() => onNavigate('previous')}>Previous</button>
      <button onClick={() => onNavigate('next')}>Next</button>
    </div>
  );
};

export default Navigation;
