export function example05(input) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    let result = input.split(' ', 2)
    return result[0] + ' ' + (result.length > 1 ? result[1].slice(0, 1).toUpperCase() + '.': '')
}

export default example05