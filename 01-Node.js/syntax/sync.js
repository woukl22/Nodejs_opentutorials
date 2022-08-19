var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('./01-자바스크립트와 Node.js/syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

// 결과
// A
// B
//
// C
*/

/*
    sync가 있으면 동기적으로 처리하는 방식인데,
    sync가 없으면 비동기적인 방식이다.

    readFileSync는 return값을 주는데, 
    readFile은 return값을 주지 않고, 대신 함수를 3번째 인자로 줘야한다.

    Node.js가 이 파일을 읽는 작업이 끝나면, 3번째 인자로 준 함수를 실행시키면서 
    첫 번째 인자에는 에러가 있다면 에러를 인자로 제공하고, 
    두 번째 인자에는 파일의 내용을 인자로써 공급해 주도록 약속되어 있다.
*/
console.log('A');
var result = fs.readFile('./01-Node.js/syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);    
});
console.log('C');
// 결과
// A
// C
// B
// 

/*
    결과에 대한 이유:
    readFile이 실행될 때, 결과를 가져오기도 전에 바로 C가 실행이 되고, 
    readFile의 작업이 끝나면 세 번째 인자에 있는 함수가 호출되면서 함수 안에 있는 코드가 나중에 실행된 것이다.
*/