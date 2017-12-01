
var schedule = require("node-schedule");
//例如：2014年2月14日，15:40执行
// var date = new Date(2017,11,24,9,27,0);
// var j = schedule.scheduleJob(date, function(){
// 	console.log("执行任务");
// });
//取消任务
//j.cancel();

//例如：每小时的40分钟执行
var rule = new schedule.RecurrenceRule();
rule.minute = 38;
console.log("等待任务");
var j = schedule.scheduleJob(rule, function(){
	console.log("执行任务");
});

//例如：周一到周日的20点执行
// var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(1, 6)];
// rule.hour = 9;
// rule.minute = 33;
// console.log("等待任务");
// var j = schedule.scheduleJob(rule, function(){
// 	console.log("执行任务");
// });