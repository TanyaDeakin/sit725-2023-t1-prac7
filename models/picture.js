console.log("Entered models/picture.js file");
let client = require('../dbConnection');

let collection = client.db().collection('Picture');
console.log("Assigned db collection as Picture");


function postPicture(picture, callback) {
    console.log('Model - postPicture - Inserting picture:', picture);
    collection.insertOne(picture,callback);
}

function getAllPictures(callback) {
    console.log('Model - getAllPictures - Fetching all pictures');
    collection.find({}).toArray((err, result) => {
        if (err) {
            console.error('Model - getAllPictures - Error fetching pictures:', err);
        } else {
            console.log('Model - getAllPictures - Successfully fetched all pictures:', result);
        }
        callback(err, result);
    });
}

module.exports = {postPicture,getAllPictures};