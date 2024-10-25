const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

//error handling to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//Serve static assets: Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');//changed message 
});

//Add a route that accepts a name parameter in the URL and returns "Hello [name]".
//app.get('/hello/:name', (req, res) => {
//    const name = req.params.name;
//    res.send(`Hello ${name}`);
//});

//Add a route that accepts a name and surname parameter in the URL and returns "Hello [name + surname]".
//Access http://localhost:3000/hello/John/Doe in your browser. It should display "Hello John Doe".
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

//Add a movies route that returns a list of movie objects in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ myMovies:movies });
});

//path to index -  Access http://localhost:3000/index to view the HTML file.
const path = require('path');
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));//dirname gives current path of the directory I'm in
});

// handle the GET request for /name: in index
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

//Handle POST request for /name
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});