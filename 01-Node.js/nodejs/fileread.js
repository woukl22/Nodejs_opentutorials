var fs = require('fs');

fs.readFile('./01-Node.js/nodejs/sample.txt', 'utf8', function(err, data){
    console.log(data);
});