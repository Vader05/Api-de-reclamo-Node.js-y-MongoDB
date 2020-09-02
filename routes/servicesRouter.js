const express = require('express');
const Services = require('../models/service');

const serviceRouter = express.Router();


serviceRouter.route('/')
.get((req, res, next) => {
    Services.find({})
    .then((promotions) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(promotions) 
    }, (err) => next(err)) 
    .catch((err) => next(err))
})

module.exports = serviceRouter;
