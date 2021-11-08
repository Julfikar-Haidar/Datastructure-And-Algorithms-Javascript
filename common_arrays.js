// Develop an Algorithm to find common values between two arrays
// num1 = [1,2,3,2] 
// set only allows unique values [1,2,3] 
// num2 = [2,3]
// output = [2,3]

const commonArray = (num1, num2) => {
    let firstSet = new Set();
    for (let num of num1) {
        firstSet.add(num)
    }
    console.log('11',firstSet)
    let intersectionSet = new Set();
    for (let num of num2) {
        if(firstSet.has(num)){
            intersectionSet.add(num)
        }
    }
    console.log(intersectionSet)
    return Array.from(intersectionSet)
}

// commonArray([1,2,3],[2,3])


var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    let leftIdx = 0;
    let rightIdx = s.length - 1;

    while(leftIdx < rightIdx){
        if (s[leftIdx] !== s[rightIdx]) {
            console.log('false')
            return false
        }
        

        rightIdx --
        leftIdx ++ 

    }
    console.log('true')
    return true
};
isPalindrome("A man, a plan, a canal: Panama")


