import React from 'react'

function Product({ product }) {
    return (
        <div>
            <div>{product.ProductName}</div>
            <div>{product.ProductPicture}</div>
            <div>{product.ProductDescription}</div>
            <div>{product.ProductPrice}</div>
        </div>
    )
}

export default Product