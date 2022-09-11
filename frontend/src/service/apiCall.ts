import axios from "axios"

export function getAllProducts() {

    return axios.get('/products')
    .then(response => response.data)
}

export function getProductById(productId:string | undefined) {
    return axios.get(`/products/${productId}`)
    .then(response => response.data)
}