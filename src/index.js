const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('../routes/endpoints');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/', routes);

app.listen(3001, () => {
    console.log('listening on port 3001');
});