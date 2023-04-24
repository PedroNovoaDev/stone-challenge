const axios = require('axios');
const baseURL = 'https://api.countapi.xyz';

module.exports = {
    showTonVisitCount: (req, res) => {
        // #swagger.tags = ['Count']
        // #swagger.description = Show Ton website visit count at the moment of the call'
        axios.get(baseURL + '/get/ton.com.br')
            .then(response => {
                res.send(response.data);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    },

    incrementTonVisitCount: (req, res) => {
        // #swagger.tags = ['Count']
        // #swagger.description = 'Increment Ton website visit count at the moment of the call.'
        axios.get(baseURL + '/hit/ton.com.br')
            .then(response => {
                res.send(response.data);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    }
};