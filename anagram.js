function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }
    const word = {}

    for(let i = 0; i < first.length; i++) {
        let letter = first[i]
        console.log(letter)
        word[letter] ? word[letter] +=1 : word[letter] = 1
        console.log(word[letter])
    }
    // console.log(word)

    for(let i = 0; i < second.length; i++) {
        let letter = second[i]
        // can't find letter or letter is zero then it's not an anagram
        if(!word[letter]){
            return false
        } else {
            word[letter] -= 1
        }
    }
    return true
}

validAnagram('anagrams', 'nagaramm')