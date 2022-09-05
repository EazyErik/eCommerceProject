import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css' 

function Product({ product }) {

    const nav = useNavigate();

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 product-card" >
            <div>{product.ProductName}</div>
            <div>
                <img onClick={()=> nav('productDetails=' + product.ProductId)} className='product-photo' src={product.ProductPicture} alt='ProductPicture' /></div>
            <div>{product.ProductDescription}</div>
            <div>{product.ProductPrice}</div>
        </div>  
    )
}

export default Product