const fs = require('fs');


const http = require('http');
const path = require('path');


// const textIn = fs.readFileSync('./txt/input.txt','utf-8');

// console.log(textIn);

// const textOut = fs.writeFileSync('./txt/output.txt',textIn);


// fs.readFile('./txt/startt.txt','utf-8',(err,data)=>{
//     if(err){
//         return console.log("error")
//     }
//     console.log(data)
// })
// console.log('will read file')

const data = fs.readFileSync(`${__dirname}/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    console.log(pathName)
    if(pathName ==='/'|| pathName ==='/overview'){
        res.end('this is overview')
    }else if(pathName==='/product'){
        res.end('this is the product')
    }else if(pathName === '/api'){
        res.writeHead(200,{
            'Content-type' :'application/json'
        })
        res.end(data)
    }else{
        res.end('hello from the server')
    }
   
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to request on port 8000')
})