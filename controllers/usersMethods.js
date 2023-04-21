const dynamodb = require('../database/dynamoDB');
const auth = require('../lib/auth');

module.exports = {
  addNewUser: (req, res) => {
    const user = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password
    };

    dynamodb.addNewUser(user).then(() => {

      console.log('User added successfully');
      const token = auth.generateToken(user);

      res.status(200).json({ token });
    }).catch(error => {
      console.log(error);
      res.sendStatus(500);
    });;
  },

  searchUserById: (req, res) => {
    const token = req.headers.authorization;
    const id = req.query.id;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      auth.verifyToken(token);

      dynamodb.searchUserById(id).then((result) => {

        console.log(result)

        res.status(200).json(result)
      }).catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  },
};