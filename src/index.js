const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/tasks')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//fn that's going to run between the request coming to the server
//and the route handler actually running
// app.use((req, res, next) => {
//     // do some work when request is made, and then ...
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }

//     //... run the route handler
//     next()
// })

/*
this tells the app to automatically parse incoming JSON to an object
*/
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})