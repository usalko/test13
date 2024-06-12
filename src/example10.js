export function example10(input) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    let result = ''
    for(let i = 0; i < input.length; i++) {
        const isLowerCase = input[i] === input[i].toLowerCase()
        result += isLowerCase ? input[i].toUpperCase(): input[i].toLowerCase()
    }
    return result
}

export default example10