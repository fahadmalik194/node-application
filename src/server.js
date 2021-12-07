const express = require('express')
const app = express()
const { PORT } = require("../config")

const port = process.env.PORT || PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from Node Application!!')
})

app.post('/hello', (req, res) => {
  res.send(req.body.hello)
})

app.listen(port, () => console.log(`Server is up on port ${port}`))