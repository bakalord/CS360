const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const goalRouter = require('./routers/goal')


const app = express()

//whatever is in the environment variable "PORT", or localhost if nothing is there
const port = process.env.PORT || 5000

//this tells the app to automatically parse incoming JSON to an object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.use(userRouter)
app.use(taskRouter)
app.use(goalRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})