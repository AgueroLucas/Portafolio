import React from 'react';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

const Cards = () => {
  return (
    
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Card />
          <Card2 />
          <Card3 />
        </div>
      </div>
    
  );
};

export default Cards;