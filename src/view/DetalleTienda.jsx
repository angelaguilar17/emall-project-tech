import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

const DetalleTienda = ({ tiendas }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const tienda = tiendas.find(p => p.id === parseInt(id));

    return (
        <div className="producto-detalle">
            <div className="producto-imagenes">
                {tienda.imagenes.map((imagen) => (
                    <img src={imagen} alt="Producto" className="detalle-imagen" />
                ))}
            </div>
        </div>
    );

}

export default DetalleTienda;