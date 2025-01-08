// Move all zeros to the end of the array 
/* 
Algortithm:
1) Iterate through each element of the array
2) Pick the non-zero numbers and put in the temp array
3) The array is remaining with the zeros,
4) Now push back the temp numbers to the original array
5) Make the remaining places filled with zero
*/

let arr = [1,0,2,3,2,0,0,4,5,1];

function movingZeroEnd(arr){
    let temp = [];
    let n = arr.length;
    
    // Step_1
    for (let i = 0; i < n; i++) {
        if(arr[i] !== 0){
            temp.push(arr[i]);
        }
    }
    console.log('After step_1',arr, temp)

    // // Step_2
    for(let i=0; i < temp.length; i++){
        arr[i] = temp[i];
    }
    console.log('After step_2', arr, temp)

    // // Step_3
    for(let i = temp.length; i<n; i++){
        arr[i]=0
    }

    return arr;
}


/* 
Optimal:
*/

function optimalMoveZero(arr){
    // Step 1
    let j = -1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            j = i;
            break;
        }
    }
    if(j == -1) return arr;

    // Step 2
    for(let i = j+1; i < arr.length; i++){
        if(arr[i] !== 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

console.log(optimalMoveZero(arr));