const express = require('express');
const app = express();

app.listen(8080, "0.0.0.0", () => {
    console.log("Server Start");
});

app.get('/pet', function(req, res){
    res.send('펫용품 쇼핑 가능한 사이트입니다');
});

app.get('/beauty', function(req, res){
    res.send('뷰티쇼핑 페이지 입니다');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html');
});