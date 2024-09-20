import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import TiendaVirtual from './view/TiendaVirtual';
import DetalleTienda from './view/DetalleTienda';
import DetalleProducto from './view/DetalleProducto';


const App = () => {
  const [carrito, setCarrito] = useState([]);
  const tiendas = [
    {
      id: 0, 
      nombre: 'Libreria Entre Hojas', 
      info: 'Literatura para todas las edades', 
      descripcion: 'Literatura clásica, juvenil, universal',
      imagen: '/imagenes/logo4.jpeg',
    },
    { id: 1, 
      nombre: 'Joyería Polaris', 
      info: 'Joyería en acero, plata, Rodio', 
      descripcion: 'Hermosas prendas', 
      imagen: '/imagenes/logo3.jpeg',
    },
    { id: 2, 
      nombre: 'Pink Studio', 
      info: 'Personalización de camisetas y mugs', 
      descripcion: 'Detalles personalizados', 
      imagen: '/imagenes/logo2.jpeg',
    },
  ];

  const productosLibreria = [
    {
      id: 0, 
      tiendaNombre: 'LibreriaEntreHojas',
      nombre: 'El Campamento - Blue Jeans', 
      precio: '54.000', 
      descripcion: 'Libro de literatura romántica y policiaca.',
      imagen: '/imagenes/libro1.jpg',
    },
    { id: 1, 
      tiendaNombre: 'LibreriaEntreHojas',
      nombre: 'Un Beso en Paris - Stephanie Perkins', 
      precio: '45.000', 
      descripcion: 'Libro juvenil', 
      imagen: '/imagenes/libro2.jpg',
    },
    { id: 2, 
      tiendaNombre: 'LibreriaEntreHojas',
      nombre: 'Don Quijote de la Mancha - Miguel de Cervantes', 
      precio: '60.000', 
      descripcion: 'Libro de parodia, sátira', 
      imagen: '/imagenes/libro3.jpg',
    },
    { id: 3, 
      tiendaNombre: 'LibreriaEntreHojas',
      nombre: 'Alicia a través del espejo - Lewis Carroll', 
      precio: '35.000', 
      descripcion: 'Libro de literatura infantil, ficción', 
      imagen: '/imagenes/libro4.jpg',
    },
    { id: 4, 
      tiendaNombre: 'LibreriaEntreHojas',
      nombre: 'Alas de Sangre - Rebecca Yarros', 
      precio: '80.000', 
      descripcion: 'Empírio 1, tapa blanda', 
      imagen: '/imagenes/libro5.png',
    },
    { id: 5, 
      tiendaNombre: 'LibreriaEntreHojas',
      nombre: 'Tan Poca Vida - Hanya Yanagihara', 
      precio: '89.000', 
      descripcion: 'Literatura universal', 
      imagen: '/imagenes/libro6.jpg',
    },
    { id: 6, 
      tiendaNombre: 'JoyeriaPolaris',
      nombre: 'Aretes Hoja', 
      precio: '25.000', 
      descripcion: 'Aretes de acero inoxidable', 
      imagen: '/imagenes/joya1.jpg',
    },
    { id: 7, 
      tiendaNombre: 'JoyeriaPolaris',
      nombre: 'Collar multiple', 
      precio: '30.000', 
      descripcion: 'Collar en golfi', 
      imagen: '/imagenes/joya2.jpg',
    },
    { id: 8, 
      tiendaNombre: 'JoyeriaPolaris',
      nombre: 'Anillo Anastasia', 
      precio: '60.000', 
      descripcion: 'Anillo en baño de oro', 
      imagen: '/imagenes/joya3.jpg',
    },
    { id: 9, 
      tiendaNombre: 'JoyeriaPolaris',
      nombre: 'Aretes Mariposa', 
      precio: '35.000', 
      descripcion: 'Aretes en Rodio', 
      imagen: '/imagenes/joya4.jpg',
    },
    { id: 10, 
      tiendaNombre: 'PinkStudio',
      nombre: 'Combo Familiar', 
      precio: '180.000', 
      descripcion: '4 camisas personalizadas', 
      imagen: '/imagenes/detalle1.jpg',
    },
    { id: 11, 
      tiendaNombre: 'PinkStudio',
      nombre: 'Taza', 
      precio: '20.000', 
      descripcion: 'Taza personalizada', 
      imagen: '/imagenes/detalle2.jpg',
    },
    { id: 12, 
      tiendaNombre: 'PinkStudio',
      nombre: 'Camisa', 
      precio: '40.000', 
      descripcion: 'Camisa blanca personalizada', 
      imagen: '/imagenes/detalle3.jpg',
    },
    { id: 13, 
      tiendaNombre: 'PinkStudio',
      nombre: 'Combo pareja', 
      precio: '70.000', 
      descripcion: '2 camisas personalizadas', 
      imagen: '/imagenes/detalle4.jpg',
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
            tiendas={tiendas}
          />
        } />
        <Route path='/tienda/:id' element={
          <DetalleTienda 
            productosLibreria={productosLibreria}
            tiendas={tiendas}/>
        } />
        <Route path='/producto/:id' element={
          <DetalleProducto
            productosLibreria={productosLibreria}
            />
        } />
        
      </Routes>
    </Router>
  </>
  );
};

export default App;