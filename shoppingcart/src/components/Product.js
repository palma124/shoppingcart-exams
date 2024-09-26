
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default Product;
