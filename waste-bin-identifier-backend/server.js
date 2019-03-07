// @ts-nocheck
const express = require('express');
const mongoose = require('mongoose');
const dbconfig = require('./config/secret');
const cookie = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}))
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
app.use('/api/wastebin', Bindata);//*

app.listen(3000, () => {
    console.log('Running on port 3000');
});