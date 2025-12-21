import { createContext, useState } from "react"

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id)

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + product.cantidad }
            : item
        )
      }

      return [...prev, product]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider