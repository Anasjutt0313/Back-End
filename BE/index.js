const http = require('http');
const books= [{
    author:"anass",
    year:1851,
    genre:"adventure"
}

]

const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url == '/login'){
    // console.log("login successfull");
    res.end(JSON.stringify(books));

    }
    else if(req.method === 'GET'&& req.url=='/register'){
        console.log("registration successful")
    }

})
const port=8000;
server.listen(port,()=>{
    console.log('listening on port 8000')
})