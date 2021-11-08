function climbing_Stairs(n) {
    console.log('2',n)
    if (n <= 3) return n
    console.log(n)
    let ways = [0, 1, 2, 3]
    for (let i = 4; i <= n; i++) {
        console.log(i)
        ways.push(ways[i - 1] + ways[i - 2])
    }
    // console.log(ways)
    return ways.pop()
}

let m = 3
climbing_Stairs(m)