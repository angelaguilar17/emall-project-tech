import React from 'react';
import './ProductCard.css';
import { useParams } from 'react-router-dom';

const ProductCard = ({ producto }) => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="product-imagen"
        />
        <h2 className="store-name">{producto.nombre}</h2>
        <p className="store-info">${producto.precio}</p>
        <p className="store-info">{producto.descripcion}</p>
      </div>

    </div>
    
   
  );
};


export default ProductCard;