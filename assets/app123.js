'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('ok');
})
server.listen(3001, () => {
    console.log('开启3001端口服务器')
})