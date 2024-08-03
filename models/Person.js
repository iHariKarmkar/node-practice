const mongoose = require('mongoose')
const { Schema } = mongoose

const personSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum: ['chef', 'manager', 'waiter']
    },
    mobile:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;