export function example08(input) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    if (input.length === 0) {
        return ''
    }
    return input.slice(0, 1).toUpperCase() + input.substring(1)
}

export default example08