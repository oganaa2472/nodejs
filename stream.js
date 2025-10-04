const fs = require('fs');
const http = require('http');
const path = require('path');   
const zlib = require('zlib');
const server = http.createServer();


server.on('request', (req, res) => {
    // Solution 1: read file and send
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    //Solution 2: streams
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // })
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    // Solution 3: pipe
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);

    // Solution 4: pipe with compression
    // const readable = fs.createReadStream(path.join(__dirname, 'test-file.txt'));
    // const gzip = zlib.createGzip();
    // res.writeHead(200, {
    //     'Content-Encoding': 'gzip'
    // });
    // readable.pipe(gzip).pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});// Streams are used to read or write data piece by piece instead of all at once
// There are four types of streams: Readable, Writable, Duplex, Transform
// Examples: fs.createReadStream(), fs.createWriteStream(), http request and response objects

// Advantages of streams:
// 1. Memory efficiency: handle large files without loading them entirely into memory
// 2. Faster processing: start processing data as soon as the first chunk is available
// 3. Composability: easily chain multiple streams together using pipe method   

// each JavaScript file is a module
// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)

// ES module system used in browser import/export

// There have been attempts tp bring ES modules to node.js 
// resolving & loading-> Wrapping ->Executing->Returning exports->Caching

// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)

// core modules -> require('http')
// developer modules -> require('./example')
//3rd party modules -> require('express')

// wrapping 
// (function (exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });