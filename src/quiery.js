const mongoose = require('./server');
const {ObjectID} = require('mongodb');

const {Todo} = require('./models/Todo');
const {User} = require('./models/User');

// var id = '5dd975a9abeb0b191078ba7foo';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log(todos);
// });
//


// Todo.findOne({_id:id}).then((todo)=>console.log(todo));

// Todo.findById(id).then((todo)=>console.log(todo));

User.find({
    name:"Pratik Chauhan"
}).then((users)=>{console.log(users.length)});