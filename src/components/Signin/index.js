import React from 'react';
import Google from './Google.js';

import './styles.css';

const Signin = () => {
  return (
    <div id='signin_container'>
      <h1>Budget Planner</h1>
      <div id='signin_content'>
        <Google />
      </div>
    </div>
  );
};

export default Signin;
