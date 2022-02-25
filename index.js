const express = require('express')
const app = express()
let jsonResponse = require('./refundTransaction.json')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log('Hello world get')
    res.send('Hi from express framework')
})

app.post('/', (req, res) => {
    console.log('New request receive from Bopos Suite')
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    res.send(JSON.stringify(jsonResponse))
})

app.listen(3001, () => {
    console.log('Servidor inicializado en el puerto 3001')
})