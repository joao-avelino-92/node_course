require('../src/db/mongoose')
const Task = require('../src/models/tasks')


Task.findByIdAndUpdate('5dbb476ed4a5af2c01b6f4b6').then((tasks) => {
    console.log(tasks)
    return Task.countDocuments({ completed : false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})