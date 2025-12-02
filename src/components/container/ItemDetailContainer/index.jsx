import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css"; // 🔥 AGREGA ESTO

function ItemDetailContainer() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((prod) => String(prod.id) === String(id));
        setProducto(item);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <img src={producto.imagen}/>
      <h1>{producto.nombre}</h1>
      <h2>Precio: {producto.precio}</h2>
      <h3>Detalles del producto:</h3>
      <h5>{producto.detalle}</h5>
    </div>
  );
}

export default ItemDetailContainer