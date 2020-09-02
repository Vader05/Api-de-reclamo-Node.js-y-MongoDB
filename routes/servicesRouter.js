const express = require('express');
const Services = require('../models/service');

const serviceRouter = express.Router();


serviceRouter.route('/')
.get((req, res, next) => {
    Services.find({})
    .then((services) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(services) 
    }, (err) => next(err)) 
    .catch((err) => next(err))
})
.post((req, res, next) => {
    Services.create(req.body)
    .then((services) => {
        console.log('Service Created ', services)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(services)
    }, (err) => next(err))
    .catch((err) => next(err))
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /services')
})
.delete((req, res, next) => {
    Services.remove({})
    .then((resp) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(resp)
    }, (err) => next(err))
    .catch((err) => next(err))
})
module.exports = serviceRouter;
