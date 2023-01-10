import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ModalMS } from '../../componentes/ModalMS';
import defaultImg from '../../assets/imagenes/emocional-1.jpg';
import { useState } from 'react';

 export function Productos() {

    const productsLS = JSON.parse (localStorage.getItem('products'))
    const [products,setProducts] =useState(productsLS)
    

     const inputs =  [
      {name: 'name', type: 'text',label: 'Nombre'},
      {name: 'gender', type: 'text',label: 'Sexo'},
      {name: 'ref', type: 'text',label: 'Referencia'},
      {name: 'size', type: 'text',label: 'Tamaño'},
      {name: 'amount', type: 'number',label: 'Cantidad'},
      {name: 'description', type: 'text',label: 'Descripción'},
    ]

    const saveProduct = () => {
      const productsTemp = [...products]
      const newProduct = {}
       inputs.forEach(inp => {
        newProduct[inp.name] = document.getElementById(inp.name).value 
      })
      productsTemp.push({...newProduct,imagen: defaultImg})
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
        btn1text={'Cancelar'}
        btn2text={'Guardar'}
        btn2Method={saveProduct}
      />

      <Container>
        <Row>
         
          {
            products.map((planta, i) => {
              return <Col key={i}>
               <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={planta.imagen} />
                <Card.Body>
                  <Card.Title>{planta.name}</Card.Title>
                  <Card.Text>
                    <b>sexo</b> {planta.gender}
                    <br /><b>Referencia</b> {planta.ref}
                    <br /><b>Tamaño</b> {planta.size}
                    <br /><b>Cantidad</b> {planta.amount}
                    <br /><b>Descripciòn</b> {planta.description}.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            }) 
          } 
        </Row>
      </Container>
     </div>
  );
}
