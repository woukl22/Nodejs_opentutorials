# 29-Node.js의 패키지 매니저와 PM2

## Package Manager
**Package(패키지)**: 소프트웨어를 부르는 여러가지 표현 중 하나<br>
ex) 독립적으로 실행되는 프로그램, 어떤 프로그램 안에서 부품으로 사용되는 작은 프로그램 => 전부 패키지라고 할 수 있다.<br>

<br>


**Package Manager**: 소프트웨어들(패키지들)을 관리해주는 프로그램<br>
패키지를 생성하고, 설치하고, 업데이트를 관리하고, 삭제해주는 프로그램이다.<br>

<br>
<br>

## NPM
Node.js에서 가장 광범위하게 사용되고,<br>
Node.js를 설치할 때 함께 설치된 패키지 매니저다.<br>

많은 Node.js로 만들어진 프로그램들은 npm을 통해서 인터넷으로 쉽게 설치할 수 있다. <br>

<br>
<br>

## PM2

[PM2 홈페이지](https://pm2.keymetrics.io/)에 들어가보면 아래와 같은 문구가 나온다.<br>
```
Advanced, production process manager for Node.js
```
*process는 실행중인 프로그램이라고도 부른다.*<br>

<br>

PM2의 다양한 기능
- PM2가 프로그램을 지켜보다가 프로그램이 원하지 않을 때 꺼지면(서비스가 안되면) 다시 켜주는 역할을 한다.<br>

- 코드를 수정하면 Node.js를 껐다가 다시 실행시켜야 변경된 내용이 반영이 되는데, PM2는 파일이 수정되는지 관찰하다가 파일이 수정되면 자동으로 프로그램을 껐다 켜주는 기능도 한다.<br>

<br>
<br>


PM2 설치 방법<br>
```
    npm install pm2 -g
```

<br>

PM2 실행 방법<br>
```
    pm2 start main.js       // start 뒤에는 파일 이름을 써주면 된다.
```

<br>

PM2 종료 방법<br>
```
    pm2 stop main       // stop 뒤에는 pm2 list에 나오는 name을 써주면 된다
```

<br>

파일을 수정했을 때 프로그램을 껐다 켜지 않고 새로고침만 눌러도 된다.
```
    pm2 start main.js --watch
```

<br>

문제점을 화면에 보여준다.
```
    pm2 log
```