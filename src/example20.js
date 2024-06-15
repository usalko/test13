export function example20(input) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    return input.split(' ').map((x) => x.slice(0, 1).toUpperCase() + x.substring(1)).join('')
}

export default example20