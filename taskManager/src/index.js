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

app.use((req, res) => {
    res.status(503).send('Site is currently down. Check back soon!')
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () =>{

    const token = jwt.sign({ _id: 'abc123' }, 'This is my new course', { expiresIn: '30 minutes' })
    console.log(token)
   
    const data = jwt.verify(token, 'This is my new course')
    console.log(data)
}

myFunction()