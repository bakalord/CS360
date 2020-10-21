require('../src/db/mongoose')
const User = require('../src/models/users')
const Task = require('../src/models/tasks')

// User.findByIdAndUpdate('5f7fce1261329e3354ad2df5', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f7fce1261329e3354ad2df5', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})