const express = require('express')
const app = express()
const PORT = 3000

let data = ['John'];
//middleware
app.use(express.json())

//Website endpoints
app.get('/', (req, res) => {
    res.send(`
        <body style=
        "background: lightblue;
        color: pink;
        ">
            <h1>Welcome to the home page</h1>
            <p>
                ${JSON.stringify(data)}
                <a href="/dashboard">Dashboard</a>
            </p>
        </body>
        `)
})



app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href="/">Home</a>
        </body>
        
        
        `)
})

//API endpoints

app.get('/api/data', (req, res) => {
    console.log('This one for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    console.log(newEntry);
    data.push(newEntry.name);
    res.sendStatus(201);
})

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log('deleted end element');
    res.sendStatus(203);
})


app.listen(PORT, () => console.log(`Server started on: ${PORT}`))