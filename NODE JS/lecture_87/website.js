const fs  = require('fs');
const http=require('http');

const port=process.env.PORT || 3000;
const server=http.createServer((req,response)=>{
    console.log(req.url);
    
    response.statusCode=200;
    response.setHeader('content-type','text/html');

    if(req.url=='/')
    {
        response.statusCode=200;
        const data=fs.readFileSync('index.html')
        response.end(data.toString());
    }
    else if(req.url=='/cwh')
    {
        response.statusCode=200;
        response.end('<h1>This is Tuti </h1> <p> This is a way to rock the world ! </p>');
    }
    else if(req.url=='/home')
    {
        response.statusCode=200;
        response.end('<h1>This is Homepage </h1> <p> This is tuti-homepage ! </p>');
    }
    else if(req.url=='/about')
    {
        response.statusCode=200;
        response.end('<h1>About Tuti </h1> <p> This is about tuti ! </p>');
    }
    else{
        response.statusCode=404;
        response.end('<h1>Not Found</h1> <p> This page is not found on this server! </p>');
    }
})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
}) 