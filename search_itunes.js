#!/usr/bin/env node

var itunesRemote = require('itunes-remote');

var search_string = process.argv[2];
var is_print = process.argv[3];

itunesRemote('search', function (response) {
    if(is_print == "true") {
        console.log(response);
    }
}, {options:{},searchterm:search_string});
