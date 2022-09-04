import React from 'react'
import './Product.css' 

function Product({ product }) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 product-card" >
            <div>{product.ProductName}</div>
            <div>
                <img className='product-photo' src={product.ProductPicture} alt='ProductPicture' /></div>
            <div>{product.ProductDescription}</div>
            <div>{product.ProductPrice}</div>
        </div>
    )
}

export default Product