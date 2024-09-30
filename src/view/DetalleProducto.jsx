/**Este componente contiene la información detallada de cada producto */

import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Bppal from "../Components/Bppal";

const DetalleProducto = ({ productosLibreria, agregarAlCarrito }) => {

    const { id } = useParams(); 
    const navigate = useNavigate();
    const productoSeleccionado = productosLibreria.find(producto => producto.id === parseInt(id));
    
    navigate('/');

    return (
        <div className="product-detail-container">
            <Bppal />
            <div className="product-image">
                <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} />
            </div>
            <div className="product-info">
                <h2>{productoSeleccionado.nombre}</h2>
                <p className="producto-precio" style={{ margin: '0' }}>Precio: ${productoSeleccionado.precio}</p>
                <p>{productoSeleccionado.descripcion}</p>
            </div>
        </div>
    );
}

export default DetalleProducto;