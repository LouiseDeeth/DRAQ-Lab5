const express = require('express');
const app = express();
const port = 3000;

//changed message 
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//error handling to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//Add a route that accepts a name parameter in the URL and returns "Hello [name]".
//app.get('/hello/:name', (req, res) => {
//    const name = req.params.name;
//    res.send(`Hello ${name}`);
//});

//Add a route that accepts a name and surname parameter in the URL and returns "Hello [name + surname]".
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});