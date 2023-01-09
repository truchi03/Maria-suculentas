import Card from 'react-bootstrap/Card';
import avena from '../assets/imagenes/emocional-1.jpg'
import hiperico from '../assets/imagenes/emocional-2.jpg'
import melisa from '../assets/imagenes/emocional-3.jpg'


  
 export function Productos() { 
    const products =  [
        {
          imagen: avena, 
          name:'avena', 
          gender: 'hembra',
          ref: 'PL001',
          size: '1,5 mts', 
          amount: 20,
          description: `,La avena es un excelente tónico del 
            sistema nervioso, mejora el nerviosismo, agotamiento y ansiedad, 
            y reduce el estré`
          },
          {
            imagen: hiperico, 
            name:'hiperico', 
            gender: 'macho',
            ref: 'PL002',
            size: '1,5 mts', 
            amount: 20,
            description: `,La avena es un excelente tónico del 
              sistema nervioso, mejora el nerviosismo, agotamiento y ansiedad, 
              y reduce el estré`
            },
            {
              imagen: melisa,
              name:'melisa', 
              gender: 'hembra',
              ref: 'PL003',
              size: '1,9 mts', 
              amount: 15,
              description: `,La avena es un excelente tónico del 
                sistema nervioso, mejora el nerviosismo, agotamiento y ansiedad, 
                y reduce el estré`
              }
          ]
  return (
    <div className='d-flex'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avena} />
      <Card.Body>
        <Card.Title>Avena</Card.Title>
        <Card.Text>
          <b>sexo</b> f
          <br /><b>Referencia</b> pl001
          <br /><b>Tamaño</b> 1,5 mts
          <br /><b>Cantidad</b> 20
          <br /><b>Descripciòn</b> La avena es un excelente tónico del 
            sistema nervioso, mejora el nerviosismo, agotamiento y ansiedad, 
            y reduce el estrés
        </Card.Text>
      </Card.Body>
    </Card>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hiperico} />
      <Card.Body>
        <Card.Title>Hiperico</Card.Title>
        <Card.Text>
          <b>sexo</b> M
          <br /><b>Referencia</b> pl002
          <br /><b>Tamaño</b> 3,0 mts
          <br /><b>Cantidad</b> 20
          <br /><b>Descripciòn</b> El hipérico alivia los síntomas de 
          la depresión leve o moderada y también es útil en casos de 
          trastorno de espectro autista, ansiedad o agotamiento.
        </Card.Text>
      </Card.Body>
    </Card>
     </div>
  );
}
