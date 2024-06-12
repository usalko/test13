export function example04(input, stringMaxLength) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    return input.slice(0, stringMaxLength)
}

export default example04