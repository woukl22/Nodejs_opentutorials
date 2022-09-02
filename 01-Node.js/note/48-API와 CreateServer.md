# 48-API와 CreateServer

### API: Application Programming Interface

fs.readFile은 Node.js를 만든 개발자들이 만든 것이다.<br>
Node.js를 만든 개발자들은 Node.js를 이용하는 개발자들에게<br>
파일을 읽을 땐 readFile을 사용하라고 '사용설명서(document)'를 통해서 말하고 있다.<br>

<br>

readFile 함수의 이름, 들어가는 파라미터, 리턴값은 함수를 만든 Node.js를 만든 개발자들과<br>
함수를 사용하는 Node.js를 이용하는 개발자들의 약속된 조작장치이다.<br>
이런 조작장치를 **Interface**라고 한다.<br>
우리는 interface를 실행시킴으로써 애플리케이션을 만들 수 있게 되는 것이다.<br>
**애플리케이션을 프로그래밍하기 위해 제공되는 인터페이스를 API라고 한다.**<br>

<br>