import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebase/config"
import { CartContext } from "../../../context/cartcontext"
import "./styles.css"

function ItemDetailContainer() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    const getProducto = async () => {
      try {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProducto({
            id: docSnap.id,
            ...docSnap.data()
          })
        } else {
          setProducto(null)
        }
      } catch (error) {
        console.error("Error cargando producto:", error)
        setProducto(null)
      } finally {
        setLoading(false)
      }
    }

    getProducto()
  }, [id])

  const parsePrecio = (precio) => {
    return Number(
      precio
        .toString()
        .replace("$", "")
        .replace(/\./g, "")
        .replace(",", ".")
    )
  }

  const formatPrecio = (precio) =>
    parsePrecio(precio).toLocaleString("es-CL")

  const sumar = () => setCantidad(cantidad + 1)

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  const handleAddToCart = () => {
    addToCart({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad
    })
  }

  if (loading) return <p>Cargando producto...</p>
  if (!producto) return <p>Producto no encontrado</p>

  return (
    <div className="item-detail">
      <div className="item-img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="item-info">

        <h1>{producto.nombre}</h1>


        <h2>${formatPrecio(producto.precio)}</h2>

        <p className="item-descripcion">
          {producto.detalle}
        </p>

        <h3 className="item-carrito-title">
          Agrega a tu carrito
        </h3>

        <div className="item-counter">
          <button onClick={restar}>-</button>
          <span>{cantidad}</span>
          <button onClick={sumar}>+</button>
        </div>

        <button
          className="btn-agregarcarrito"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemDetailContainer  