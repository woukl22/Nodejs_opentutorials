var testFolder = './01-자바스크립트와 Node.js/data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);      // ['CSS', 'HTML', 'JavaScript']
    /*
        Node.js는 위처럼 어떤 특정 디렉토리에 있는 파일의 목록을 배열로 만들어서 전달하는 약속을 갖고 있다.
        이러한 배열을 반복문을 통해 반복적으로 처리해서 어떤 결과를 만들어낼 수 있다.
    */
})