import { Container } from 'react-bootstrap'
import logo from '../../assets/imgs/logo-text.png'

export function Home() {
  return (
    <div id="home">
      <Container>
Validaciones forms
      <img src={logo} alt="Logo" id="home-logo" />
        <p>
          <b>1. Empresa Maria Suculentas</b><br/><br/>
          a. La empresa María Suculentas SAS es una empresa que se
          encarga del cultivo y distribución de plantas de “apoyo
          emocional”<br/><br/>
          b. Esta empresa desea crear una aplicación web que le
          permita llevar un control de las diferentes plantas que
          cultiva, un registro de todos los clientes que compran y
          un control de todos los proveedores a los cuales les
          compra las semillas<br/><br/>
          c. De los productos es necesario almacenar datos como:
          nombre, sexo (macho o hembra), referencia, tamaño,
          cantidad y una leve descripción de esta misma<br/><br/>
          d. De los clientes es necesario almacenar datos como:
          nombre, documento, correo, dirección, barrio, teléfono
          de contacto<br/><br/>
          e. De los proveedores es necesario almacenar el nombre,
          nit, dirección, teléfono, correo, nombre del producto
          que compra, y una descripción de la empresa y del
          producto<br/><br/>
          <br/><br/>
          Consideraciones<br/><br/>
          1. Dar solución gráfica a la problemática (maquetación en react)<br/><br/>
          2. Se debe definir la construcción por componentes<br/><br/>
          3. Debe tener un componente Header (debe ir todo el contenido
          del encabezado), debe tener un componente Main (debe
          almacenar todo el contenido principal) y debe tener un
          componente Footer (debe tener información de contacto y redes
          sociales)<br/><br/>
          4. Se debe construir el proyecto haciendo uso de CSS y Bootstrap
          (se debe usar las dos herramientas, no solamente una de
          ellas)<br/><br/>
          5. Definir una paleta de colores, la cual debe estar enfocada en
          los productos de la empresa<br/><br/>
          6. Todo el contenido debe ir en tipografía JetBrains en
          cualquiera que sus versiones o familias<br/><br/>
          7. Se debe incluir contenido gráfico (imágenes, logo, etc.)<br/><br/>
          8. El quiz se hará en parejas y deben usar las herramientas de
          git necesarias (merge, ramas, pull, et.)
        </p>
      </Container>
    </div>
  )
}