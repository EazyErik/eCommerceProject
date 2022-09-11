import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailsMockData from './ProductDetailsMockData.json'
import './ProductDetails.css'
import { getProductById } from '../service/apiCall';
import { ProductModel } from '../model/ProductModel';

function ProductDetails() {

  const { productId } = useParams();
  const [product, setProduct] = useState<ProductModel>()

  useEffect(()=> {
    console.log(productId)
    getProductById(productId)
  .then((data)=> {setProduct(data)
  console.log(data)})

  },[])
    
  return (
    <div>
      {product &&
      <div>
      <div>{product.productName}</div>
      <div>
        <img className='product-details-photo' src={product.productPicture} alt='ProductPicture' /></div>
      <div>{product.productDescription}</div>
      <div>{product.productPrice}</div>
      <button>add to shopping cart</button>
      </div>
      }
    </div>
  )
}

export default ProductDetails