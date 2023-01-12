import { Home } from '../home/Home'
import { Products } from '../products/Products'
import { Clients } from '../clients/Clients'

export function Main(props) {
  const page = props.page

  return (
    <div id="main">
      {
        page === 'productos' ?
        <Products/> :
        page === 'clientes' ?
        <Clients/> :
        page === 'proveedores' ?
        <h2>Proveedores</h2> :
        <Home/>
      }
    </div>
  )
}