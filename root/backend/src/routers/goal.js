const express = require('express')
const Goal = require('../models/goals')
const auth = require('../middleware/auth')
const router = new express.Router()

//create a goal
router.post('/goals/create', auth, async(req, res) => {
    var numTasks = 0
    var numComplete = 0
    var endDate = req.body.endDate
    var startDate = req.body.startDate
    var percentComplete = 0

    try {
        //populate all the user's tasks from within date range of goal
        const tasks = await req.user.populate({
            path: 'tasks',
            match: { dueDate: { $lte: endDate, $gte: startDate } }
        }).execPopulate()

        //calculate number of tasks and number of complete tasks
        req.user.tasks.forEach((task) => {
            numTasks++
            if (task.completed) {
                numComplete++
            }
        })

        //get percentage of complete tasks
        percentComplete = numComplete / numTasks

    } catch (e) {
        console.log('Error: ' + e)
    }
    var goal = new Goal({
        //spread syntax, expands the req.body object inside Goal
        ...req.body,

        //round and conver to percentage
        percentComplete: percentComplete.toFixed(2) * 100,

        //add owner id to task
        owner: req.user._id
    })
    try {
        await goal.save()
        res.status(201).send(goal)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/test', auth, async(req, res) => {
    console.log(req)
    res.send(200)
})

module.exports = router