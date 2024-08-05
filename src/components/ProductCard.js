// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 text-center">
      <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
      <div className="product-details">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-500">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
