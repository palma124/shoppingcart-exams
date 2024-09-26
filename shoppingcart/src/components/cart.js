
import React from 'react';

const Cart = ({ totalItems, totalPrice }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
