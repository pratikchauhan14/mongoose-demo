const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const {User} = require('./models/User');
const {Todo} = require('./models/Todo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log('Post data at todos' , req.body.text);
    const todo = new Todo({
        "text":req.body.text,
        completed:req.body.completed,
        completedAt:req.body.completedAt
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e.errors);
    })
});

app.post('/user',(req,res)=>{
    console.log('Post data at User' , req.body.email , req.body.name);
    const user = new User({
        email:req.body.email,
        name:req.body.name,
    });

    user.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e.errors);
    })
});

app.get('/todos',(req,res)=>{
   Todo.find().then((doc)=>{
       res.send({doc});
   },(e)=>{
       res.status(400).send(e);
   })
});

app.get('/user',(req,res)=>{
    User.find().then((doc)=>{
        res.send({doc});
    },(e)=>{
        res.status(400).send(e);
    });
});


app.listen(3000,()=>{
    console.log('Started on port 3000');
});