import React from 'react';
import "./card.css"; // import the css file


const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <h3>Card 1</h3>
        <p>This is the first card.</p>
      </div>

      <div className='card'>
        <h3>Card 2</h3>
        <p>This is my second card.</p>
      </div>

      <div className='card'>
        <h3>Card 3</h3>
        <p> This is my third card.</p>
      </div>
    </div>
  );
};

export default Card;