/*
create a server that:
1) has GET /time - returns the current server time
2) has POST /time - for each request, stores the current time in an array
   on the server
   for example, if a client calls POST /time 3 times at different times,
   you would have an array of 3 elements with different timestamps:
    [1223322, 123324, 2453121]
3) has GET /history - returns the array of (2) to the requesting client
   this has to be in JSON, so use
   writeHead(200, {'Content-Type': 'application/json'}) and JSON.stringify
4) create a client application that has a button for each API endpoint.
   everytime a button is pressed, display the response from the server
*/

const http = require('http');
const PORT = 5000;

const timestamps = [];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    switch (req.url.toLowerCase()) {
        case '/time': {
            timeApi(req, res);
            break;
        }

        default: {
            res.writeHead(404);
            res.write('i dont know what to do');
            break;
        }
    }
    res.end();
});

function timeApi(req, res) {
    switch (req.method) {
        case 'GET': {
            res.writeHead(200);
            res.write(new Date().toString());
            return;
        }
        case 'POST': {
            res.writeHead(200);
            timestamps.push(new Date());
            res.write('time added');
            return;
        }
        default: {
            res.writeHead(405);
            res.write(`time api cant handle ${req.method}`);
            return;
        }
    }
}

server.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
})