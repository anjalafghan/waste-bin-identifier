var config  = require('./config'),
    express     = require('express'),
    fs          = require("fs"),
    mongoose    = require('mongoose'),
    bodyParser  = require("body-parser"),

    app         = express(),
    apiRouter   = express.Router(),
    path        = require('path'),
    connection  = mongoose.connect(config.database, { useMongoClient: true}),
    wasteBin     = require('./models/wasteBin');





//Size for POST request

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(function(req, res, next)
{
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

apiRouter.post('/wasteBin',function(request, response) {

  var barcode                 = request.body.barcode;
      // condition               = request.body.condition,
      // latitude                = request.body.latitude,
      // longitude               = request.body.longitude,
      // description             = request.body.description,
      // date                    = Date.now();


wasteBin.create({ barcode                 :barcode},
                  // condition               :condition,
                  // latitude                :latitude,
                  // longitude               :longitude,
                  // description             :description,
                  // date                    :date },

                  function (err,small) {
                    if (err) {
                      console.dir(err);

                    }

                  res.json({message:  'success'});

                });

});

app.use('/api', apiRouter);
app.listen(config.port);
