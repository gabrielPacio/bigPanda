const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const database = require('./database')

app.use(bodyParser.json())

app.delete('/comments/:id', function(req, res) {
    setHeader(res);
    const id = req.params.id
    database.remove(id)
    res.sendStatus(200)
})

app.put('/comments/:id', function(req, res) {
    setHeader(res);
    const comment = req.body.comment
    const id = req.params.id
    res.json(database.update(id, comment))
})


app.get('/comments', function (req, res) {
    setHeader(res);
  res.json(database.list())
})

app.listen(3000, function () {
  console.log('Comments server listening on port 3000!')
})

const allowCrossDomain = function(req, res, next) {
    setHeader(res);

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

const setHeader = function(res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}
