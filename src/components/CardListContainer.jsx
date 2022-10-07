import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CardList from './CardList'

const CardListContainer = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json))
    }, [])
    
  return (
    <CardList data={data} />
  )
}

export default CardListContainer