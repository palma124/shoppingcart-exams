
import React, { useState } from 'react';
import './App.css';
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: KSh {product.price.toFixed(2)}</p> 
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const Cart = ({ cartItems }) => {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: KSh {totalPrice.toFixed(2)}</p> 
    </div>
  );
};

const App = () => {
  const products = [
    { id: 1, name: 'pampers', price: 128 },  
    { id: 2, name: 'cakes', price: 149 },
    { id: 3, name: 'boxers', price: 99 },
    { id: 4, name: 'chocolate', price: 129 },
    { id: 5, name: 'unga', price: 49 },
    { id: 6, name: 'mafuta', price: 399 },
    { id: 7, name: 'tissue', price: 229 },
    { id: 8, name: 'Bread', price: 199 },
    { id: 9, name: 'Tomatoes', price: 169 },
    { id: 10, name: 'indomie', price: 189 },
  ];
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1><u> Shopping Cart</u></h1>
      <div className="container">
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;