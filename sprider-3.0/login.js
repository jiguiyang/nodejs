var superagent = require('superagent'); 
var cheerio = require('cheerio');


superagent
    .post('http://172.16.234.141:8082/admin/login')
    .send('username=admin&password=123456')

    .set('Accept', 'application/json, text/javascript, */*; q=0.01')
    .set('Accept-Encoding', 'gzip, deflate')
    .set('Accept-Language', 'zh-CN,zh;q=0.9')
    .set('Connection','keep-alive')
    .set('Host','172.16.234.141:8082')
    .set('Origin','http://172.16.234.141:8082')
    .set('Referer','http://172.16.234.141:8082/admin/login')
    .set('X-Requested-With','XMLHttpRequest')
    .set('Content-Length','29')
    .set('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
    .set('Cookie','JSESSIONID=207437EFB0778E5186DB3008785A371D')
    .set('User-Agent','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36')

    .end(function(err, res){  
        // 请求返回后的处理
        //console.log(res.text);
        // 将response中返回的结果转换成JSON对象
        setTimeout(
            function(){
                var companylist = JSON.parse(res.text); 

                console.log(companylist);
            },5000);
        

    }); 

