const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/rooms/:id', express.static('public'))

app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))

app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:1985', changeOrigin: true }))

app.use('/api/headerService/:id', createProxyMiddleware({ target: 'http://localhost:5001', changeOrigin: true }))

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})