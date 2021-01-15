
const express = require('express')

const app = express()

app.get('/koders', (request, response) => {
  response.send('get a koders')
})

app.post('/koders', (request, response) =>{
  response.send('post a koders')
})

app.listen(8080, () => {
  console.log('server listening on port 8080')
})
