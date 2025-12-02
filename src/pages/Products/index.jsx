import './styles.css'
import { useState, useEffect } from 'react'
import Cards from '../../components/container/Cards'


const Products = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch('/data/products.json') 
        .then((res) => {
          if (!res.ok) throw new Error('Error al cargar productos');
          return res.json();
        })
        .then((data) => {
          setProductos(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 2500)
  }, [])

  return (
    <>
      <div>
        <h1>PRODUCTOS DISPONIBLES</h1>
      </div>
      <div className='contenedor-cards'>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          productos.map((producto) => (
            <Cards
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Products