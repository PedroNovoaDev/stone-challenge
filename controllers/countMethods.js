const axios = require('axios');
const baseURL = 'https://api.countapi.xyz';
const auth = require('../lib/auth');

module.exports = {
    showTonVisitCount: (req, res) => {
        // #swagger.tags = ['Count']
        // #swagger.description = Show Ton website visit count at the moment of the call'
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        try {
            auth.verifyToken(token);

            axios.get(baseURL + '/get/ton.com.br')
                .then(response => {
                    res.send(response.data);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                });
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: 'Invalid token' });
        }
    },

    incrementTonVisitCount: (req, res) => {
        // #swagger.tags = ['Count']
        // #swagger.description = 'Increment Ton website visit count at the moment of the call.'
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        try {
            auth.verifyToken(token);

            axios.get(baseURL + '/hit/ton.com.br')
                .then(response => {
                    res.send(response.data);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                });
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
};