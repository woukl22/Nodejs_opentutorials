var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

/*
  함수는 재사용할 수 있는 껍데기 정도로 이야기할 수 있다.
  달라질 수 있는 부분만 바꾸는 걸 통해 재사용할 수 있다.
*/
function templateHTML(title, list, body, control){  
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${control}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}

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
          fs.readdir('./01-Node.js/data', function(error, filelist){
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var list = templateList(filelist);
            var template = templateHTML(title, list, 
              `<h2>${title}</h2>${description}`, 
              `<a href="/create">create</a>`
            );    // 로직에 대한 설명을 알 수 있다. => 'HTML에 대한 템플릿인가보다.'
            response.writeHead(200); // 200이라는 숫자를 서버가 브라우저에게 주면, 파일이 성공적으로 전송됐다라는 의미이다.
            response.end(template);
          })
        } else{
          fs.readdir('./01-Node.js/data', function(error, filelist){
            fs.readFile(`./01-Node.js/data/${queryData.id}`, 'utf8', function(err, description){
              var title = queryData.id;
              var list = templateList(filelist);
              var template = templateHTML(title, list, 
                `<h2>${title}</h2>${description}`,
                ` <a href="/create">create</a> 
                  <a href="/update?id=${title}">update</a>
                  <form action="delete_process" method="post">
                    <input type="hidden" name="id" value="${title}">
                    <input type="submit" value="delete">
                  </form>`
              );
              response.writeHead(200); // 200이라는 숫자를 서버가 브라우저에게 주면, 파일이 성공적으로 전송됐다라는 의미이다.
              response.end(template);
            });
          });
        }        
      } else if(pathname === '/create'){
        fs.readdir('./01-Node.js/data', function(error, filelist){
          var title = 'WEB - create';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `
            <form action="/create_process" method="post">
              <p><input type="text" name="title" placeholder="title"></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
          `, '');    // 로직에 대한 설명을 알 수 있다. => 'HTML에 대한 템플릿인가보다.'
          response.writeHead(200); // 200이라는 숫자를 서버가 브라우저에게 주면, 파일이 성공적으로 전송됐다라는 의미이다.
          response.end(template);
        })
      } else if(pathname === '/create_process'){
        var body = '';
        /*
          request.on('data' function(data){});는 
          웹 브라우저가 POST 방식으로 데이터를 전송할 때,
          전송되는 데이터가 많을 경우를 대비해서 제공하는 방식이다.   => 데이터가 많으면 문제가 생김(ex: 프로그램이 꺼지거나, 컴퓨터에 무리가 감)

          특정한 양의 데이터 중에서 조각조각의 데이터를 서버쪽에서 수신할 때마다 callback함수를 호출하도록 약속되어 있다.
          호출할 때 data라는 인자를 통해 수신한 정보를 주기로 약속되어 있다.

          body 데이터에 callback함수가 호출될 때마다 data를 추가해준다.

          그렇게 데이터가 조각조각 들어오다가 더 이상 들어올 정보가 없으면 
          request.on('end', function(){});에서 'end' 뒤에 나오는 callback함수를 호출하기로 약속되어 있다.
          따라서 end 뒤에 나오는 callback함수가 실행됐을 때 정보 수신이 끝났다라고 생각할 수 있다.

          아래 data와 end를 이벤트라고 하는데, 
          이 이벤트를 이용해서 POST 방식으로 전송된 데이터를 가져올 수 있고,
          또 querystring이라는 모듈의 parse 함수를 이용해서 정보를 객체화할 수있다.
        */
        request.on('data', function(data){
          body = body + data;
        });
        request.on('end', function(){
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description;
          fs.writeFile(`./01-Node.js/data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        });
        // 사용자가 어떤 페이지에서 어떤 처리를 한 다음에 사용자를 다시 다른 페이지로 튕겨보내는 것을 redirection이라고 한다.
      } else if(pathname === '/update'){
        fs.readdir('./01-Node.js/data', function(error, filelist){
          fs.readFile(`./01-Node.js/data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list, 
              `
              <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                <p>
                  <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
              `,
              `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
            );
            response.writeHead(200); // 200이라는 숫자를 서버가 브라우저에게 주면, 파일이 성공적으로 전송됐다라는 의미이다.
            response.end(template);
          });
        });
      } else if(pathname === '/update_process'){
        var body = '';
        request.on('data', function(data){
          body = body + data;
        });
        request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`./01-Node.js/data/${id}`, `./01-Node.js/data/${title}`, function(err){
            fs.writeFile(`./01-Node.js/data/${title}`, description, 'utf8', function(err){
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          });
        });
      } else{
        response.writeHead(404);  // 파일을 찾을 수 없는 경우, 웹 서버는 404라는 번호를 돌려준다.
        response.end('Not found');
      }  
});
app.listen(3000);