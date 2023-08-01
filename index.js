// Import thư viện Express
const express = require('express');

// Tạo một instance của Express
const app = express();

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
    res.send('Chào mừng đến với trang chủ!');
});

// Định nghĩa route cho trang "about"
app.get('/about', (req, res) => {
    res.send('Đây là trang giới thiệu');
});

// Chạy server trên cổng 3000
app.listen(3000, () => {
    console.log('Server đang lắng nghe trên cổng 3000...');
});
