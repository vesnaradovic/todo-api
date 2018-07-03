var mongoose = require('mongoose');

//like schema
var Todo = mongoose.model('Todo', {
    text: {
      type: String, 
      required: true, 
      minLength: 1, 
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });


  //otherwise we cannot use this in the files that require it
  module.exports = {Todo};