const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/rooms/:id', express.static('public'))

// JENNY
// app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://3.22.194.10:1984', changeOrigin: true }))

// app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:1985', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://18.222.249.216:1985', changeOrigin: true }))

// DANE
app.use('/api/headerService/:id', createProxyMiddleware({ target: 'http://localhost:5001', changeOrigin: true }))

// PAULY
app.use('/propertyDetails/:pId', createProxyMiddleware({ target: 'http://localhost:5545', changeOrigin: true }))

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})