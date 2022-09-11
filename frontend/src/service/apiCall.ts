import axios from "axios"

export function getAllProducts() {

    return axios.get('/products')
    .then(response => response.data)
}