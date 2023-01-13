import { Carousel, Container } from 'react-bootstrap'
import logo from '../../assets/imgs/logo-text.gif'
import img1 from '../../assets/imgs/home-01.jpeg'
import img3 from '../../assets/imgs/home-03.jpeg'
import img4 from '../../assets/imgs/home-04.jpeg'
import img7 from '../../assets/imgs/home-07.jpeg'

export function Home() {
  const carouselItems = [
    {
      img: img1, 
      label: 'Aloe Vera', 
      alt: 'Imagen 1', 
      p: `La planta de aloe vera es conocida por sus propiedades curativas 
        para la piel y el cabello. Además de ser fácil de cuidar, esta planta 
        purifica el aire y crea un ambiente relajante en cualquier espacio.`
    },
    {
      img: img3, 
      label: 'Serenity Blossom', 
      alt: 'Imagen 3', 
      p: `La planta de Serenity Blossom es conocida por sus beneficios relajantes para 
      el sistema nervioso. Con su aroma suave y relajante, esta planta es 
      perfecta para el dormitorio o cualquier espacio de meditación.`
    },
    {
      img: img4, 
      label: 'Tranquil Petals', 
      alt: 'Imagen 4', 
      p: `La planta de Tranquil Petals es conocida por su aroma dulce y afrodisíaco. 
      Además de mejorar la calidad del aire, esta planta también ayuda a 
      mejorar el estado de ánimo y la concentración.`
    },
    {
      img: img7, 
      label: 'Harmony Leaves', 
      alt: 'Imagen 7', 
      p: `La planta de Harmony Leaves es conocida por su capacidad para sobrevivir en 
        condiciones extremas. Además de ser resistente y fácil de cuidar, esta 
        planta también ayuda a purificar el aire y crea un ambiente positivo 
        en cualquier espacio.`
    },
  ]
  return (
    <div id="home">
      <Container className='mb-4'>
        <img src={logo} alt="Logo" id="home-logo" className='mt-4 mb-4' />
        <p className='description'>
          Bienvenido a María Suculentas SAS, una empresa líder en el cultivo y 
          distribución de plantas de 'apoyo emocional'. Con más de 10 años de 
          experiencia en el mercado, hemos desarrollado una amplia variedad de 
          plantas que no solo son hermosas sino que también tienen propiedades 
          curativas para el cuerpo y la mente. Nuestro equipo de expertos se 
          esfuerza por ofrecerle las mejores plantas y servicios para mejorar 
          su calidad de vida. Visítenos hoy y experimente los beneficios de 
          tener una planta de 'apoyo emocional' en su hogar o lugar de trabajo.
        </p>
        <Carousel>
          {
            carouselItems.map((item, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={item.img}
                    alt={item.alt}
                  />
                  <Carousel.Caption>
                    <h3>{item.label}</h3>
                    <p>{item.p}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </Container>
    </div>
  )
}