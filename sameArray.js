
// [2,6,3] ,[9,4,36]

function sameArray(params1,params2) {
    if(params1.length !== params2.length) {
        return false
    }

    for (let index = 0; index < params1.length; index++) {
        const currentIndex = params2.indexOf(params1[index] ** 2);
      
        if (currentIndex === -1) {
            return false
        }

        params2.splice(currentIndex,1)
    }

    return true

}

console.log(sameArray([2,6,3],[9,4,36]));