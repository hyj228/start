var express =require('express');
var app =express();
 
console.log('123456789');
console.log('abcdef');

app.listen(8888, function(){
    console.log('服务已启动，8888端口');
})