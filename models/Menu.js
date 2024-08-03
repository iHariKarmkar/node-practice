const mongoose = require('mongoose')
const {Schema} = mongoose;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sour', 'sweet', 'spicy'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type:[String],
        default: []
    }
})

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;