var sql = knex('users')
  .where({
    id: userId
  })
  .update({
    firstName: userFirstName,
    lastName: userLastName,
    username: userUsername
  })
  // .then(function (response) {
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   console.error(error)
  // })
  .toSQL()
console.log(sql);
}
