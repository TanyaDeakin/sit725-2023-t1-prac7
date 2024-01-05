console.log("Entered dbConnection.js file")
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

module.exports = client;