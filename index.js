
// protocolo cliente-servidot, sin estado => HTTP
// 2. MEtodos definidos (GET, POST, PUT, ...)
// 3. syntasis

const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json()) //middlewares //parsea la peticion como un objeto que podemos entender en javascript
        
// leer la informacion del archivo de koders
app.get('/koders', (request, response) => {
  const kodersData = fs.readFileSync('koders.txt', 'utf8')
  // establese el header de la respuesta Content-Type: aplication/json
  // stringify del objeto
  // response.end
  response.json({
    success: true,
    message: 'Koder API',
    data: kodersData
  })
})

// agregar un registro de koders al archivo
app.post('/koders', (request, response) =>{

  console.log('body: ', request.body)

  console.log('name: ', request.body.name)

  //fs.appendFileSync('koders.txt', `\n${request.body.name}, ${request.body.age}` , 'utf8')

  const koder = "\n"+request.body.name+', '+request.body.age
  fs.appendFileSync('koders.txt', koder , 'utf8')

  response.json({
    success: true,
    data: request.body
  })
  //response.send('post a koders')
})

app.listen(8080, () => {
  console.log('server listening on port 8080')
})
