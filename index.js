const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    request.url === '/coffee' ?
        response.end(`<p>Sorry, I don't brew coffee, because ${http.STATUS_CODES[418]}</p>`) :
        response.end(`<p>${http.STATUS_CODES[200]}, here's your tea</p>`)
});

server.listen(port, hostname, () => {
    console.log(`Serving tea at http://${hostname}:${port}/`);
});
