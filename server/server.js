const express = require('express');
const bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
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
