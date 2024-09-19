import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import TiendaVirtual from './view/TiendaVirtual';
import DetalleTienda from './view/DetalleTienda';


const App = () => {
  const [carrito, setCarrito] = useState([]);
  const tiendas = [
    {
      id: 1, 
      nombre: 'Libreria Entre Hojas', 
      info: 'Literatura para todas las edades', 
      descripcion: 'Literatura clásica, juvenil, universal',
      imagen: './imagenes/logo4.jpeg',
      imagenes: [
        '/imagenes/libro1.jpg',
        '/imagenes/libro2.jpg',
        '/imagenes/libro3.jpg'
      ]
    },
    { id: 2, 
      nombre: 'Joyería Polaris', 
      info: 'Joyeria en acero, plata, Rodio', 
      descripcion: 'Hermosas prendas', 
      imagen: './imagenes/logo3.jpeg',
      imagenes:[
        '/imagenes/joya1.jpg',
        '/imagenes/joya2.jpg',
        '/imagenes/joya3.jpg',
      ]
    },
    { id: 3, 
      nombre: 'Pink Studio', 
      info: 'Personalización de camisetas y mugs', 
      descripcion: 'Detalles personalizados', 
      imagen: './imagenes/logo2.jpeg',
      imagenes:[
        '/imagenes/detalle1.jpg',
        '/imagenes/detalle2.jpg',
        '/imagenes/detalle3.jpg'
      ]
    },
  ];

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarAlCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (productoId) => {
    const index = carrito.findIndex(item => item.id === productoId);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };


  return (
  <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={
          <TiendaVirtual
            carrito={carrito}
            setCarrito={setCarrito}
            agregarAlCarrito={agregarAlCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
            vaciarAlCarrito={vaciarAlCarrito}
            tiendas={tiendas} />
        } />
        <Route path='/tienda/:id' element={
          <DetalleTienda 
            tiendas={tiendas} />
        } />
        
      </Routes>
    </Router>
  </>
  );
};

export default App;