const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const prueba = new Schema({name:{type: String}});

const claimSchema = new Schema({
    claimArea : {
        type: String,
        required: false
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
        required: false
    }
});

const clientServiceSchema = new Schema({
    employeeId: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'Service'
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    supportDate: {
        type: Date,
        required: false
    },
    state: {
        type: String,
        required: true
    }
});

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
    claim:[claimSchema],
        
    service:[clientServiceSchema]
    
});


var Client = mongoose.model('Client', ClientSchema);
module.exports=Client;


