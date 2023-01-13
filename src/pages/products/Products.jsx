import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { ModalMS } from '../../components/ModalMS'
import defaultImg from '../../assets/imgs/default.gif'
import { useState } from 'react'

export function Products() {
  const productsLS = JSON.parse(localStorage.getItem('products'))
  const [products, setProducts] = useState(productsLS)

  const inputs = [
    {name: 'name', type: 'text', label: 'Nombre'},
    {name: 'gender', type: 'text', label: 'Sexo'},
    {name: 'ref', type: 'text', label: 'Referencia'},
    {name: 'size', type: 'text', label: 'Tamaño'},
    {name: 'amount', type: 'number', label: 'Cantidad'},
    {name: 'description', type: 'text', label: 'Descripción'},
  ]

  const saveProduct = () => {
    const productsTemp = [...products]
    const newProduct = {}
    inputs.forEach(inp => {
      newProduct[inp.name] = document.getElementById(inp.name).value
    })
    productsTemp.push({...newProduct, image: defaultImg})
    localStorage.setItem('products', JSON.stringify(productsTemp))
    setProducts(productsTemp)
  }

  return (
    <div>
      <h2 className='text-center'>Productos</h2>

      <ModalMS 
        heading={'Agregar producto'}
        btnText={'Agregar producto'}
        inputs={inputs}
        btn1Text={'Cancelar'}
        btn2Text={'Guardar'}
        btn2Method={saveProduct}
      />

      <Container>
        <Row>
          {
            products.map((plant, i) => {
              return <Col key={i} className='mb-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={plant.image} />
                  <Card.Body>
                    <Card.Title>{plant.name}</Card.Title>
                    <Card.Text>
                      <b>Sexo:</b> {plant.gender}
                      <br/><b>Referencia: </b> {plant.ref}
                      <br/><b>Tamaño: </b> {plant.size}
                      <br/><b>Cantidad: </b> {plant.amount}
                      <br/><b>Descripción: </b> {plant.description}
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