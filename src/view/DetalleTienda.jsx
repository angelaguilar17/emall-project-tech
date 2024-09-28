/**Este componente contiene la estructura e información de la página para cada tienda */

import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard'
import { useParams } from 'react-router-dom';

const DetalleTienda = ({ productosLibreria, tiendas }) => {
    const { id } = useParams();  // Captura el ID de la URL
    const tiendaSeleccionada = tiendas.find(tienda => tienda.id === parseInt(id)); 

    if (!tiendaSeleccionada) {
        return <h1>No se encontró la tienda</h1>; 
    }

    const mapaTiendas = {
        0: 'LibreriaEntreHojas',
        1: 'JoyeriaPolaris',
        2: 'PinkStudio',
    };

    const productosDeTienda = productosLibreria.filter(
        producto => producto.tiendaNombre === mapaTiendas[id]
    );

    return (
        <div className='container'>
            <div className='title-container'>
                <img
                    src={tiendaSeleccionada.imagen} 
                    alt="Logo Librería"
                    className="logo-store"
                />
                <h1>{tiendaSeleccionada.nombre}</h1> 
                
                <p>{tiendaSeleccionada.info}</p> 

            </div>
            <div className="productos-grid">
                {productosDeTienda.length > 0 ? (
                    productosDeTienda.map(producto => (
                        <ProductCard
                            key={producto.id}
                            producto={producto} 
                        />
                    ))
                ) : (
                    <p>No hay productos para esta tienda.</p>
                )}
            </div>
        </div>
    );
}

export default DetalleTienda;