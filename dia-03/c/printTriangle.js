export function printTriangle(size, character) {
    let triangle = ''
    for(let i = 1; i <= size; i++) {
        triangle += ' '.repeat(size - i) + character.repeat(i)
        triangle += (i < size)? '\n': ''
    }
    return triangle
}