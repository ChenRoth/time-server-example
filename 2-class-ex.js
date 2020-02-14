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

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('hello');
    res.end();
});

server.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
})