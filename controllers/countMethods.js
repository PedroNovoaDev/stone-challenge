const axios = require('axios');

module.exports = {
    showTonVisitCount: (req, res) => {
        axios.get('https://api.countapi.xyz/get/ton.com.br')
            .then(response => {
                res.send(response.data);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    }
};