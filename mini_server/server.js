const express = require('express');
const multer = require('multer');

let server = express();
server.listen(8080);

let multerObj = multer({
    dest: './upload'
});
server.use(multerObj.any());

server.get('/tags', (req, res) => {
    res.send(['推荐', '影视', '音乐', '搞笑', '娱乐', '生活', '科技', '体育']);
});

server.post('/uploadphoto', (req, res) => {
    console.log(req.files);
    res.send('ok');
});