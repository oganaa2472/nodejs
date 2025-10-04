const EventEmitter = require('events');
const customEmitter = new EventEmitter();
const http = require('http');


class Sales extends EventEmitter {
    constructor(){
        super();
    }
}

const myEmitter = new Sales();
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customEmitter.emit('response', 'john', 34);

////// create a server
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('Request received');
    console.log(req.url);
    res.end('Request received');
});

server.on('request', (req, res) => {
    console.log('Another request');
});

server.on('close', () => {
    console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...');
});

// what are streams 


