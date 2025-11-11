
import "./styles.css"
import {useState} from "react"

function Cards ({imagen, nombre, precio}) {

    const [cantidad, setCantidad] = useState(0)

    const sumar = () => setCantidad(cantidad + 1)

    const restar = () => {
        if (cantidad > 0) {
        setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="Cards">
            <img src={"https://via.placeholder.com/150"} />
            <h3>{nombre}</h3>
            <p>{precio}</p>

            <div>
                <button onClick={restar}>-</button>
                <input type="text" value={cantidad}defaultValue="0" />
                <button onClick={sumar}>+</button>
            </div>

            <button>Agregar producto</button>

        </div>

    )
    
}


export default Cards