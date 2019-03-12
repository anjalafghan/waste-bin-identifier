const express = require('express');
const router = express.Router();

const DataCtrl = require('../controllers/data');
router.post('/bindata',DataCtrl.CreateBin);
module.exports = router;