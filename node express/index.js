const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const route = require('./Route/dishRouter');
const routepromo = require('./Route/promoRouter');
const leader = require('./Route/leaderRouter');

const hostname = 'localhost';
const port = 3000;

let app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use('/dishes',route);
app.use('/promotions',routepromo);
app.use('/leaders',leader);


app.use(express.static(__dirname + '/public'));
app.use((req, res) => {
    console.log(req.header);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is express server</h1></body></html>')
});
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`server starting at http://${hostname}:${port}/`);

})