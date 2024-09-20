import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard'


const DetalleTienda = ({ productosLibreria, tiendas }) => {


    return (
        <div className="container">
            <div>
                 <div>
                    <h1>HOLA</h1>
                    <p>{tiendas[0].nombre}</p>
                </div>  

            </div>

            <div className="productos-grid">
                {productosLibreria.map(producto => (
                    <ProductCard
                        key={producto.id}
                        producto={producto} 
                    />
                ))}
            </div>  
        </div>
    );
};

export default DetalleTienda;