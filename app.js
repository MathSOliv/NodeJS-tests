"use  strict"

const { application } = require('express');
const express = require('express')
const EmpRoute = require('./routes/Employee');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-with, content-type, Accept');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH');
        return res.status(200).send({});
    }
    next();
})

app.use('/funcionarios', EmplRoute);

app.use((req, res, next) => {
    const customError = new Error('Request not Found.')
    customError.status = 404
    next(customError);
})

app.use((customError, req,res,next) => {
    res.status(customError.status || 500);
    return res.send({ msdgError: customError.message })
})

module.exports = app