const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;


app.use(bodyParser.json());


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

    
// app.get('/login', (req, res) => {
//     res.status(200).send('Welcome to the Book API');
// });

app.get('/list', (req, res) => {
    res.status(200).json({books});
});

app.post('/add', (req, res) => {
    const data = req.body;
    books.push(data)
    res.json({Array:books})
    
    
});

 
app.put('/put/:id', (req, res) => {
    const v = req.params.id;
    books[v].title="bakr"
    res.status(200).json(books);
});

app.delete('/update', (req, res) => {
    res.status(200).send('delete the book');
});


