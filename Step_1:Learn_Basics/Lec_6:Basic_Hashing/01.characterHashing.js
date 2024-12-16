function bruteForceFrequency(arr,queries){
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for(let j=0; j < arr.length; j++){
            if(queries[i] === arr[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

const ar = bruteForceFrequency([1,1,2,2,4,5,1,3], [2,5,6]);
const cr = bruteForceFrequency(['a','a','a','b','c'], ['a','b','f']);
console.log(cr);


// Character hashing using 
function bruteForceCharacter(arr, char){
    let result = []
    for(let i = 0; i < quer.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(quer[i] === char[j]){
                 count++;
            }
        }
    }
}