export function createCalculator() {
    let result = 0
    
    return {
        add: (number) => {
            return result += number
        },
        subtract: (number) => {
            return result -= number
        },
        multiply: (number) => {
            return result *= number
        },
        divide: (number) => {
            return result /= number
        },
        clear: () => {
            return result = 0
        },
        getTotal: () => {
            return result
        }
    }
}