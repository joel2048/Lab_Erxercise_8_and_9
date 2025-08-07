const calculatorRoutes = require('./routes/calculatorRoutes.js');

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const express = require('express')
const app = express()
const app2 = express()
const port = 3000
const port2 = 8000

app.use('/', express.static('public'))
//app1
app.get('/', (req, res) => {
res.send('This is app 1')
})

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})

app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

//app2

app2.get('/', (req, res) => {
res.send('This is app 2')
})

app2.listen(port2, () => {
console.log(`Example app listening
at http://localhost:${port2}`)
})