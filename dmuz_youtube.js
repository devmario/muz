var fs = require('fs');
var youtubedl = require('youtube-dl');

var cmd_i = 2;
var videoId = process.argv[cmd_i];

console.log(`Download check ${videoId} from Youtube`);

var video = youtubedl(`http://www.youtube.com/watch?v=${videoId}`,
                      // Optional arguments passed to youtube-dl.
                      ['--format=18'],
                      // Additional options can be given for calling `child_process.execFile()`.
                      { cwd: __dirname });

// Will be called when the download starts.
video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info._filename);
    console.log('size: ' + info.size);
});

video.pipe(fs.createWriteStream(`tmp/mp4/${videoId}.mp4`));
