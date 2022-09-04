
import React from 'react'
import Products from './Products.json'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <div>
      <ProductList products={Products}/>
    </div>
  )
}

export default Home