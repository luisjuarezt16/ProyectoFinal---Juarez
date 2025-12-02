import "./styles.css";
import { useState } from "react"
import { Link } from "react-router-dom"

function Cards({ id, imagen, nombre, precio }) {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => setCantidad(cantidad + 1);
  const restar = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  return (
    <div className="Cards">
      <img src={imagen}/>
      <h3>{nombre}</h3>
      <p>{precio}</p>

      <div>
        <button onClick={restar}>-</button>
        <input type="text" value={cantidad} readOnly />
        <button onClick={sumar}>+</button>
      </div>

      <Link to={`/product/${id}`}>
        <button className="btn-detalle">Ver Detalle</button>
      </Link>
    </div>
  );
}

export default Cards