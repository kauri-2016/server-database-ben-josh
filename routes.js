var bodyParser = require('body-parser');

var config = require('./knexfile')

var knex = require('knex')(config.development)

module.exports = {
  getdata: getdata,
  searchFirstName: searchFirstName,
  addData: addData,
  update: update,
  deleteUser: deleteUser,
  joinQuery: joinQuery
}

function getdata(req, res) {

  knex('users')
    .then(function (data) {
      var model = {
        people: data
      }
      res.render('getdata', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}

function searchFirstName(req, res) {
  var last = req.body.last
  knex('users').where('lastName', last)
    .then(function (data) {
      var item = data[0]
      res.render('searchFirstName', item)
    })
    .catch(function (error) {
      console.error(error)
    })
}

function addData(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username
  knex('users')
    .insert({
      firstName: userFirstName,
      lastName: userLastName,
      username: userUsername
    })
    .then(function (response) {})
    .catch(function (error) {
      console.error(error)
    })
  knex('users')
    .then(function (data) {
      var model = {
        people: data
      }
      res.render('addData', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}

function update(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username
  var userId = Number(req.body.id)
  knex('users')
    .where({
      id: userId
    })
    .update({
      firstName: userFirstName,
      lastName: userLastName,
      username: userUsername
    })
    .then(function (response) {
      // console.log(response)
    })
    .catch(function (error) {
      console.error(error)
    })
  knex('users')
    .then(function (data) {
      var model = {
        people: data
      }
      res.render('update', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}


function deleteUser(req, res) {
  var userId = Number(req.body.id)
  knex('users')
    .where({
      id: userId
    })
    .del()
    .then(function (response) {})
    .catch(function (error) {
      console.error(error)
    })
  knex('users')
    .then(function (data) {
      var model = {
        people: data
      }
      console.log(model);
      res.render('delete', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}


function joinQuery(req, res) {
  var userId = Number(req.body.ID)
  knex('users')
    .where({
      profile_id: userId
    })
    .join('profile', 'users.profile_id', '=', 'profile.id')
    .select('users.id', 'users.firstName', 'profile.nickName', 'profile.lucky_number')
    .then(function (response) {
      var model = {
        people: response
      }
      res.render('joinQuery', model)
    })
    .catch(function (error) {
      console.error(error)
    })




}

function table2(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username
  var userId = Number(req.body.id)
  knex('users')
    .join('users', 'users.id', '=', 'lastName.user_id')

}
