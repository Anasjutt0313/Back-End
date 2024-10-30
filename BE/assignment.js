const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:");
});


const books= [{
    id:1,
    title:"man",
    author:"anass",
    year:1851,
    
}

]




    
app.get('/login', (req, res) => {
    res.send('Welcome to the Book API');
});

app.get('/list', (req, res) => {
    res.send(books);
});

app.post('/add', (req, res) => {
    
    res.send('Book added successfully');
});

 
app.put('/update', (req, res) => {
    res.send('update the book');
});

app.delete('/update', (req, res) => {
    res.send('delete the book');
});


