export function sortByAvailabilityAndPrice(products) {
    return [...products].sort((a, b) => {
        return b.inStock - a.inStock === 0?
            a.price - b.price:
            b.inStock - a.inStock
    })
}