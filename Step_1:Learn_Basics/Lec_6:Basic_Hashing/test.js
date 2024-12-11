const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim();
const outputPath = path.join(__dirname, 'output.txt');

//Define the function

function greet(name){
    return `Hello ${name}`
};


//call the function
const output = greet(input);
fs.writeFileSync(outputPath, `Input received: ${output}`, 'utf-8');