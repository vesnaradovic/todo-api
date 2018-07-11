const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    });
});

var hashedPassword = '$2a$10$tqOSgf30O0h3wZ657HcFMu0wWh4E8b7LGbjZ7.FKCQHSLwETdykJu';

bcrypt.compare('123!', hashedPassword, (err, res) => {
    console.log(res);
});

/* var data = {
    id: 10
} */

//this method takes the object, in this case the data with the user's id and it signs it, creates that hash and then
//returns the token value
/* var token = jwt.sign(data, '123abc');
console.log(token); */

//this method does the opposite, it takes that token and the secret and makes sure that the data was not manipulated
/* var decoded = jwt.verify(token, '123abc');
console.log('decoded',decoded) */

/* var message = "I am user number 3";
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};
var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

//json web token
var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash === token.hash) {
    console.log("Data was not changed")
} else {
    console.log("Data was changed, don't trust")
} */