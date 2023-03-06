export function myMap(array, func) {
    let a = []
    for(let element of array) {
        a.push(func(element))
    }
    return a
}