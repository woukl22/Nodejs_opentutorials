/*
    코드에 중복이 발생하면
    - 유지보수 하기가 나빠짐
    - 코드의 가독성이 떨어짐
    - 코드의 양이 많아짐

    이런 중복을 제거하기 위해서 함수를 사용한다.
*/

/*
    console.log(1);
    console.log(2);
    console.log(3);
    console.log('A');
    console.log('Z');
    console.log('B');
    console.log(1);
    console.log(2);
    console.log(3);
    console.log('F');
    console.log('C');
    console.log('P');
    console.log('J');
    console.log(1);
    console.log(2);
    console.log(3);
    console.log('U');
    console.log('A');
    console.log('Z');
    console.log('J');
    console.log('I');
    console.log(1);
    console.log(2);
    console.log(3);
*/

function f123(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}

f123();
console.log('A');
console.log('Z');
console.log('B');
f123();
console.log('F');
console.log('C');
console.log('P');
console.log('J');
f123();
console.log('U');
console.log('A');
console.log('Z');
console.log('J');
console.log('I');
f123();

/*
    변수는 데이터에 대한 이름을 붙인 것
    함수는 어떠한 일련의 로직, 일련의 프로그램에 대한 이름을 붙인 것

    함수를 사용하면 유지보수의 편의성이 극단적으로 높아짐.
*/