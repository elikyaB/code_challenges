const express = require('express')
const app = express()
const port = 6969
// d

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/test', (req,res) => {
    res.send("here's your info")
})

app.get('/plant/:id', (req,res) => {
    res.send(plants[req.params.id])
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})