require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('5f7fce47ce320c28649402c7').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f7fce63ce320c28649402c9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})