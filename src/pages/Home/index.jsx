import "./styles.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-texto">
          <h1>Bienvenido a Forklift Services</h1>
          <p>
            Somos una empresa especializada en repuestos, mantenimiento y arriendo 
            de equipos para montacargas, con años de experiencia en el sector 
            industrial y logístico. Trabajamos con repuestos de la más alta calidad, 
            asegurando el óptimo funcionamiento de tus equipos para maximizar su 
            rendimiento y prolongar su vida útil. Nuestro catálogo está en constante 
            actualización para ofrecerte siempre lo mejor del mercado.
          </p>
          <p>
            Ya sea que necesites piezas específicas, asesoría técnica o un servicio 
            completo de mantenimiento, nuestro equipo está preparado para brindarte 
            soluciones rápidas, eficientes y adaptadas a las necesidades de tu empresa. 
            Tu productividad es nuestra prioridad.
          </p>

          <Link to="/products">
            <button className="btn-home">Ver Productos</button>
          </Link>
        </div>

        <div className="home-imagen">
          <img src="https://via.placeholder.com/600x400" alt="Forklift" />
        </div>
      </div>

      <div className="home-container">
        <div className="home-texto">
          <h1>Mantenimiento Profesional</h1>
          <p>
            Ofrecemos servicios de mantención preventiva y correctiva para 
            montacargas de todas las marcas, realizados por técnicos certificados 
            con amplia experiencia en diagnóstico y reparación. Nuestro enfoque 
            está en garantizar seguridad operativa, reducir tiempos de detención 
            y asegurar que tu maquinaria se mantenga funcionando en condiciones 
            óptimas.
          </p>
          <p>
            Además, proporcionamos informes detallados de cada intervención, 
            recomendaciones de uso y planes personalizados de mantenimiento para 
            evitar fallas futuras. Contar con nosotros es sinónimo de respaldo, 
            compromiso y resultados confiables para tu operación.
          </p>

          <Link to="/contact">
            <button className="btn-home">Ir a Contacto</button>
          </Link>
        </div>

        <div className="home-imagen">
          <img src="https://via.placeholder.com/650x420" alt="Mantenimiento" />
        </div>
      </div>
    </>
  )
}

export default Home