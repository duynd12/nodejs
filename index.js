const express = require('express')
const app = express()

app.get('/news', function (req, res) {
    console.log(res);
  res.send('Hello World')
})

app.listen(3000)