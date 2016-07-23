var jsonfile = require('jsonfile');
var fetch = require('node-fetch');
var child_process = require('child_process');

var cmd_i = 2;
var command = process.argv[cmd_i++];
var maxResults = process.argv[cmd_i++];
var videoDuration = process.argv[cmd_i++];
var q = encodeURIComponent(process.argv[cmd_i++]);
for(; cmd_i < process.argv.length;) {
    q += "+" + encodeURIComponent(process.argv[cmd_i++]);
}

var makeQuery = function (action, value) {
    var url = {
        // https://developers.google.com/youtube/v3/docs/search/list
        search: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value.q}&type=${value.type}&videoDuration=${videoDuration}`,
        // https://developers.google.com/youtube/v3/docs/playlistItems/list
        playListItems: `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C+contentDetails%2C+snippet&playlistId=${value.playlistId}`
    };
    var key = 'AIzaSyC6CV00n729u45jksaXWLilBn6ZB1c74xA';
    var query = url[action] + `&key=${key}&maxResults=${maxResults}`;
    console.log(query);
    return query;
}

fetch(makeQuery(command, {q:q, type:'video'}))
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        if(json.items == undefined) {
            return;
        }
        console.log(`Found ${json.items.length} video.`);

        var num = 0;
        for(var item of json.items) {
            if(item.id == undefined || item.id.videoId == undefined) {
                return;
            }
            const videoId = item.id.videoId;
            const title = item.snippet.title;

            jsonfile.writeFile(`tmp/json/${("0" + num).slice(-2)} ${videoId}.json`, item, function (err) {
                if(err) {
                    console.log(err);
                    return process.exit(1);
                }
                console.log(`${title}(${videoId})`);
            });

            num++;
        }
    });