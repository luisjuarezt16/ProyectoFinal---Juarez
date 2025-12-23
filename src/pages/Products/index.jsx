import './styles.css'
import { useEffect, useState } from 'react'
import Cards from '../../components/container/Cards'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config.js"

const Products = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"))

        const productosFirebase = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setProductos(productosFirebase)
      } catch (error) {
        console.error("Error cargando productos:", error)
      } finally {
        setLoading(false)
      }
    }

    getProductos()
  }, [])

  return (
    <>
      <h1>PRODUCTOS DISPONIBLES</h1>

      <div className="contenedor-cards">
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          productos.map(producto => (
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
  )
}

export default Products