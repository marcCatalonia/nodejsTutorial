const fs = require('fs');
const http = require('http');
const url = require('url');


//We read at the begining the data.json syncronously and then we won't have to read it againn for each time someone needs it
const data = fs.readFileSync(`${__dirname}/final/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;
    if(pathName === '/marc' || pathName === '/')
    res.end('This is marc');

    else if (pathName === '/product')
    res.end('This is the product');

    else if(pathName === '/api'){
        //Read the JSON file
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
    }
        
    
    else{
            res.writeHead(404, {
                'Content-type': 'text/html',
                'my-own-header': 'hello-world'
            });
         res.end('<h1>Page not found</h1>');
    }
       
});


server.listen(8000);