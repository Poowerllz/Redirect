const express = require('express');
const server = express();

server.listen('5500')

server.use(express.urlencoded({ extended: true }))

server.use(express.static("Public/Views"))
server.use(express.static("Public"))


server.get('/', function(req, res) {
    return res.send("Views/Index.html")
});
