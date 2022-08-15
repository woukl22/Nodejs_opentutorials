/*
function a(){
    console.log('A');
}
*/

var a = function(){
    console.log('A');
}
/*
    이름이 없는 함수: 익명 함수
    이름이 없으면 호출을 할 수 없으니 이런 형식으로 만들어줄 수 있다.
    a라는 변수의 값으로써 함수를 정의함 => '자바스크립트에서는 함수가 값이다'라는 것을 의미한다.
*/

// a();

/*
    아래 함수의 기능에 대한 실행이 끝난 다음에
    이 기능을 실행한 쪽에게 
    함수가 실행이 끝났으니까 다음 일을 하세요라고 하고 싶다면
    함수가 인자로 callback을 받으면 된다.
*/
function slowfunc(callback){
    callback();
}
slowfunc(a);

/*
    a라는 변수를 slowfunc에 넣으면
    slowfunc 함수가 실행이 되고,
    callback이라는 파라미터는 a가 가리키는 함수를 갖게 되고,
    그 안에서 callback이라는 함수를 호출하므로
    a라는 함수가 실행된다.
*/