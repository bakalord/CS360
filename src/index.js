const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

//whatever is in the environment variable "PORT", or localhost if nothing is there
const port = process.env.PORT || 3000

//this tells the app to automatically parse incoming JSON to an object
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})