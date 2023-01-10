import { Home } from "../home/Home"

import { Productos } from "../products/Productos" 

export function Main(props) {
    const page = props.page

    return(
        <div id="main">
            {
                page === 'productos' ?
                     <Productos/> :
                 page === 'clientes' ?
                     <h2>clientes</h2> :
                  page === 'proveedores'?
                     <h2>proveedores</h2>:
                 <Home/>   
            }
        </div>
    )
}
