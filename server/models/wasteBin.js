var mongoose      = require('mongoose');

Schema            = mongoose.Schema,

wasteBinSchema    = new Schema({

  // username        :{type: String, required: true},
  barcode         :{type: String, required: true},
  // condition       :{type: String, required: true},
  // latitude        :{type: String, required: true},
  // longitude       :{type: String, required: true},
  // description     :{type: String},
  // date            :{type: Date, default:  Date.now}

});

module.exports = mongoose.model('wasteBin',wasteBinSchema);
