function isValid(s) {
    let stack = []
    let par_has_map = { "(": ")", "{": "}", "[": "]" }

    for (let i = 0; i < s.length; i++) {
        // console.log(i)
        let char = s[i]
        // console.log(char)
        if (par_has_map[char]) {
            console.log(char)
            stack.push(char)
        } else if (par_has_map[stack.pop()] !== char) {
            console.log(13)
            return false
        }
    }
    console.log('stack',stack)
    return stack.length === 0
}

let s = "()"
isValid(s)