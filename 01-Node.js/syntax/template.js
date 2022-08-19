/*
    var name = 'k8805';
    var letter = 'Dear ' + name + '\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa jaeuk qui officia deserunt mollit anim id est laborum. ' + name;
    console.log(letter);
*/
// \n: 줄바꿈

// Template Literal
// Literal은 정보를 표현하는 방법, 기호라고 생각하면 된다.
// 아래에서 1은 숫자라는 데이터를 표현하는 리터럴이고, '1'은 문자 1이라고 하는 데이터타입을 표현하는 리터럴이다. 
// var a = 1;
// var b = '1';

// 맨 위에 있는 코드를 리터럴로 바꾸기 위해서는 특수한 문자를 사용해야 한다.
// `: 템플릿 리터럴의 시작과 끝을 나타내는 기호
var name = 'k8805';
var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ${1+1}Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa jaeuk qui officia deserunt mollit anim id est laborum. ${name}`;

console.log(letter);

/*
    템플릿 리터럴의 장점
        1. 줄바꿈할 때 특수기호를 쓰지 않아도 된다.
        2. 문자열 내에서 변수를 넣어주고 싶을 때, 끊어주고 더해주지 않고도 변수를 사용할 수 있다.
        3. ${1+1}처럼 꼭 변수 이름이 아니더라도 어떤 값이든 넣어줄 수 있다.
*/