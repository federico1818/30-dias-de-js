export function processShoppingList(list) {
    list.forEach(product => {
        if(product.name.includes('oferta')) {
            product.price *= 0.8
        }
        product.price *= product.quantity
        delete product.quantity
    })
    return list.reduce((sum, product) => {
        return sum + product.price
    }, 0)
}