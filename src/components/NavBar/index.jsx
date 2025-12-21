import "./styles.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h4>FORKLIFT SERVICES</h4>

      <ul>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products">Productos</NavLink>   
        <NavLink to="/contact" >Contact</NavLink>

      </ul>

      <NavLink to= "/cart">Tu Carrito</NavLink>
    </nav>
  )
}

export default Navbar