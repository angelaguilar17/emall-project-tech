/**
 * Este componente contiene la barra de navegación superior
 */


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Bppal = () => {
  const location = useLocation();

  return (
    <nav className="main-Bppal">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/crear-producto' ? 'active' : ''}>
          <Link to="/crear-producto">Crear Producto</Link>
        </li>
        <li className={location.pathname === '/lista-productos' ? 'active' : ''}>
          <Link to="/lista-productos">Todos los Productos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Bppal;