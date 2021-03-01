const express = require('express');
const mongoose = require('mongoose');
const app =express();

const bookRoutes = require('./api/routes/books');
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://mohit:mohit@cluster0.x6vld.mongodb.net/Cluster0?retryWrites=true&w=majority',{
    useMongoClient: true
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/books',bookRoutes);
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message,
        }
    });
})
module.exports = app;
