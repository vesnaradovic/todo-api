// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //delete many from Users
  // db.collection('Users').deleteMany({name: 'vesna'}).then((result) => {
  //   console.log(result);
  // });

  //find one and delete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b2f609013a3142ded8cb462")
  }).then((results) => {
    console.log(JSON.stringify(results,undefined, 2));
  });

  // db.close();
});
