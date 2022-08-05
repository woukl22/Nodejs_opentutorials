/*
    console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
*/

// 변수의 여러가지 의미 중 하나는 데이터에 이름을 붙이는 것이다.

// 위의 코드와 비교했을 때, 결과는 같지만 아래처럼 하는 것이 훨씬 가독성이 좋다.
/*
    var letter = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ;
    console.log(letter);
*/
// 'Lorem ~~~' 글에 letter라는 이름을 붙여준 것이다.
// 이건 편지라고 추론할 수 있고, 의미가 될 수 있는 것의 범위를 좁힐 수 있다.



// 변수는 너무 많은 효용이 있는데 이번에는 그중 하나만 더 설명한다.

/*
    중복을 제거하면 자연스럽게 좋은 프로그래밍이 된다.
    letter 안에 같은 단어가 중복된다고 생각을 해보면
    코드 안에 중복되는 단어가 수없이 많다고 생각해보면 그 코드는 여러가지 문제를 발생시킨다.
    1. 데이터가 엄청 많아진다. 코드가 엄청 많아진다.
    2. 각각의 텍스트들이 같은 내용인지 파악하는 게 어렵다.(1억 줄 이상이라면 불가능하다)
    3. 수정할 때, 일부만 바꾸려고 한다면 일괄적으로 바꿀 수 없다.
    
    이런 경우에 변수를 사용하면 좋다.
*/

var name = 'k8805';
var letter = 'Dear ' + name + ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa jaeuk qui officia deserunt mollit anim id est laborum. ' + name;
console.log(letter);

/*
    이렇게 바꿔줬을 때, 결과는 똑같지만 코드는 훨씬 더 좋은 코드가 된다.
    1. name이라고 된 부분이 중복되어 있고 엄청 긴 코드였다면, 어마어마하게 많은 코드를 절약할 수 있다.
    2. name이라고 변수처리된 값들은 반드시 같다라는 것을 확신할 수 있다. => 가독성이 높아진다.
    3. name을 다른 값으로 바꾸면 수많은 name이 한 번에 다른 값으로 바뀌는 효과를 낼 수 있다.
*/

// 이번시간 교훈: 중복을 제거하면 좋은 일이 생긴다.