import React from 'react';
import './Card.css';

const Card = ({ title, subheading, image }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} />
      <p className="card-subheading">{subheading}</p>
    </div>
  );
};

export default Card;
