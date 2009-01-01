// 1억줄의 코드와 20년동안 진행해온 프로젝트에 참여자가 2000명 정도 있다고 상상해보자.

/*
var v1 = 'v1';
// 100000 code
v1 = 'egoing';
var v2 = 'v2';
*/
var q = {
    v1: 'v1',
    v2: 'v2',
    f1: function(){
        console.log(this.v1);
    },
    f2: function(){
        console.log(this.v2);
    }
}

/*
    v1과 v2를 각각 만든 것과 객체에 변수를 넣어둔 것을 예로 들면
    하드디스크 안에 수많은 파일들을 그대로 놔둔 것과 폴더 안에 정리정돈한 것을 생각할 수 있다.
*/

// 데이터만 필요한 게 아니라 처리하는 코드도 필요하다.
/*
function f1(){
    console.log(o.v1);
}

function f2(){
    console.log(o.v2);
}

f1();
f2();
*/
/*
    1억개의 코드 안에서 똑같은 이름을 가진 다른 기능의 코드를 만들어버리면
    이전에 우리가 사용하던 함수가 삭제되는 것이다.

    이런 경우에 우리를 구원해주는 것이 객체다.
    '함수가 값이다'라는 특성을 이용해서
    함수가 사용하고 있는 데이터들이 그룹핑되어 있는 객체의 멤버로서
    함수를 추가할 수 있다.
*/

 q.f1();
 q.f2();

 /*
    함수를 따로 만들어놓은 것에 비해 잘 정리되어 있다.
    o라고 하는 하나의 객체 안에 서로 연관된 값들과 
    그 값을 처리하는 함수들이 그룹핑되어 있기 때문이다.

    만약에 객체의 이름을 바꿔버리면, 
    안에 있던 함수의 내용까지 바꿔줘야 하고,
    그렇지 않으면 제대로 작동하지 않을 수 있다.
    그래서 자신이 포함된 객체를 참조하는 방법으로 this라는 약속된 키워드를 만들었다.
 */




/*
    ==정리==
    '함수는 값이다.'
    '객체는 값을 저장하는 그릇이다.'
    라는 특성을 이용해서 서로 연관된 데이터와 연관된 처리방법들을 담고 있는
    함수들을 그룹핑하는 것을 통해서 코드의 복잡성을 획기적으로 낮출 수 있다.

    객체지향을 바라보는 느낌을 이런식으로 가져가면 좋다.
    현실에서는 더 복잡하고 추상적이지만, 
    
    객체라는 것이 결국에는 코드가 복잡해짐에 따라서 그 코드를 정리정돈해서 
    그 코드의 복잡성을 낮추는 기본적인 기능으로부터 출발한다라고 하는 것이 본질이다.

*/