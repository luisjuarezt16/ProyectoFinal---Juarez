import "./styles.css";
import CartWidget from "../common/cartwidget"
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <h4>FORKLIFT SERVICES</h4>

      <ul>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products">Productos</NavLink>   
        <NavLink to="/contact" >Contact</NavLink>

      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar