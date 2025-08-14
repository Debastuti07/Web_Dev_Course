const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('This is about page!')
})
app.get('/cwd', (req, res) => {
  res.send('This is CWD')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
