function charCountString(array){
    let charList = {}

    for (let index = 0; index < array.length; index++) {
        const element = array[index].toLowerCase().trim();
       if (isAlphaNumeric(element)) {
        if (charList[element] > 0) {
            charList[element]++
        }else{
            charList[element] = 1
        } 
       }
        
    }
    console.log(charList);
    return charList
}


function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        // console.log('18')
        return false
    }
    // console.log('21')
    return true
}

charCountString('hello worldHWLH# !!')