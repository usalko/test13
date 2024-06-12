export function example03(input, arrayMaxLength) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    return input.split(' ', arrayMaxLength)
}

export default example03