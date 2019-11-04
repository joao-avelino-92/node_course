const moongose = require('mongoose')


const tasks = moongose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = tasks