import React from "react";
import './Snackbar.css';

const Snackbar = ({ msg, button, closeicon }) => {
    return (
      <div className="snackbar">
        <h2 className="message">{ msg }</h2>
        <h2 className="button-txt">{ button }</h2>
        <img src={closeicon} />
      </div>
    );
  };

export default Snackbar;