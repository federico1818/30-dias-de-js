export function groupProducts(products, category) {
    const group = products.filter(product => product.category === category)

    return {
        products: group.map(p => p.name).join(', '),
        totalPrice: group.reduce((sum, product) => {
            return sum + product.price
        }, 0)
    }
}