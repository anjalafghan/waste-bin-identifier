const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
       qrdata: { type: String },
       latitude: { type: Number },
       longitude: { type: Number },
       condition: { type: String },
       date: { type: Date },
       image: [{ type: String }],
       damage: { type: String}
      
});
module.exports = mongoose.model('Bindata', dataSchema);