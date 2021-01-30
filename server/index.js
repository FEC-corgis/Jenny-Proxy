const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')

app.use(express.static('public'))


app.get('/propId/:id', async (req, res) => {
  axios(`http://localhost:1984${req.path}`)
  .then(data => {
    console.log('DATA', data)
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})