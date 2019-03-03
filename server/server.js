// Import the server configuration file
var config 			= require('./config'),

    /* Import the ExpressJS framework for Middleware/routing */
    express 		= require('express'),

    /* Import Mongoose for enabling communication with MongoDB and
       management of data handling tasks */
	mongoose 		= require('mongoose'),

    /* Import Body Parser module for enabling data from POST requests
       to be extracted and parsed */
	bodyParser      = require("body-parser"),

    /* Handle for storing the ExpressJS object */
	app 			= express(),

    /* Use ExpressJS Router class to create modular route handlers */
	apiRouter     	= express.Router(),

    /* Define Mongoose connection to project's MongoDB database */
	connection 		= mongoose.connect(config.database, { useNewUrlParser: true }),

    /* Import Schema for managing MongoDB database communication
       with Mongoose */
	gallery         = require('./models/gallery');

/*
  Manage size limits for POST/PUT requests
 */
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));




/*
   Manage CORS Access for ALL requests/reponses
 */
app.use(function(req, res, next)
{
   /* Allow access from any requesting client */
   res.setHeader('Access-Control-Allow-Origin', '*');

   /* Allow access for any of the following Http request types */
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   /* Set the Http request header */
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});


/* Manage ALL Http POST requests to the specified route */
apiRouter.post('/gallery', function(req, res)
{

   /* Retrieve the posted data from the Request object and assign
      this to variables */
   var image			=	req.body.image;

   /* Use the gallery model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
   gallery.create({ Image : image },
   				 function (err, small)
   {

      /* If we encounter an error log this to the console*/
      if (err)
      {
         console.dir(err);
      }

      /* Document was successfully created so send a JSON encoded
         success message back with the Router Response object */
      res.json({ message: 'success' });

   });

});