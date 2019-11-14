const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET resquests are disable')
//     } else {
//         next()
//     }
// })

// app.use((req, res) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async( ) => {
    // const task = await Task.findById('5dcab5c44dbb6c4b18bc9b69')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5dcab57f4dbb6c4b18bc9b67')
    await user.populate('tasks').execPopulate()
    //console.log(user.tasks)
}

main()