const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
require('dotenv').config()

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.set('useFindAndModify', false)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    number: {
        type: String,
        validate: {
            validator: function (num) {
                return num.replace(/[^0-9]/g,"").length >= 8;
            },
            message: props => `${props.value} requires 8 digits!`
        },
    }
})

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)