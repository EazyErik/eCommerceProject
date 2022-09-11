
import React, { useEffect, useState } from 'react'
import Products from './Products.json'
import ProductList from '../components/ProductList'
import { getAllProducts } from '../service/apiCall'
import { ProductModel } from '../model/ProductModel'




function Home() {

  const [products,setProducts] = useState<ProductModel[]>()

useEffect(()=>{

  getAllProducts()
  .then((data)=> setProducts(data))

},[])

  return (
    <div>
      {products &&
      <ProductList products={products} />}
    </div>
  )
}

export default Home