import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailsMockData from './ProductDetailsMockData.json'
import './ProductDetails.css'

function ProductDetails() {

  const { productId } = useParams();

  return (
    <div>
      <div>{ProductDetailsMockData.ProductName}</div>
      <div>
        <img className='product-details-photo' src={ProductDetailsMockData.ProductPicture} alt='ProductPicture' /></div>
      <div>{ProductDetailsMockData.ProductDescription}</div>
      <div>{ProductDetailsMockData.ProductPrice}</div>
      <button>add to shopping cart</button>
    </div>
  )
}

export default ProductDetails