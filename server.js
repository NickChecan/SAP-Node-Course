const express = require('express')
const bodyParser = require("body-parser");
const app = express()

const port = 3000

// Prepare app to automatically understand content-type json 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get request example
app.get('/', (req, res) => res.send("Hello World!"))

// Request Example: http://localhost:3000/read/1?name=Nicholas
app.get('/read/:num', (req, res) => {
    let name = req.query.name
    console.log(name)
    let num = req.params.num
    if (num > 5) res.send("Greater than 5!")
    else res.send("Less than 5!")
})

// Post request example
app.post('/save', (req, res) => {
    let name = req.body.name
    let number = req.body.number
    console.log("Received name: " + name + ". Received number: " + number)
    res.send("Ok!")
    res.status(204)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))