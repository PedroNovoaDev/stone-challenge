const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/endpoints.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Stone Challenge API",
        description: "This API was developed as part of a challenge for a job position in Stone",
        contact: {
            name: "Pedro Octávio Silva Novoa",
            url: "https://github.com/PedroNovoaDev",
            email: "pedronovoa.21@gmail.com"
          },

    },
    host: "e4xpm95re7.us-east-1.awsapprunner.com",
    basePath: "/",
}

swaggerAutogen(outputFile, endpointsFiles, doc)