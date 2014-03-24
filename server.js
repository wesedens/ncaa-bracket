/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings'),
    routes = require('./server/config/routes'),
    scrape = require('./server/app/scrape');

// Create a server with a host, port, and options
var server = Hapi.createServer('0.0.0.0', config.port, config.hapi.options);

// Bootstrap Hapi Server Plugins, passes the server object to the plugins
require('./server/config/plugins')(server);

// Require the routes and pass the server object.
var routes = require('./server/config/routes')(server);

// Add the server routes
server.route(routes);

//Start the server
server.start();

//var games = scrape.getGames(function(games) {
//    console.log(scrape.stat(games[2], 2));
//});

//Log to the console the host and port info
console.log('Server started at: ' + server.info.uri);
