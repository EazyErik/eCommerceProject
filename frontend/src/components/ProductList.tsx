
import { ProductModel } from '../model/ProductModel'
import Product from './Product'

interface ProductProps {
    products: ProductModel[]
}



function ProductList({products} : ProductProps){
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