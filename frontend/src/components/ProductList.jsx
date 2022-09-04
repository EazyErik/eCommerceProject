import React, { useEffect } from 'react'
import Product from './Product'


function ProductList({ products }) {

    return (
        <div className="row">

            {products.map((product, index) => {
                return (
                    <Product product={product} key={index} />
                )
            })}
        </div>
    )
}

export default ProductList