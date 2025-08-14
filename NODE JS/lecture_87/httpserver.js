const { response } = require('express');
const http=require('http');

const port=process.env.PORT || 3000;
const server=http.createServer((req,response)=>{
    console.log(req.url);
    response.statusCode=200;
    response.setHeader('content-type','text/html')
    response.end('<h1>This is Tuti </h1> <p> This is a way to rock the world ! </p>');
})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
})