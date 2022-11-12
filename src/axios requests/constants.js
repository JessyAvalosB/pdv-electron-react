const baseURL = 'http://localhost:3002'
const productsURL = `${baseURL}/products`

export const apiProducts = {
    getAllProducts: productsURL,
    createProduct: `${productsURL}/add`,
    updateProduct: `${productsURL}/edit`,
    deleteProduct: `${productsURL}/delete`
}