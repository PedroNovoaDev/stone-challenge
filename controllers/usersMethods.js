const dynamodb = require('../database/dynamoDB');

module.exports = {
  addNewUser: (req, res) => {
    const user = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password
    };

    dynamodb.addNewUser(user).then(() => {

      console.log('User added successfully')

      res.sendStatus(200)
    });
  },

  searchUserById: (req, res) => {
    const id = req.body.id;

    dynamodb.searchUserById(id).then((result) => {

      console.log(result)

      res.json(result)
    });
  },
};