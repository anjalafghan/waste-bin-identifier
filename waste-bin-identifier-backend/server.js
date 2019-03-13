// @ts-nocheck
const express = require('express');
const mongoose = require('mongoose');
const dbconfig = require('./config/secret');
const cookie = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const uploadsdir = require('path').join(__dirname,'/uploads');

const app = express();
const upload_path ='./uploads';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, upload_path);
      },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
});
var upload = multer({ storage: storage });

app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({extended: true, limit: '100mb'}))
app.use(cookie());
app.use(cors());
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT', 'OPTIONS');
   res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept, Authorization',
   );
   next();
});
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.url, { useNewUrlParser: true });
//data_routes
const Bindata = require('./routes/data_routes');
// const image = require('./routes/image');
const Auth = require('./routes/auth_routes');
app.use('/api/wastebin', Bindata);//*
// app.use('/api/wastebin',image);
app.use('/api/wastebin',Auth);
app.listen(3000, () => {
    console.log('Running on port 3000');

});
