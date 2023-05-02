import React from 'react';
import LoginButton from './Login'

const Splash = () => {
  return (
    <div className="splash-container">
      <h1>Welcome to Our Website</h1>
      <p>Please log in to access the site.</p>
      <LoginButton />
    </div>
  );
};

export default Splash;
