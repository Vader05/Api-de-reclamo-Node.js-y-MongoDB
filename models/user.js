const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstname: {
        type: String,
          default: ''
    },
    lastname: {
        type: String,
       default: ''
    },
    admin:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', User);
module.exports = User;