require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/user')

// User.findByIdAndUpdate('5dbb3f25c4cbc326d852635b', {age: 1} ).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age : 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const UpdateAgeAndCount = async (id, age) =>{
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({age})
//     return count
// }

// UpdateAgeAndCount('5dbb3f25c4cbc326d852635b', 2).then((count) =>{
//     console.log(count)
// }).catch(() => {
//     console.log(e)
// })

const deleteAndCount = async (id) =>{
    const tasks = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteAndCount('5dbb2bfc0c3b7821c3ae350b').then((count) =>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})