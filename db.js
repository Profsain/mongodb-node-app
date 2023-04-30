const { MongoClient } = require('mongodb'); // import MongoClient from mongodb

let dbConnection;

module.exports = {
    // create connection to mongodb
    // cbf is a callback function that is called when the connection is established or failed
    connectToDb: (cbf) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
            .then((client) => {
                dbConnection = client.db();
                return cbf();
            })
            .catch((err) => {
                console.log(err);
                return cbf(err);
            });
    },

    // get connection to mongodb
    getDb: () => dbConnection
};
