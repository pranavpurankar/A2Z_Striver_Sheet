# Node.js File Interaction Setup

This guide will help you set up a Node.js project for seamless coding with input
and output files in VS Code. This setup is reusable, so you won't need to repeat 
these steps from scratch every time.

---

## Prerequisites

1. **Install Node.js**: Download and install Node.js from 
                        [Node.js Official Website](https://nodejs.org/).
2. **Install VS Code**: Download and install Visual Studio Code from 
                     [VS Code Official Website](https://code.visualstudio.com/).

---

## Step-by-Step Setup Guide

### Step 1: Create Folder Structure
1. Create a root folder for your project (e.g., `Learning_Node`).

2. Inside the root folder, create a subfolder for each topic 
   (e.g., `Hashing`, `Arrays`).

3. Inside each topic folder, create the following files:
   - `test.js` (for your script)
   - `input.txt` (for input data)
   - `output.txt` (to store the output)

   Example folder structure:
      Learning_DSA/ 
      ├── Hashing/   ├── test.js ├── input.txt └── output.txt 
      └── Arrays/    ├── test.js ├── input.txt └── output.txt


---

### Step 2: Configure VS Code Tasks
1. In the root folder, create a `.vscode` directory.
2. Inside `.vscode`, create a file named `tasks.json`.
3. Add the following content to `tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Run Node.js Script",
            "type": "shell",
            "command": "bash",
            "args": [
                "-c",
                "node ${file} < ${fileDirname}/input.txt > ${fileDirname}
                /output.txt"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": []
        }
    ]
}
```

---

### Step 3: Write Your Script Template
1. Copy the following template into each fileName.js file you create:

```javascript
// I/O operation using node filesystem
const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim();
const outputPath = path.join(__dirname, 'output.txt');

// Code block start
function greet(name) {
    return `Hello ${name}`;
}


// Call your function and write output
const output = greet(input);
fs.writeFileSync(outputPath, `Your Output: ${output}`, 'utf-8');
```

---

### Step4: Run the Script
1. Open the topic folder (e.g. `Hashing`) in VS Code
2. Write your input in `input.txt`
3. Save your script in `test.js`
4. Press `Ctrl+shift+B`(Linux Dist.) or `Cmd+Shift+B` (Mac) to run the script
5. Check `output.txt` for the output.

---

### Example Workflow
1. Write Input: Add `Pranav` in `input.txt`.
2. Write Script: Use the `test.js` template to process the input.
3. Run Task: Press `Ctrl + Shift + B` to execute.
4. View Output: Check `output.txt` for Output:`Hello Pranav`

---