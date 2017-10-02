//Connect to our mongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/calevents', { useMongoClient: true});
