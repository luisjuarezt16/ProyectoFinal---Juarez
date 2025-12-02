import "./styles.css"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-texto">
          <h1>Contáctanos</h1>
          <p>
            Estamos aquí para ayudarte con repuestos, mantenimiento, asesoría técnica o 
            cualquier consulta relacionada con equipos para montacargas.
          </p>

          <p>
            Puedes comunicarte con nosotros para solicitar cotizaciones, coordinar servicios 
            de mantenimiento, resolver dudas técnicas o recibir apoyo especializado para tu empresa.
          </p>

          <p>
            Nuestro equipo responderá a la brevedad para brindarte soluciones eficientes y
            confiables.
          </p>

          <Link to="/products">
            <button className="btn-home">Ver Productos</button>
          </Link>
        </div>

        <div className="home-imagen">
          <img src="https://via.placeholder.com/600x400" alt="Contacto" />
        </div>
      </div>

      <div className="home-container">
        <div className="home-texto">
          <h1>Información de contacto</h1>
          <p>
            Teléfono: +56 9 59888321
          </p>
          <p>
            Email: contacto@forkliftservices.cl
          </p>
          <p>
            Dirección: Av. el Parrón 0216, Santiago, Chile
          </p>

          <Link to="/contact">
            <button className="btn-home">Solicitar Atención</button>
          </Link>
        </div>

        <div className="home-imagen">
          <img src="https://via.placeholder.com/650x420" alt="Servicio" />
        </div>
      </div>
    </>
  )
}

export default Contact