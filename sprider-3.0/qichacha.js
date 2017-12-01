var superagent = require('superagent'); 
var cheerio = require('cheerio');
var fs = require('fs');
var cookies = JSON.parse(fs.readFileSync('./cookies.json').toString());

exports.dataForm = function (unique, companyname) {
	base(unique,companyname);
	touzi(unique,companyname);
};

//企业信息
var base = function(unique,companyname){
superagent
	.get('http://www.qichacha.com/company_getinfos')
	 // Http请求的Header信息
   	.set('Accept', 'text/html, */*; q=0.01')
   	.set('Content-Type','text/html; charset=utf-8')
   	.set('Cookie',cookies.cookie)
	.set('User-Agent','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36')
	
	.query({ unique: unique})
   	.query({ companyname: companyname})
   	.query({ tab: 'base' })
    .end(function(err, res){  
    	// 请求返回后的处理
    	//console.log(res.text);

		console.log('企业名字：' + companyname);
    	// 获取爬到的详细页面内容
    	var $ = cheerio.load(res.text,{decodeEntities: false});       			
    	
    	//获取企业基本信息
    	console.log('-------企业基本信息------');
    	var basetable = $('#Cominfo .m_changeList td');  
    	if(basetable.length == 0){
    		console.log("无企业基本信息");
    	}
    	for (var i = 0; i <= basetable.length-1; ) {
    		console.log(basetable.eq(i).text().trim() + '\t' + basetable.eq(i+1).text().replace("查看地图","").replace("附近公司","").trim());
    		i=i+2;
    	}
    	
    	// basetable.each(function(item) {  
     //    	var cap = $(this);  
     //    	console.log(cap.text().trim());
    	// });
    	

		//获取股东信息
    	console.log('------企业股东信息-------');
    	var gudongtable = $('#Sockinfo .m_changeList td');  
    	if(gudongtable.length ==0){
    		console.log("无股东信息");
    	}
    	for (var i = 0; i <= gudongtable.length-1; ) {
    		console.log(gudongtable.eq(i).text().trim() + '\t' 
    			+ gudongtable.eq(i+1).text().trim() + '\t' 
    			+ gudongtable.eq(i+2).text().trim()+ '\t' 
    			+ gudongtable.eq(i+3).text().trim()+ '\t' 
    			+ gudongtable.eq(i+4).text().trim());
    		i=i+5;
    	}


    	//获取主要人员信息
    	console.log('------主要人员信息-------');
    	var membertable = $('#Mainmember .m_changeList td');  
    	if(membertable.length ==0 ){
    		console.log("无主要人员信息");
    	}
    	for (var i = 0; i <= membertable.length-1; ) {
    		console.log(membertable.eq(i).text().trim() + '\t' 
    			+ membertable.eq(i+1).text().trim());
    		i=i+2;
    	}

    }); 
};

//企业对外投资信息
var touzi = function(unique,companyname){
superagent
	.get('http://www.qichacha.com/company_getinfos')
	 // Http请求的Header信息
   	.set('Accept', 'text/html, */*; q=0.01')
   	.set('Content-Type','text/html; charset=utf-8')
	.set('Cookie',cookies.cookie)
	.set('User-Agent','Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36')
	
	.query({ unique: unique })
   	.query({ companyname: companyname })
   	.query({ tab: 'touzi' })
    .end(function(err, res){  
    	// 请求返回后的处理
    	//console.log(res.text);

		console.log('企业名字：' + companyname);
    	// 获取爬到的详细页面内容
    	var $ = cheerio.load(res.text,{decodeEntities: false});       			
    	
    	//获取企业基本信息
    	console.log('-------对外投资信息------');
    	var touzitable = $('#touzilist .m_changeList td');
    	if(touzitable.length == 0 ){
    		console.log("无对外投资信息");
    	}  
    	for (var i = 0; i <= touzitable.length-1; ) {
    		console.log(touzitable.eq(i).text().trim() + '\t' 
    			+ touzitable.eq(i+1).text().trim() + '\t' 
    			+ touzitable.eq(i+2).text().trim()+ '\t' 
    			+ touzitable.eq(i+3).text().trim()+ '\t' 
    			+ touzitable.eq(i+4).text().trim()+ '\t' 
    			+ touzitable.eq(i+5).text().trim());
    		i=i+6;
    	}

    }); 
};

