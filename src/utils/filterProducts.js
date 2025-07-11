import { products } from "../assets/products.js"

const filteredProducts = (type, prop) => {
    return products.filter((elem) => (
        elem[prop] === `${type}`
    ))
}

export default filteredProducts