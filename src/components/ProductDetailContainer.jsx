import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'

const ProductDetailContainer = () => {

    
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }, [])
    const params = useParams()
  return (
    <><ProductDetail product={product} /></>
  )
}

export default ProductDetailContainer