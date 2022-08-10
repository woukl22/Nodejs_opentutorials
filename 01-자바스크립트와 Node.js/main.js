var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    // console.log(url.parse(_url, true).pathname);
    /*
      url.parse(_url, true)를 출력했을 때, Url의 정보들이 나오는데,
      path는 query string이 포함이 되어 있고, 
      pathname은 query string이 실제로 주소에 있더라도 query string을 제외한 path만을 보여준다.
    */

      if(pathname === '/'){
        if(queryData.id === undefined){
          fs.readFile(`./01-자바스크립트와 Node.js/data/${queryData.id}`, 'utf8', function(err, description){
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ul>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
            response.writeHead(200); // 200이라는 숫자를 서버가 브라우저에게 주면, 파일이 성공적으로 전송됐다라는 의미이다.
            response.end(template);
          });
        } else{
          fs.readFile(`./01-자바스크립트와 Node.js/data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ul>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
            response.writeHead(200); // 200이라는 숫자를 서버가 브라우저에게 주면, 파일이 성공적으로 전송됐다라는 의미이다.
            response.end(template);
          });
        }        
      } else{
        response.writeHead(200);  // 파일을 찾을 수 없는 경우, 웹 서버는 404라는 번호를 돌려준다.
        response.end('Not found');
      }  
});
app.listen(3000);
