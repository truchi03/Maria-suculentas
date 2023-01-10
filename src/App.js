
import{ useEffect, useState} from 'react'
import { Header } from './componentes/Header';
import './App.css';
import { Main } from './pages/main/Main';
import { Footer } from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import avena from './assets/imagenes/emocional-1.jpg'
import hiperico from './assets/imagenes/emocional-2.jpg'
import melisa from './assets/imagenes/emocional-3.jpg'
import lavanda from './assets/imagenes/images.jpg-suculentas-3.jpg'

function App() {
      const [page, setPage] = useState('inicio')
      
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
            },
            {
              imagen: lavanda,
              name:'lavanda', 
              gender: 'hembra',
              ref: 'PL004',
              size: '1,9 mts', 
              amount: 17,
              description: `,La avena es un excelente tónico del 
                sistema nervioso, mejora el nerviosismo, agotamiento y ansiedad, 
                y reduce el estré`
              }
        ]
      useEffect(() => {
        if(!localStorage.getItem('products')) {
          localStorage.setItem('products', JSON.stringify (products)) 
        }
        
      })
  return (
    <div>
      <Header setPage={setPage}/>
      <Main page={page}/>
      <Footer/>
    </div>
  );
}


export default App;
