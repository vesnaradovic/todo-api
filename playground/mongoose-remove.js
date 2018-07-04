const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}) everything removed

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */

//Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5b3caf1d585ddfdebc6cfb74'}).then((todo) => {
    console.log(todo);
})

//Todo.findByIdAndRemove

/* Todo.findByIdAndRemove('5b3caf1d585ddfdebc6cfb74').then((todo) => {
    console.log(todo);
}); */