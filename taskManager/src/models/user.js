const moongose = require('mongoose')
const validator = require('validator')

const User = moongose.model('User', {
    name:{
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Invalid email!')
            }
        }
    },
    age: {
        type: Number, 
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number!')
            }
        }            
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contains [password]')
            }
        }
    }
})

module.exports = User