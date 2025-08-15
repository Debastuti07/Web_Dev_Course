const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const shop = require('./routes/shop')



app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("hey ...its a get request");
    
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log("hey ...its a post request");
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("hey ...its a put request");
    res.send('Hello World put!')
})
app.delete('/', (req, res) => {
    console.log("hey ...its a delete request");
    res.send('Hello World delete!')
})
app.get("/index",(req,res)=>{
    console.log("heyyy ...my get request");
    res.sendFile('templates/index.html',{root:__dirname})
    //sendfile should give the path or dir name to run properly otherwise processor can't understand where thr actual file situated ...it will throw error
})
app.get("/api",(req,res)=>{
    console.log("heyyy ...my json request");
    res.json({a:1,b:2,c:3,d:4})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
