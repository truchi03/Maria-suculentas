import { Home } from '../home/Home'
import { Products } from '../products/Products'

export function Main(props) {
  const page = props.page

  return (
    <div id="main">
      {
        page === 'productos' ?
        <Products/> :
        page === 'clientes' ?
        <h2>Clientes</h2> :
        page === 'proveedores' ?
        <h2>Proveedores</h2> :
        <Home/>
      }
    </div>
  )
}