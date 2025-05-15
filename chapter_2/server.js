const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log("Hit endpoint", req.method);
    res.sendStatus(200)
})

app.get('/dashboard', (req, res) => {
    console.log("Dashbaord")
    res.send("Hi")
})

app.listen(PORT, () => console.log(`Server started on: ${PORT}`))