//Require fs (file system) module saved on fs variable
//url of the module doncs : https://nodejs.org/docs/latest-v12.x/api/fs.html
const fs = require('fs');


//Blocking, syncronous way
//Call to the function to read the file. We pass the path and the encoding option as a string
const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8');
console.log(textIn);

//String saved in a const
const textOut = `This is what weknow about avocado:  ${textIn}.\nCreated on ${Date.now()}`;

//We use the function to write at the file called output
fs.writeFileSync('./final/txt/output.txt', textOut);
console.log('File written!');

//Non-Blocking, asyncronous way
fs.readFile('./final/txt/start.txt', 'utf-8', (err, data) =>{
    console.log(data);
});
console.log('Will read file');

//Callback Hell
fs.readFile('./final/txt/start.txt', 'utf-8', (err, data) =>{
    fs.readFile(`./final/txt/${data}.txt`, 'utf-8', (err, data2) =>{
        console.log(data2);
    });
});

console.log('Callback hell 1');

fs.readFile('./final/txt/start.txt', 'utf-8', (err, data) =>{
    fs.readFile(`./final/txt/${data}.txt`, 'utf-8', (err, data2) =>{
        console.log(data2);
        fs.readFile(`./final/txt/append.txt`, 'utf-8', (err, data3) =>{
            console.log(data3);

            //finally we will write asyncronously to a file
            fs.writeFile('./final/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written ');
            });
        });
    });
});

console.log('Callback hell 2');