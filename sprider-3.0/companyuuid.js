var superagent = require('superagent'); 
var cheerio = require('cheerio');
var fs = require('fs');
var cookies = JSON.parse(fs.readFileSync('./cookies.json').toString());
var arguments = process.argv.splice(2);

superagent
    .post('http://www.qichacha.com/gongsi_getList')
     // Http请求的Header信息
    //.send('key=小米&type=undefined')
    .send({ 
         // 请求的表单信息Form data
        key:  "小米" ,type: "undefined"})

    .set('Accept', '*/*')
    .set('Accept-Encoding', 'gzip, deflate')
    .set('Accept-Language', 'zh-CN,zh;q=0.9')
    .set('Connection','keep-alive')
    .set('Host','www.qichacha.com')
    .set('Origin','http://www.qichacha.com')
    .set('Referer','http://www.qichacha.com/')
    .set('X-Requested-With','XMLHttpRequest')
    .set('Content-Length','25')
    .set('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
    .set('Cookie',cookies.cookie3)
    .set('User-Agent','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36')

    .end(function(err, res){  
                // 请求返回后的处理
                //console.log(res.text);
                // 将response中返回的结果转换成JSON对象
                
            
                  
                        var companylist = JSON.parse(res.text); 

                        console.log(companylist);
                   
        
        //for (var i = 0; i <= companylist.length-1;i++) {
         //   console.log(companylist[i].KeyNo);
          //  console.log(companylist[i].Name.replace("<em>","").replace("</em>",""));
        //}

            });

