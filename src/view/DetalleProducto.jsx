/**Este componente contiene la información detallada de cada producto */

import React from "react";
import { useParams, useNavigate } from 'react-router-dom';


const DetalleProducto = ({ productosLibreria }) => {

    const { id } = useParams(); 
    const navigate = useNavigate();
    const productoSeleccionado = productosLibreria.find(producto => producto.id === parseInt(id));
    navigate('/');

    return (
        <div className="product-detail-container">
            
            <div className="product-image">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} />
            </div>
            <div className="product-info">
                <h2>{productoSeleccionado.nombre}</h2>
                <p>Precio: ${productoSeleccionado.precio}</p>
                <p>{productoSeleccionado.descripcion}</p>
            </div>
        </div>
    );
}

export default DetalleProducto;