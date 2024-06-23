export function example12(dateTime) {
    if (typeof dateTime !== 'Date') {
        throw 'Unsupported type of input (this function support only Date type)'
    }
    return input.split(' ').map((x) => x.slice(0, 1).toUpperCase() + x.substring(1)).join('')
}

export default example12