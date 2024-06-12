export function example06(input) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    let result = input.split('@', 2)
    return result[0].slice(0, 5) + '...@' + (result.length > 1 ? result[1]: '')
}

export default example06