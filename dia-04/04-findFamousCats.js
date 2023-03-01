export function findFamousCats(cats) {

    cats = cats.map(cat => {
        return {
            ...cat,
            sum: cat.followers.reduce((sum, value) => sum + value, 0)
        }
    })
    
    const max = Math.max(...cats.map(cat => cat.sum))
    
    return cats
    .filter(cat => cat.sum === max)
    .map(cat => cat.name)
}