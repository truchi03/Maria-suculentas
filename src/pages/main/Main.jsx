import { Home } from '../home/Home'
import { Products } from '../products/Products'
import { Clients } from '../clients/Clients'
import { Providers } from '../providers/Providers'

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
        <Providers/> :
        <Home/>
      }
    </div>
  )
}