import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { ModalMS } from '../../components/ModalMS'
import defaultImg from '../../assets/imgs/default.gif'
import { useState } from 'react'

export function Clients() {
  const clientsLS = JSON.parse(localStorage.getItem('clients'))
  const [clients, setClients] = useState(clientsLS)

  const inputs = [
    {name: 'name', type: 'text', label: 'Nombre'},
    {name: 'document', type: 'text', label: 'Documento'},
    {name: 'email', type: 'email', label: 'Correo'},
    {name: 'address', type: 'text', label: 'Dirección'},
    {name: 'neighborhood', type: 'text', label: 'Barrio'},
    {name: 'contactPhone', type: 'text', label: 'Teléfono de contacto'},
  ]

  const saveClient = () => {
    const clientsTemp = [...clients]
    const newClient = {}
    inputs.forEach(inp => {
      newClient[inp.name] = document.getElementById(inp.name).value
    })
    clientsTemp.push({...newClient, image: defaultImg})
    localStorage.setItem('clients', JSON.stringify(clientsTemp))
    setClients(clientsTemp)
  }

  return (
    <div>
      <h2 className='text-center'>Clientes</h2>

      <ModalMS 
        heading={'Agregar cliente'}
        btnText={'Agregar cliente'}
        inputs={inputs}
        btn1Text={'Cancelar'}
        btn2Text={'Guardar'}
        btn2Method={saveClient}
      />

      <Container>
        <Row>
          {
            clients.map((client, i) => {
              return <Col key={i}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={client.image} />
                  <Card.Body>
                    <Card.Title>{client.name}</Card.Title>
                    <Card.Text>
                      <b>Document:</b> {client.document}
                      <br/><b>Correo: </b> {client.email}
                      <br/><b>Dirección: </b> {client.address}
                      <br/><b>Barrio: </b> {client.neighborhood}
                      <br/><b>Teléfono de contacto: </b> {client.contactPhone}
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