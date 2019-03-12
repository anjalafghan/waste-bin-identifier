const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./uploads/');
      },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
      }
});
var upload = multer({ storage: storage }).single('profile');

router.post('/profile', function (req, res) {
    // @ts-ignore
    upload(req, res, function (err) {
        console.log(req.file);
      if(err){
          return err;
      }
    })
  })
module.exports = router;