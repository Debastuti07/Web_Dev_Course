const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
const blog = require('./routes/blog')

// app.use(express.static("public"))
app.use('/blog', blog)

//middleware 1 - logger for our application
app.use((req, res, next)=> {
    console.log(req.headers);
    req.megha="I am tuti";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
//   res.send("Hacked by Mmiddleware 1")
  next()
})
//Middleware 2
app.use((req, res, next)=> {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!' + req.megha)
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//middleware modify the match


//middle ware is 5 types ..
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware
