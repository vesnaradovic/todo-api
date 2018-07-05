var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);



//when someone requires this file, they're going to have mongoose configured and they're gonna get it back; 
//they get the mongoose variable that comes from a library
module.exports = {mongoose};


