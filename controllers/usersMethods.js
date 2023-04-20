const dynamodb = require('../database/dynamoDB')

module.exports = {
  addNewUser: (req, res) => {
    const user = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password
    };

    dynamodb.addNewUser(user).then(() => {
      res.status(200)
    });
  }
};