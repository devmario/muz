var path = process.argv[2];
var arr = path.split("/");
while(arr[0] == "") {
    arr.shift();
}

if(arr[0] == "Volumes") {
    arr.shift();
} else {
    arr.unshift("Macintosh HD");
}

console.log(arr.join(":"));
