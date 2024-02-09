const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//CONFIG
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const app = express()
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('connected to mongo: ', MONGO_URI)
    })

//MIDDLEWARE
app.use(express.json())
app.use(cors())

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
})

//BOOKS
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)


//LISTEN
app.listen(PORT, () => {
    console.log('Hello from Port 3001')
})