//Require fs (file system) module saved on fs variable
//url of the module doncs : https://nodejs.org/docs/latest-v12.x/api/fs.html
const fs = require('fs');

//Call to the function to read the file. We pass the path and the encoding option as a string
const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8');
console.log(textIn);

//String saved in a const
const textOut = `This is what weknow about avocado:  ${textIn}.\nCreated on ${Date.now()}`;

//We use the function to write at the file called output
fs.writeFileSync('./final/txt/output.txt', textOut);
console.log('File written!');