/* 

Do more revision on it, output is wrong Now starting hitesh udemy
Practise: 1 Sort an Array of Strings Using Selection Sort
    • Input: ["apple", "orange", "bananna", "grape"]
    • Output: ["apple", "banana", "grape", "orange"]
*/

let arr = ["apple", "orange", "bananna", "grape"];

function characterSorting(arr){
    let sortedCharArray = [];

    for (let i=0; i < arr.length; i++) {
        const minElement = arr[i];

        for (let j=i; j<arr.length; j++) {
            if(arr[j] < arr[minElement]){
                minElement=j;
            }
        }

        let temp=arr[minElement];
        arr[minElement]=arr[i];
        arr[i]=temp;
        sortedCharArray.push(arr[i]);
    }
    return sortedCharArray;
}

console.log((arr));

/* 
Practise

Sort an Array of Numbers in Descending Order

Modify the given selection sort algorithm to sort the array in 
descending order.
    • Input: [12, 5, 2, 8, 9, 3]
    • Expected Output: [12, 9, 8, 5, 3, 2]

*/