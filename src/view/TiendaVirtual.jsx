import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreCard from '../Components/StoreCard'


const TiendaVirtual = ({ tiendas }) => {

    const [busqueda, setBusqueda] = useState('');

    const tiendasFiltradas = tiendas.filter(tienda =>
        tienda.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container">
            <div className="buscador-container">
            <h1>Nuestras Tiendas</h1>
                <input
                    type="text"
                    placeholder="Buscar tiendas..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="buscador-input"
                />
            </div>

            <div className="productos-grid">
                {tiendasFiltradas.length > 0 ? tiendasFiltradas.map((tienda) => (
                    <StoreCard
                        key={tienda.id}
                        tienda={tienda}
                        
                    />

                )) : (
                    <p> No se encontraron registros </p>
                )}
            </div>  
        </div>
    );
};

export default TiendaVirtual;