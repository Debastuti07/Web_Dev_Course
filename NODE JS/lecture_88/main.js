const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About us !')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact us!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//   res.send('Hello Javascript!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro to python from the db
//   res.send('Hello Python!')
// })

//for URL: http://localhost:3000/blog/intro-to-tuti/intro-to-moina?mode=dark&ln=eng
app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch {slug} from the db
    console.log(req.params);//will output {slug: 'intro-to-tuti', second: 'intro-to-moina'}

    console.log(req.query);//will output {mode: 'dark', ln: 'eng'}
    
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
