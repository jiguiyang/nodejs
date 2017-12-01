var superagent = require('superagent'); 
var cheerio = require('cheerio');
var async = require('async');

var fs = require('fs');

console.log('爬虫程序开始运行......');

superagent
	.post('http://person.amac.org.cn/pages/registration/train-line-register!list.action')
	.send('filter_EQS_OTC_ID=05&filter_LIKES_AOI_NAME=&page.searchFileName=registration&page.sqlKey=SELECT_LINE_PERSON_LIST&page.sqlCKey=SELECT_LINE_PERSON_SIZE&_search=false&nd=1511333100072&page.pageSize='+
		200+'&page.pageNo='+
		1 +'&page.orderBy=AOI.AOI_NAME&page.order=desc')
   	// Http请求的Header信息
   	.set('Accept', 'application/json, text/javascript, */*; q=0.01')
   	.set('Content-Type','application/x-www-form-urlencoded')
    .end(function(err, res){  
    	// 请求返回后的处理
    	// 将response中返回的结果转换成JSON对象
       	var heroes = JSON.parse(res.text); 
       	var company = heroes.result;
       	for (var i = 0; i <= company.length - 1; i++) {
       		console.log(company[i]);
       	}

       	console.log('公司数量：' + company.length);
		//console.log(company[1]);
		//console.log(company[199]);

		//写入到a.txt中
		fs.appendFile('a.txt', JSON.stringify(company), 'utf-8', function (err) {
            if (err) {
                console.log(err);
            }
        });


    }); 


