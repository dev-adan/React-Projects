import React from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {
       const {productId} = useParams();
  return (
    <div>
        <h3>{productId}</h3>
        <h1>SingleProduct</h1>
      
    </div>
  )
}

export default SingleProduct