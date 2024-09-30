/**
 * Este componente realiza el filtrado de los productos
 */

import React, { useState } from 'react';
import TotProd from '../Components/TotProd'
import Bppal from '../Components/Bppal';


const FiltroProd = ({ productos, eliminarProducto }) => {

    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className='principal'>
            <Bppal />
            <div className="container">
                <h1>Todos los Productos</h1>

                <div >
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="buscador-input"
                    />
                </div>

                <div className="">
                    {productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
                        <TotProd
                            key={producto.id}
                            producto={producto}
                            EliminarProducto={eliminarProducto}
                        />
                    )) : (
                        <p> No se encontraron registros </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FiltroProd;