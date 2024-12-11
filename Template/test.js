// filesystem Node
const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim();
const outputPath = path.join(__dirname, 'output.txt');

// Your code start
function greet(input){
    return `Hey, I am ${input}`;
}

// Your code end here

//call the function
const output = greet(input);
fs.writeFileSync(outputPath, `Your Output: ${output}`, 'utf-8');