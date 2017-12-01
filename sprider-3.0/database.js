var mysql = require('mysql');  

var TEST_TABLE = 'business_information';  
  
//创建连接  
var client = mysql.createConnection({  
  host     : '172.16.234.141',
  user     : 'root',
  password : '12345678',
  database : 'company'
});  

client.connect();
client.query(  
  'SELECT * FROM '+TEST_TABLE + ' where createdTime > \'2017-09-20\'',  
  function selectCb(err, results, fields) {  
    if (err) {  
      throw err;  
    }  
      
      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
              console.log(results[i].company_name +'\t'+ results[i].credit_code+'\t'+results[i].company_address);
          }
      }    
    client.end();  
  }  
); 