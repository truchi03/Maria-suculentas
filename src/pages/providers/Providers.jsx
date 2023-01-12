import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { ModalMS } from '../../components/ModalMS'
import defaultImg from '../../assets/imgs/default.gif'
import { useState } from 'react'

export function Providers() {
  const providersLS = JSON.parse(localStorage.getItem('providers'))
  const [providers, setProveedores] = useState(providersLS)

  const inputs = [
    {name: 'name', type: 'text', label: 'Nombre'},
    {name: 'nit', type: 'text', label: 'Nit'},
    {name: 'address', type: 'text', label: 'Dirección'},
    {name: 'phone', type: 'text', label: 'Teléfono'},
    {name: 'email', type: 'email', label: 'Correo'},
    {name: 'product', type: 'text', label: 'Producto que vende'},
    {name: 'companyDescription', type: 'text', label: 'Descripción empresa'},
    {name: 'productDescription', type: 'text', label: 'Descripción producto'},
  ]

  const saveProvider = () => {
    const providersTemp = [...providers]
    const newProvider = {}
    inputs.forEach(inp => {
      newProvider[inp.name] = document.getElementById(inp.name).value
    })
    providersTemp.push({...newProvider, image: defaultImg})
    localStorage.setItem('providers', JSON.stringify(providersTemp))
    setProveedores(providersTemp)
  }

  return (
    <div>
      <h2 className='text-center'>Proveedores</h2>

      <ModalMS 
        heading={'Agregar proveedor'}
        btnText={'Agregar proveedor'}
        inputs={inputs}
        btn1Text={'Cancelar'}
        btn2Text={'Guardar'}
        btn2Method={saveProvider}
      />
      <Container>
        <Row>
          {
            providers.map((prov, i) => {
              return <Col key={i}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={prov.image} />
                  <Card.Body>
                    <Card.Title>{prov.name}</Card.Title>
                    <Card.Text>
                      <b>Nit:</b> {prov.nit}
                      <br/><b>Dirección: </b> {prov.address}
                      <br/><b>Teléfono: </b> {prov.phone}
                      <br/><b>Correo: </b> {prov.email}
                      <br/><b>Barrio: </b> {prov.product}
                      <br/><b>Descripción empresa: </b> {prov.companyDescription}
                      <br/><b>Descripción producto: </b> {prov.productDescription}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            })
          }
        </Row>
      </Container>
    </div>
  )
}