// This is the base controller. Used for base routes, such as the default
// index/root path, 404 error pages, and others.
var scrape = require('../app/scrape');

module.exports = {
    index: {
        handler: function(request, reply){
            // Render the view with the custom greeting
            reply.view('index', {
                title: 'Awesome Boiler Plate Homepage'
            });
        },
        app: {
            name: 'index'
        }
    },
    about: {
        handler: function(request, reply){
            reply.view('about', {
                title: 'This is the example about page'
            });
        },
        app: {
            name: 'about'
        }
    },
    bracket: {
        handler: function(request, reply){
            reply.view('bracket', {
                title: '2012 NCAA Men\'s Basketball Tournament'
            });
        },
        app: {
            name: 'bracket'
        }
    },
    bracketData: {
        handler: function(request, reply){
            var games = scrape.getGames(function(games) {
                console.log(scrape.stat(games[2], 2));
                reply(games);
            });
        },
        app: {
            name: 'bracket'
        }
    },
    missing: {
        handler: function(request, reply){
            reply.view('404', {
                title: 'You found a missing page, but won the 404 error!'
            });
        },
        app: {
            name: '404'
        }
    }
}
