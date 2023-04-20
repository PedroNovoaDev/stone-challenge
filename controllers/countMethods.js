const axios = require('axios');
const baseURL = 'https://api.countapi.xyz';

module.exports = {
    showTonVisitCount: (req, res) => {
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