import React from 'react';
import './Button.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className="button red" {...rest}>
      {children}
    </button>
  );
};

export default Button;
