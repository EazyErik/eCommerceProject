import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductModel } from '../model/ProductModel';
import './Product.css' 

interface ProductProps{
    product: ProductModel
}



function Product({product} : ProductProps) {

    const nav = useNavigate();

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 product-card" >
             <div>{product.productName}</div>
            <div>
                <img onClick={()=> nav('productDetails=' + product.productId)} className='product-photo' src={product.productPicture} alt='ProductPicture' /></div>
            <div>{product.productDescription}</div>
            <div>{product.productPrice}</div> 
        </div>  
    )
}

export default Product