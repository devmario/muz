#!/usr/bin/env node

var fuzzy = require('fuzzy');
var parser = require('xml2json');
var fs = require('fs');
var plist = require('plist');

var xml = fs.readFileSync(process.env['HOME']+'/Music/iTunes/iTunes\ Music\ Library.xml', 'utf8');
var lib = plist.parse(xml);
var list = [];
var ti = [];

for(var i in lib.Tracks) {
    var it = lib.Tracks[i];

    if(it["Kind"] != "MPEG audio file" && it["Kind"] != "Internet audio stream") {
        continue;
    }

    var id = it['Track ID'];
    var song = it["Name"];
    var artist = it["Artist"];
    var album = it["Album"];
    var gene = it["Genre"];
    var F = id + "| " + song + " : " + artist + " : " + album + " : " + gene;

    list.push(F);
    ti.push(id);
}

var titles = "";
var tn = 1;
var cmd_i = 2;
var command = process.argv[cmd_i++];

if(command == "fuzzy") {
    var options = { pre: '', post: '' };
    var results = fuzzy.filter(process.argv[3], list, options)
    for(var i of results) {
        var arr = i.string.split('|');
        console.log(arr[0]);
        titles += (tn++) + " :" + arr[1] + "\r\n";
    }

} else if(command == "regex" || command == "or" || command == "and") {
    var reg = "";
    for(; cmd_i < process.argv.length;) {
        if(command == "or") {
            reg += "";
        } else if(command == "and") {
            reg += "(?=.*"
        }

        reg += process.argv[cmd_i++];

        if(cmd_i < process.argv.length) {
            if(command == "or") {
                reg += "|";
            } else if(command == "and"){
                reg += ")";
            }
        } else {
            if(command == "or"){
                reg += "";
            } else if(command == "and") {
                reg += ")";
            }
        }

    }

    var re = new RegExp(reg, "i");
    var idx = [];

    for(var i in list) {
        if (re.test(list[i])) {
            idx.push(ti[i]);
            var arr = list[i].split('|');
            titles += (tn++) + " :" + arr[1] + "\r\n";
        }
    }

    var str = "";
    for(var id of idx) {
        str += id + " ";
    }
    console.log(str);
}

fs.writeFileSync(".search_titles", titles);
