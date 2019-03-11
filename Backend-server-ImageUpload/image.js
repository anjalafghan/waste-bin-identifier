"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
;
// Actual DB model
exports.imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    desc: String,
    created: { type: Date, "default": Date.now }
});
exports.Image = mongoose.model('Image', exports.imageSchema);
