// https://www.measurethat.net/Benchmarks/Show/12738/0/trimming-leadingtrailing-characters
// https://stackoverflow.com/questions/26156292/trim-specific-character-from-a-string

var regexTrim = function(str, ch) {
    if (ch === ']') ch = '\\]'
    else if (ch === '^') ch = '\\^'
    else if (ch === '\\') ch = '\\\\'
    return str.replace(new RegExp('^[' + ch + ']+|[' + ch + ']+$', 'g'), '')
}

function indexTrim(str, ch) {
    var start = 0, 
        end = str.length

    while(start < end && str[start] === ch)
        ++start

    while(end > start && str[end - 1] === ch)
        --end

    return (start > 0 || end < str.length) ? str.substring(start, end) : str
}

function booleanTrim(str, ch) {
    return str.split(ch).filter(Boolean).join(ch)
}

function spreadTrim(str, ch) {
    const first = [...str].findIndex(char => char !== ch)
    const last = [...str].reverse().findIndex(char => char !== ch)
    return str.substring(first, str.length - last)
}

function substringTrim(str, ch) {
    while(str.charAt(0)==ch) {
        str = str.substring(1)
    }

    while(str.charAt(str.length-1)==ch) {
        str = str.substring(0,str.length-1)
    }

    return str
}

export function example07(input) {
    if (typeof input !== 'string') {
        throw 'Unsupported type of input (this function support only string type)'
    }
    return indexTrim(input, '.').split(' ').map((x) => x.toLowerCase()).join('-')
}

export default example07