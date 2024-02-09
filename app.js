const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000;

app.use(express.json());
app.use(cors())
app.all('/*', allowCORS)

// To parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello Welcome to your code assitant!')
  })

  // Routes
let chatCompletion = require('./routes/ChatCompletionRoute.js');

app.use(chatCompletion);

async function allowCORS(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
    )
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  
    // intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      res.sendStatus(200)
    } else {
      next()
    }
  }
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })