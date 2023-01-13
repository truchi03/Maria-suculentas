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
import clientPic from './assets/imgs/client.gif'
import providerPic from './assets/imgs/provider.gif'

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

  const clients = [
    {
      image: clientPic,
      name: 'Michael Jackson', 
      document: '36787665341', 
      email: 'mjackson@gmail.com', 
      address: 'Cl 35 # 56 - 89', 
      neighborhood: 'Boston', 
      contactPhone: '3123678908'
    },
    {
      image: clientPic,
      name: 'John Bon Jovi', 
      document: '3235346754', 
      email: 'jbonjovi@gmail.com', 
      address: 'Cra 26 # 47 - 15', 
      neighborhood: 'La América', 
      contactPhone: '3128744567'
    },
    {
      image: clientPic,
      name: 'Alejandra Guzman', 
      document: '3235346754', 
      email: 'aguzman@hotmail.com', 
      address: 'Trasv 76 # 58 - 15', 
      neighborhood: 'Belén', 
      contactPhone: '3120982354'
    },
    {
      image: clientPic,
      name: 'Sala Corrales', 
      document: '3232309408', 
      email: 'scorrales@gmail.com', 
      address: 'Av 46 # 97 - 23', 
      neighborhood: 'La Candelaria', 
      contactPhone: '3129877655'
    },
  ]

  const providers = [
    {
      image: providerPic,
      name: 'ACME', 
      nit: '444567656-5', 
      address: 'Cl 26 # 75 - 35', 
      phone: '4565656', 
      email: 'acme@yopmail.com', 
      product: 'Avena', 
      companyDescription: 'Descripción de la empresa',
      productDescription: 'Descripción del producto'
    },
    {
      image: providerPic,
      name: 'STARK INDUSTRIES', 
      nit: '4563498996-4', 
      address: 'Cl 60 # 115 - 55', 
      phone: '54656756', 
      email: 'starkind@yopmail.com', 
      product: 'Melisa', 
      companyDescription: 'Descripción de la empresa',
      productDescription: 'Descripción del producto'
    },
    {
      image: providerPic,
      name: 'Proveedor 3', 
      nit: '4563498996-4', 
      address: 'Cl 60 # 115 - 55', 
      phone: '54656756', 
      email: 'starkind@yopmail.com', 
      product: 'Melisa', 
      companyDescription: 'Descripción de la empresa',
      productDescription: 'Descripción del producto'
    },
    {
      image: providerPic,
      name: 'Proveedor 4', 
      nit: '4563498996-4', 
      address: 'Cl 60 # 115 - 55', 
      phone: '54656756', 
      email: 'starkind@yopmail.com', 
      product: 'Melisa', 
      companyDescription: 'Descripción de la empresa',
      productDescription: 'Descripción del producto'
    },
  ]

  useEffect(() => {
    if(!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products))
    }
    if(!localStorage.getItem('clients')) {
      localStorage.setItem('clients', JSON.stringify(clients))
    }
    if(!localStorage.getItem('providers')) {
      localStorage.setItem('providers', JSON.stringify(providers))
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
