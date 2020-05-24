const express = require('express')
const http = require('http')
const ws = require('ws')

const app = express()

const server = http.createServer(app)

app.get('/', (req, res) => {
    res.send('hello')
})

let clients = []


const wsserver = new ws.Server({server: server, path: '/chat'})

wsserver.on('connection', (ws) => {
    console.log('connection started')
    clients.push(ws);
    ws.on('message', (msg) => {
        clients.forEach(client => {
            if (client !== ws) {
                try {
                    client.send(JSON.stringify({content: msg, me: false}));
                } catch (error) {
                    clients = clients.filter(c => c !== ws)
                }
            }
        })
    })

    

    // ws.send('hi')
})



server.listen(4000)