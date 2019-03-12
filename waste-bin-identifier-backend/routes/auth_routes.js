const express = require('express');
const router = express.Router();

const AuthCtrl = require('../controllers/auth');
router.post('/authen', AuthCtrl.Login);
module.exports = router;