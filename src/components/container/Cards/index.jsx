import "./styles.css"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/cartcontext.jsx"

function Cards({ id, imagen, nombre, precio }) {
  const [cantidad, setCantidad] = useState(1)
  const { addToCart } = useContext(CartContext)

  const sumar = () => setCantidad(cantidad + 1)

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  const handleAddToCart = () => {
    addToCart({
      id,
      nombre,
      precio,
      imagen,
      cantidad
    })
  }

  return (
    <div className="Cards">
      <img src={imagen} alt={nombre} />
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

      <button 
        className="btn-agregarcarrito"
        onClick={handleAddToCart}
      >
        Agregar a carrito
      </button>
    </div>
  )
}

export default Cards