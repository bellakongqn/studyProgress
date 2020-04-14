const express = require('express');
const multer = require('multer')
const app = express()
const fs = require('fs')

var upload = multer({ dest: 'upload/temp' })

app.use(express.static('./upload'))

app.get('/test', function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        code: 200
    }))
})

app.post('/api/upload', upload.array('files[]', 10), function(req, res) {
    console.log(req.files)
    res.setHeader('Content-Type', 'application/json')
    Promise.all(req.files.map(file => (new Promise(function(res, rej) {
        fs.writeFile('./upload/' + file.originalname, fs.createReadStream(file.path), 'binary', function(err) {
            if (err) {
                rej(err)
            } else{
                res('http://localhost:4000/' + file.originalname)
            }
        })
    }))))
        .then((filepaths) => {
            res.send(JSON.stringify({
                code: 200,
                data: filepaths
            }))
        })
        .catch(err => {
            res.send(JSON.stringify({
                code: 500,
                msg: err
            }))
        })
    
})

app.listen('4000')