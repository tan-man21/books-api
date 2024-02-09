const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema ({
    title: {type: String, required: true},
    description: String,
    quantity: {type: String, required: true},
    image: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book