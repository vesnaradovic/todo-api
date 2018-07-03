//library imports
const express = require('express');
//this one lets us send json to the server; the server then can take that json and something with it;
//body parser takes that string body and turns it into a javascript object
//setting it equal to the returning result requiring the library
const bodyParser = require('body-parser');


//local imports
//we require the mongoose file; returning result from the file we created
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
//we're getting user variable from the object that comes back from a call to require
var {User} = require('./models/user');

//stores our express application
var app = express();

//configure the middlewear
//app.use takes the middlewear, if we're writing custom middlewear, it will be a function; if we're using third-party,
//middlewear, we usually just access something off of the library;
//in this case bodyParser.json gets called as a function, where return value from this json method, 
//is a function and that is the middlewear we need to give to express
app.use(bodyParser.json());

//basic crud operation: create - read - update - delete
//when you want to create a resource, you use the post http method
//and you send that resource as the body; this means when we want to make a new todo, we're gonna send a json object,
//over to the server, that's gonna have a text property and the server is gonna get that text property, create a new model,
//and send the complete model with the id, completed, completedAt back to the client

//'/todos' for creating a new todo
//body parser will take your json converting it into an object and attaching it onto the req object
app.post('/todos', (req, res) => {
  //getting the body data that got sent from the client
  //sending json to our express app
  var todo = new Todo ({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000')
});




/* var newTodo = new Todo({
  text: 'Cook dinner'
});


//responsible for saving this into the db
newTodo.save().then((doc) => {
  console.log('Saved to do', doc)
}, (e) => {
  console.log('Unable to save todo')
}); */

/* var otherTodo = new Todo({
  //type casting: numbers and booleans will be wrapped up as string, althouth if we put object here, it will throw an err
  text: 'Something to do'
});

otherTodo.save().then((doc) => {
  console.log('Saved other todo', doc);
}, (e) => {
  console.log('Unable to save other todo')
}); */

// create new User model
// set up only email (require, trim, set type, min length of 1)



/* var user = new User ({
  email: 'vesna@example.com '
});

user.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user', e);
}); */

module.exports = {app};
