"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var image_1 = require("./image");
var path = require("path");
var fs = require("fs");
var del = require("del");
// Upload a new image with description
server_1.app.post('/images', server_1.upload.single('image'), function (req, res, next) {
    // Create a new image model and fill the properties
    var newImage = new image_1.Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;
    newImage.save(function (err) {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(201).send({ newImage: newImage });
    });
});
// Get all uploaded images
server_1.app.get('/images', function (req, res, next) {
    // use lean() to get a plain JS object
    // remove the version key from the response
    image_1.Image.find({}, '-__v').lean().exec(function (err, images) {
        if (err) {
            res.sendStatus(400);
        }
        // Manually set the correct URL to each image
        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }
        res.json(images);
    });
});
// Get one image by its ID
server_1.app.get('/images/:id', function (req, res, next) {
    var imgId = req.params.id;
    image_1.Image.findById(imgId, function (err, image) {
        if (err) {
            res.sendStatus(400);
        }
        // stream the image back by loading the file
        res.setHeader('Content-Type', 'image/jpeg');
        fs.createReadStream(path.join(server_1.UPLOAD_PATH, image.filename)).pipe(res);
    });
});
// Delete one image by its ID
server_1.app["delete"]('/images/:id', function (req, res, next) {
    var imgId = req.params.id;
    image_1.Image.findByIdAndRemove(imgId, function (err, image) {
        if (err && image) {
            res.sendStatus(400);
        }
        del([path.join(server_1.UPLOAD_PATH, image.filename)]).then(function (deleted) {
            res.sendStatus(200);
        });
    });
});
