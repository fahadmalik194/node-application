const app = require('express')();

const { PORT } = require("../config");
const port = process.env.PORT || PORT;

app.get('/', (req, res) => {
  res.send('Hello from Node Application!!')
})

app.listen(port, () => console.log(`Server is up on port ${port}`))