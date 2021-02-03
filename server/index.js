const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('public'))

// REVIEWS
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))

app.use('/reviews/overallRating/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))

app.use('/reviews/totalReviews/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))

// MOREPLACES
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:1985', changeOrigin: true }))

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})