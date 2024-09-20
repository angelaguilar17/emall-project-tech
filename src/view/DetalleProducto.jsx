import { useParams } from 'react-router-dom';

const DetalleProducto = ({ productosLibreria }) => {

    const { id } = useParams(); 
    const productoSeleccionado = productosLibreria.find(producto => producto.id === parseInt(id));

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