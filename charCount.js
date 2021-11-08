function charCount(str) {
    var obj = {}
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            console.log('5', char)
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        console.log('18')
        return false
    }
    console.log('21')
    return true
}

charCount('##!!!r')