var express = require('express')
var bodyParser = require('body-parser');

var hbs = require('express-handlebars')
var path = require('path')
var routes = require('./routes.js');

var app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))


app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.render('home')
})
app.get('/getdata', routes.getdata)

app.post('/searchFirstName', routes.searchFirstName)

app.post('/update', routes.update)
app.post('/delete', routes.deleteUser)

app.post('/addData', routes.addData)

app.post('/joinQuery', routes.joinQuery)

app.post('/tripleSearch', routes.tripleSearch)

app.listen(3000, function () {
  console.log('Listening on 3000')
})
