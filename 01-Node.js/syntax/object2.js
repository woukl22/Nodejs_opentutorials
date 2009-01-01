// array, object

var f = function(){
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f();

// var i = if(true){console.log(1)}

// var w = while(true){console.log(1)};

/*
    자바스크립트에서는 function이라고 하는 statement(구문)가 다른 statement와는 다르게 값이 될 수 있다.
    즉, 처리 방법들을 담고있는 구문이면서, 동시에 그것 자체가 값이 될 수 있다.
    => 우리가 주목해야 할 함수의 특징
*/


var a = [f];
a[0](); // 배열의 원소로써 함수가 존재할 수 있다.
var o = {
    func: f
}
o.func();

/*
    자바스크립트에서 배열과 객체는 모두 서로 연관된 데이터를 담는 그릇인데,
    자바스크립트에서는 처리방법을 그룹핑하는 함수조차도 데이터이기도 하기 때문에
    우리는 배열과 객체에도 담을 수 있다.
*/