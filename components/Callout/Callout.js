import React from "react";
import './Callout.css';

const Callout = ({ color, message }) => {
    return (
      <div className={color}>
            <h2>{ message }</h2>
      </div>
    );
  };

export default Callout;