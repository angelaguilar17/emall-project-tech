import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

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
        <p className="store-info">{producto.descripcion}</p>
        <button
          onClick={() => navigate(`/producto/${producto.id}`)}
          className="button-search"
        >
          Ver producto
        </button>
      </div>
    </div>
    
   
  );
};


export default ProductCard;