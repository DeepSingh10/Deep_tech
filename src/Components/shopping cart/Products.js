import React from 'react';
import './cart.css'

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div className='btn'>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}