/* 
    Conditional Statement(조건문)
    - 조건문은 제어문의 대표적인 사례
    - 조건에 따라 서로 다른 코드가 동작하게 프로그램의 실행 흐름을 제어하는 제어문이다.
*/
var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');