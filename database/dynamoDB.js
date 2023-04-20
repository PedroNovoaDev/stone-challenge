const AWS = require('aws-sdk');
let dynamoDb;

function init() {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    const options = {
        region: process.env.AWS_REGION
    };

    dynamoDb = new AWS.DynamoDB.DocumentClient(options);
}

function addNewUser(user) {
    const params = {
        TableName: 'stone-users',
        Item: user,
    };

    return dynamoDb.put(params).promise();
};

function searchUserById(userId) {
    const params = {
        TableName: 'stone-users',
        Key: {
            id: userId,
        },
    };

    return dynamoDb.get(params).promise();
};

module.exports = { init, addNewUser, searchUserById };