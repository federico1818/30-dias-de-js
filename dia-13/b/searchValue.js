export function searchValue(array, value) {
    const index = array.flat().findIndex(element => element == value)
    if(index < 0) {
        throw new Error("Valor no encontrado")
    }
    return {
        row: Math.trunc(index / array[0].length),
        column: Math.trunc(index % array[0].length)
    }
}