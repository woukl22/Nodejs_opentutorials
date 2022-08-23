var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);    // 출력: k8805
/*
    두 번째 정보를 가져오고 싶다면 [1]을 써줘야 한다.
    배열은 식별자가 숫자로 되어 있음.
*/

/* 배열의 반복 */
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i+1;
}


var roles = {
    // key : value
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}
console.log(roles.designer);    // 출력: k8805
console.log(roles['designer']);    // .을 통해서 정보를 불러올 수도 있지만, 
                                                 // 배열처럼 대괄호 안에 key 값을 넣어서도 정보를 불러올 수 있다.
                                                 // 대신 이때는 key값을 '문자'로 전달해야한다.
/*
    객체는 각각의 데이터마다 고유한 이름을 줄 수 있다.
*/

/* 객체의 반복 */
for(var name in roles){     // 여기서 name은 다른 마음에 드는 이름으로 바꿔도 상관 없다.
    console.log('object => ', name, 'value => ', roles[name]);        // name 안에는 key의 값이 들어간다.
}