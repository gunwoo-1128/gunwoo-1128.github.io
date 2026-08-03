// 라즈베리파이 서버 파일
const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('안녕하세요! 서버가 정상적으로 실행 중입니다.');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on ${PORT}`);
});