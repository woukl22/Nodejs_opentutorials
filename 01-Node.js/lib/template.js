module.exports = {
    // 프로퍼티: 객체에 있는 값 하나하나를 프로퍼티라고 부른다.
    HTML: function(title, list, body, control){  
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB2 - ${title}</title>
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
    }, list: function templateList(filelist){
      var list = '<ul>';
      var i = 0;
      while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        i = i + 1;
      }
      list = list+'</ul>';
      return list;
    }
  /*
    함수는 재사용할 수 있는 껍데기 정도로 이야기할 수 있다.
    달라질 수 있는 부분만 바꾸는 걸 통해 재사용할 수 있다.
  */
  }