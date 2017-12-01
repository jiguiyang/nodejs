var superagent = require('superagent'); 
var cheerio = require('cheerio');
var async = require('async');

console.log('爬虫程序开始运行......');

// 第一步，发起getData请求，获取所有4星角色的列表
superagent
	.post('http://gs.amac.org.cn/amac-infodisc/api/pof/manager?rand=0.2561815793828168&page=0&size=20')
	.send({ 
		// 请求的表单信息Form data
		fundScale:  {to: "10000", from: "0"}, 
		fundType: "私募证券顾问管理"})
   	// Http请求的Header信息
   	.set('Accept', 'application/json, text/javascript, */*; q=0.01')
   	.set('Content-Type','application/json')
    .end(function(err, res){  
    	
    	// 请求返回后的处理
    	// 将response中返回的结果转换成JSON对象
       	var heroes = JSON.parse(res.text);  
       	// 并发遍历heroes对象
		async.mapLimit(heroes, 1, 
			function (hero, callback) {
			// 对每个角色对象的处理逻辑
				console.log(hero);
		 		var heroId = hero[0].managerName;	// 获取角色数据第一位的数据，即：角色id
				//console.log(hero);
		    	console.log('公司名称：' + heroId);
			}, 
			function (err, result) {
				console.log('抓取数量：' + heroes.length);
			}
		);

    }); 


