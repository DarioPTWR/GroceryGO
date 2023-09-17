const express = require('express');
const cors = require('cors');
const usersDB = require('../model/usersDB');
const spoonacularAPI = require('../model/spoonacularAPI');

const app = express();

app.use(express.json()); // Middleware to parse incoming requests with JSON payloads
app.use(cors())

// usersDB
app.post('/addUser', (req, res) => {
    usersDB.addUser(req.body, (err, result) => {
        if(err){
            if(err.code === "23505"){
                errorVar = err.constraint.split("_")[1];
                res.status(409).send(errorVar[0].toUpperCase() + errorVar.slice(1) + " already exists.")
            }else{
                res.status(500).send("An error occurred. Please try again later.")
            }
        }else{
            res.status(201).send(result)
        }
    })
})

app.post('/verifyUser', (req, res) => {
    usersDB.verifyUser(req.body, (err, result) => {
        if(err){
            if(err.code === 0){
                res.status(403).send('Username, E-mail or Password is incorrect.')
            } else {
                res.status(500).send("An error occurred. Please try again later.")
            }
        }else{
            res.status(200).send(result)
        }
    })
})

// spoonacularAPI
app.get('/getInfoByUPC/:upc', (req, res) => {
    spoonacularAPI.getInfoByUPC(req.params.upc, (err, result) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})

module.exports = app;