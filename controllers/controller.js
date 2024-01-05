console.log("Entered controllers/controller.js file");
let collection = require('../models/picture');

const postPicture = (req,res) => {
    console.log('POST /api/pictures - Controller - Incoming request');
    let picture = req.body;
    console.log('Received picture data:', picture);

    collection.postPicture(picture, (err, result) => {
        if (!err) {
            console.log('Picture successfully posted:', result);
            res.json({statusCode:201, data:result, message:'success'});
        } else {
            console.error('rror posting picture:', err);
            res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
        }
    });
}

const getAllPictures = (req,res) => {
    console.log('GET /api/pictures - Controller - Incoming request');
    collection.getAllPictures((err,result)=>{
        if (!err) {
            console.log('Successfully fetched all pictures:', result);
            res.json({statusCode:200, data:result, message:'get all pictures successful'});
        } else {
            console.error('Error fetching all pictures:', err);
            res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
        }
    });
}

module.exports = {postPicture,getAllPictures}