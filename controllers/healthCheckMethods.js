module.exports = {
    healthCheck: (req, res) => {
        // #swagger.tags = ['Health Check']
        // #swagger.description = Check health of the application.

        try {
            console.log('Application health check')
            res.sendStatus(200);
        } catch (error) {
            console.log(error)
        }
    },
};