import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoreCard.css';

const StoreCard = ({ tienda }) => {
  const navigate = useNavigate();
  return (
    <div className="store-container">
      <div className="store-card">
        <img 
          src={tienda.imagen} 
          alt={tienda.nombre} 
          className="store-imagen"
        />
        <h2 className="store-name">{tienda.nombre}</h2>
        <p className="store-info">{tienda.descripcion}</p>

        <button
          onClick={() => navigate(`/tienda/${tienda.id}`)}
          className="button-search"
        >
          Visítanos
        </button>
      </div>

    </div>
    
   
  );
};


export default StoreCard;