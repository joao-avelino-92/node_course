const moongose = require('mongoose')

moongose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: false,
    useFindAndModify: false,
    useNewUrlParser: true
})

