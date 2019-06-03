const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true,
        default: 'http://localhost/dummy.png'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('Item', ItemSchema);