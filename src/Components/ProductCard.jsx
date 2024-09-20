import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoreCard.css';

const ProductCard = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <div className="product-container">
      <div className="product-card">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="product-imagen"
        />
        <h2 className="store-name">{producto.nombre}</h2>
        <p className="store-info">{producto.precio}</p>
      </div>

    </div>
    
   
  );
};


export default ProductCard;