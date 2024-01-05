console.log("Entered routers/router.js file");

let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    console.log('POST /api/pictures - Incoming request');
    controller.postPicture(req,res);
});

router.get('/', (req,res)=>{
    console.log('GET /api/pictures - Incoming request');
    controller.getAllPictures(req,res);
});

module.exports = router;