var games = {};

// Part 1
function getGames() {
    $.ajax({ url     : "bracketData" ,
             success : cacheGames,
             cache   : false           ,
             dataType: "json"});
}


function cacheGames(text){
    games = text;
    populateBracket(games);
}

function populateBracket(games){
    //console.log($('#position_id').find('.slot1').text());
    for (var key in games) {
        if (games[key].gameState === 'final') {
            var game = games[key];

            console.log(game);
            var divid = '#match' +game.bracketPositionId;

            var topslot = {};
            var botslot = {};
            if (game.home.isTop === 'T') {
                topslot = {
                    name : game.home.names.short,
                    score: game.home.score,
                    seed : game.seedTop};
                botslot = {
                    name : game.away.names.short,
                    score: game.away.score,
                    seed : game.seedBottom};
            } else {
                topslot = {
                    name : game.home.names.short,
                    score: game.home.score,
                    seed : game.seedTop};
                botslot = {
                    name : game.away.names.short,
                    score: game.away.score,
                    seed : game.seedBottom};
            }

            console.log(topslot);
            console.log(botslot);
            var spantop = '<span class="seed">' +topslot.seed +
                          '</span>' +topslot.name +
                          '<em class="score">' +topslot.score +
                          '</em>';
            var spanbot = '<span class="seed">' +botslot.seed +
                          '</span>' +botslot.name +
                          '<em class="score">' +botslot.score +
                          '</em>';
            var slot1 = $(divid).find('.slot1').html(spantop);
            var slot1 = $(divid).find('.slot2').html(spanbot);
        }
    }
    //<span class="seed">1</span>UK<em class="score">0</em>
    //$('#position_id').find('.slot1').printElements();
}

// Initializations
$(function() {
    getGames();
    //$("#buttonP1ID").click(getCustomerList);
    //$("#buttonP2ID").click(getCustomerList2);
    //$("#buttonP2HL").click(highlightCustomer);
    //
    //$("#customer-tab-div").tabs({ collapsible: true });
});


