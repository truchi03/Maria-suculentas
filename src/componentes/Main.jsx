
import { Formulario } from "./Formulario"
import { Productos } from "./Productos" 

export function Main(props) {
    const page = props.page

    if(page === 'productos') {
        return <Productos/>
    } else if (page=== 'clientes')  {
        return <h2>clientes</h2>
    } else if (page=== 'proveedores')  {
        return <h2>proveedores</h2>
    } else {
        return <h2>Inicio</h2>
    }
}
