export async function doTask1() {
    return new Promise(resolve => {
        window.setTimeout(() => resolve('Task 1'), 300)
    })
}

export async function doTask2() {
    return new Promise(resolve => {
        window.setTimeout(() => resolve('Task 2'), 300)
    })
}

export async function doTask3() {
    return new Promise(resolve => {
        window.setTimeout(() => resolve('Task 3'), 300)
    })
}