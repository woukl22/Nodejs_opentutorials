/* 반올림을 해주는 함수: Math.round() */
console.log(Math.round(1.6));   // 2
console.log(Math.round(1.4));   // 1


/*
    함수를 호출한 부분과 함수가 정의된 부분 사이에 매개체가 필요하다.
    이걸 매개변수라고 한다.
    아래에서는 first와 second가 매개변수이다.

    각각의 입력값 하나하나를 argument(인자)라고 한다.
    argument를 받아서 함수 안으로 전달해주는 매개체를 parameter(매개변수)라고 부른다.
*/

// function sum(first, second){    // parameter
//     console.log(first + second);
// }

// sum(2, 4);  // argument

/*
    Math.round() 함수는 console.log를 써주지 않으면 출력되지 않는다.
    우리가 만든 sum()은 함수가 출력까지 해주므로 더 좋아보일 수 있다.
    하지만 우리가 만든 sum()은 융통성이 떨어진다.
    sum()은 언제나 콘솔에 출력되게끔 사용할 수 밖에 없다.
    하지만 Math.round()는 함수의 결과를 받아서 다양한 용도로 쓸 수 있다.
    ex) 콘솔에 출력, 파일에 출력 등등
*/
Math.round(1.6);


/* 우리도 Math.round()처럼 sum()을 바꿔줄 수 있다. */
function sum(first, second){
    console.log('a');
    return first+second;
    console.log('b');
}

console.log(sum(2, 4));

/* 
    `a만 실행된다.
    return을 만나면 그 즉시 함수가 종료된다.
    
    return의 의미
        - 값을 출력한다
        - 함수가 종료된다
*/