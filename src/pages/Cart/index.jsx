import "./styles.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartcontext"

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const parsePrecio = (precio) => {
    return Number(
      precio
        .toString()
        .replace("$", "")
        .replace(/\./g, "")
        .replace(",", ".")
    )
  }

  const formatPrice = (number) =>
    new Intl.NumberFormat("es-CL").format(number)

  const total = cart.reduce(
    (acc, item) => acc + parsePrecio(item.precio) * item.cantidad,
    0
  )

  const handlePagar = () => {
    alert("✅ Pago realizado con éxito. ¡Gracias por tu compra!")
  }

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>

      {cart.length === 0 ? (
        <p className="cart-vacio">El carrito está vacío</p>
      ) : (
        <>
          {cart.map(item => {
            const precioUnitario = parsePrecio(item.precio)
            const subtotal = precioUnitario * item.cantidad

            return (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="cart-img"
                />

                <div className="cart-info">
                  <h3>{item.nombre}</h3>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio unitario: ${formatPrice(precioUnitario)}</p>
                  <p>Subtotal: ${formatPrice(subtotal)}</p>

                  <button
                    className="btn-eliminar"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )
          })}

          <div className="cart-total">
            <h2>Total: ${formatPrice(total)}</h2>
            <button className="btn-pagar" onClick={handlePagar}>
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart