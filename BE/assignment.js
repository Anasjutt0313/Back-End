const express = require('express');
const books= [{
    id:1,
    title:"man",
    author:"anass",
    year:1851,
    
}

]


const app = express();
const PORT = 3000;



    
app.get('/login', (req, res) => {
    res.send('Welcome to the Book API');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/add', (req, res) => {
    
    res.send('Book added successfully');
});
app.get('/list', (req, res) => {
    res.json(books);
});
 
app.put('/update', (req, res) => {
    res.send('update the book');
});

app.delete('/update', (req, res) => {
    res.send('delete the book');
});


