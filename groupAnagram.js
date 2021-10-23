function anagram_group(strs) {
    let grouped = {}

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i]
        
        const key = word.split('').sort().join('')
        console.log(key)
        if (!grouped[key]) {
            console.log('10', key)
            grouped[key] = []
        }
        console.log('13', grouped[key].push(word))
        grouped[key].push(word);
    }
    console.log(Object.values(grouped))
    return Object.values(grouped)
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    // ['aet','aet','ant','aet','ant','abt']
    // [0,1,2,3,4,5]
anagram_group(strs)