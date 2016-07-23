var jsonfile = require('jsonfile');
var child_process = require('child_process');

var cmd_i = 2;
var videoId = process.argv[cmd_i++];
var path = process.argv[cmd_i++];
for(; cmd_i < process.argv.length;) {
    path += " " + process.argv[cmd_i++];
}

jsonfile.readFile(path, function(err, json) {
    var videoId = json.id.videoId;
    var title = json.snippet.title;
    var desc = json.snippet.description;
    child_process.exec(`id3tag --song="${title}" --album="dmuz" --artist="dmuz" tmp/mp3/${videoId}.mp3`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
});
