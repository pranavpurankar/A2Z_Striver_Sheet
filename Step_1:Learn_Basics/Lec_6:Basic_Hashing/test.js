// I tried to setup the coding env like striver
// But unable to generate output. I will come
// to this later, now super important thing is 
// completion.

const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim();
const outputPath = path.join(__dirname, 'output.txt');

// Code block Start
/* 
Write a function that takes number, arr as input.
This returns the number of occurrence of number.
*/

function occurrence(num){
    arr = [1,2,1,3,2,2,2];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(num === element){
            count += 1;
        }
    }
    return count;
}
// console.log(occurrence(2,[1,2,1,3,2,2,2]));

// Code block End

//call the function
const output = occurrence(input);
fs.writeFileSync(outputPath, `Output: ${output}`, 'utf-8');