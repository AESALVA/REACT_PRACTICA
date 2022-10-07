import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home = () => {

  const [contador, setContador] = useState(1);

  const sumar = ()=>{
    setContador(contador + 1);
  }
    const restar = ()=>{
      contador>1 && setContador(contador - 1);
    }
  

  return (
    <div>
    <Header />
    <Landing contador={contador} sumar={sumar} restar={restar} />
 

    <Footer />
    </div>
  )
}

export default Home