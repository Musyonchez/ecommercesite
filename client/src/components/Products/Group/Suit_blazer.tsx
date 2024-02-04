import React from 'react';
import Suit_product from './Suit_product';

const Suit_blazer = () => {
  const productContent = [
  {
    imageUrl: "../../../../public/cottonshirt1.jpeg",
    title: "Slim-fit cotton shirt pictures",
    reference: "REF.63000040-CLAUDE",
    price: 29.99,
  },
  {
    imageUrl: "../../../../public/cottonshirt3.jpeg",
    title: "Slim-fit cotton shirt pictures",
    reference: "REF.63000040-CLAUDE",
    price: 29.99,
  }
  ]
    



  return (
    <div className='w-3/4'>
 {productContent.map((product, index) => (
          <div key={index} className="flex flex-col h-1/2">
            <Suit_product
              imageUrl={product.imageUrl}
              title={product.title}
              reference={product.reference}
              price={product.price}
            />
          </div>
        ))}    </div>
  );
}

export default Suit_blazer;
