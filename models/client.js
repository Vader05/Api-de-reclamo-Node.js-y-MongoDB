const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ClientSchema = new Schema({
    dniClient:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    claim: [claimSchema],
    service: [clientServiceSchema]
});

const claimSchema = new Schema({
    claimArea : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    reply: {
        type: String,
        required: true
    }
});
const clientServiceSchema = new Schema({
    employeeId: {
        type: String,
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    supportDate: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: String,
        required: true
    }
});


var Client = mongoose.model('Client', ClientSchema);
module.exports=Client;


