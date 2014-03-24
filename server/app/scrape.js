var request = require('request');

var url = 'http://data.ncaa.com/jsonp/gametool/brackets/championships/basketball-men/d1/2013/data.json?callback=ncaaBrackets.drawBracket'

var ncaaBrackets = {
    drawBracket: function (json) {
        return json
    }
}

module.exports = {
    getGames : function(callback) {
        return request(url, function(err, resp, body) {
            var bracket = eval(body);
            var games   = bracket.games;

            if (callback) {
                callback(games);
            }
            for (var key in games) {
                if (games[key].gameState === 'final') {
                    //console.log(key, games[key]);
                    //console.log(stat(games[key], key))
                }
            }
        });
    },

    stat : function (game, key) {
        var str       = 'Game: ' +key +' -> ' +game.bracketPositionId +'\n'
        var home_seed = ''
        var away_seed = ''

        if (game.home.isTop === 'T') {
            home_seed = game.seedTop
            away_seed = game.seedBottom
        } else {
            home_seed = game.seedBottom
            away_seed = game.seedTop
        }
        str = str + game.home.names.full +'('+home_seed+'): '+game.home.score +
                '\n';
        str = str + game.away.names.full +'('+away_seed+'): '+game.away.score +
                '\n';
        return str
    }
}

//request(url, function(err, resp, body) {
//    var bracket = eval(body);
//    var games   = bracket.games;
//
//    for (var key in games) {
//        if (games[key].gameState === 'final') {
//            //console.log(key, games[key]);
//            console.log(stat(games[key], key))
//        }
//    }
//    //console.log(games[5]);
//});
