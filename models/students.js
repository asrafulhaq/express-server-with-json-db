const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {
        type : String, 
        required : [true, 'Please set a name']
    },
    age : {
        type : String, 
        required : [true, 'Please set a Email']
    },
    skill : {
        type : String, 
        required : [true, 'Please set a phone number']
    }
}, {
    timestamps : true 
});

module.exports = mongoose.model('Student', studentSchema);

