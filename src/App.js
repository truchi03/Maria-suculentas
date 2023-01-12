import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Main } from './pages/main/Main'
import './App.css'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import avena from './assets/imgs/avena.jpg'
import hiperico from './assets/imgs/hiperico.jpg'
import melisa from './assets/imgs/melisa.jpg'
import lavanda from './assets/imgs/lavanda.jpg'

function App() {
  const [page, setPage] = useState('inicio')

  const products = [
    {
      image: avena,
      name: 'Avena', 
      gender: 'Hembra', 
      ref: 'PL001', 
      size: '1,5 mts', 
      amount: 20, 
      description: `La avena es un excelente tónico del sistema nervioso, 
        mejora el nerviosismo, agotamiento y ansiedad, y reduce el estrés.`
    },
    {
      image: hiperico,
      name: 'Hipérico', 
      gender: 'Macho', 
      ref: 'PL002', 
      size: '1 mt', 
      amount: 20, 
      description: `El hipérico alivia los síntomas de la depresión leve o 
        moderada y también es útil en casos de trastorno de espectro autista, 
        ansiedad o agotamiento. Tomar en infusión, tintura o cápsulas.`
    },
    {
      image: melisa,
      name: 'Melisa', 
      gender: 'Hembra', 
      ref: 'PL003', 
      size: '1,6 mts', 
      amount: 15, 
      description: `Antidepresiva, estimulante y calmante, la melisa levanta 
        el ánimo y calma la ansiedad, el nerviosismo y los ataques de pánico.`
    },
    {
      image: lavanda,
      name: 'Lavanda', 
      gender: 'Hembra', 
      ref: 'PL004', 
      size: '0,9 mts', 
      amount: 12, 
      description: `Con sus propiedades calmantes y sedantes, la lavanda es 
        apropiada para el tratamiento de la angustia, estrés e impresiones 
        fuertes.`
    }
  ]

  useEffect(() => {
    if(!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products))
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
