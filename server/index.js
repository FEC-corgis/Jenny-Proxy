const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const path = require('path')

app.use(cors())

// DANE
app.use('/api/headerService/:propertyId', createProxyMiddleware({ target: 'http://54.211.95.226:5001', changeOrigin: true }))

app.use('/api/hostedByService/:propertyId', createProxyMiddleware({ target: 'http://54.237.132.122:5002', changeOrigin: true }))

// PAULY
app.use('/propertyDetails/:pId', createProxyMiddleware({ target: 'http://13.56.218.102:5545', changeOrigin: true }))

app.use('/map/:pId', createProxyMiddleware({ target: 'http://54.215.197.139:4454/', changeOrigin: true }))

// JENNY
// app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://3.20.69.232:1984', changeOrigin: true }))

// app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:1985', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://3.140.48.105:1985', changeOrigin: true }))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})