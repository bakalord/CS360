const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/tasks')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

/*
this tells the app to automatically parse incoming JSON to an object
*/
app.use(express.json())

app.use(userRouter)



app.post('/tasks', async(req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async(req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

// this is the same as its '/user/:id' counterpart except it gets a task by id
app.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

app.patch('/tasks/:id', async(req, res) => {
    //returns array of strings of object properties
    const updates = Object.keys(req.body)
        //array of object properties the user can update
    const allowedUpdates = ['description', 'completed']
        //now we want to determine if every string in updates
        // is an allowable update
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        // sets user info to the req.body which is whatever is sent over from the user's end
        // new: true returns the new user
        //runValidators: true ensures that validators for user object are run
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!task) {
            //no user for given ID, return 404 error
            return res.status(404).send()
        }
        // else send user
        res.send(task)
    } catch (e) {
        res.status(400).send(e);
    }
})

app.delete('/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})