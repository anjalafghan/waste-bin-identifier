"use strict";
exports.__esModule = true;
var express = require("express");
var multer = require("multer");
var cors = require("cors");
var mongoose = require("mongoose");
// Generell properties
exports.UPLOAD_PATH = 'uploads';
exports.PORT = 3000;
// Multer Settings for file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, exports.UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
exports.upload = multer({ storage: storage });
// Initialise App
exports.app = express();
exports.app.use(cors());
// Load our routes
var routes = require('./routes');
// Setup Database
var uri = 'mongodb://localhost/wastebin';
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
// App startup
exports.app.listen(exports.PORT, function () {
    console.log('listening on port: ' + exports.PORT);
});
