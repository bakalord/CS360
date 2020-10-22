const express = require('express')
const User = require('../models/users')
const router = new express.Router()

/*
post() method
request from front-end to create data on back-end
@param req: the data to be posted
@param res: the response, either the successfully posted data, or an error
*/
router.post('/users', async(req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

/*
get() method
request from front-end to 'get' data from back-end
@param req: a request for data to be posted
@param res: the response, either the data requested or an error
*/

router.get('/users', async(req, res) => {
    // NULL object passed in param means the entire user table
    try {
        const users = await User.find({})
        res.send(users)
    } catch {
        res.status(500).send()
    }
})

// this get() will 'get' a user based on the id given
// the ':id' after users means whatever comes after users will be passed in JSON format as an id
router.get('/users/:id', async(req, res) => {
    const _id = req.params.id // this is the JSON id that was passed

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

/*
 app.patch() is for updating a specific resource
*/
router.patch('/users/:id', async(req, res) => {
    //returns array of strings of object properties
    const updates = Object.keys(req.body)
        //array of object properties the user can update
    const allowedUpdates = ['name', 'email', 'password']
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
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            //no user for given ID, return 404 error
            return res.status(404).send()
        }
        // else send user
        res.send(user)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/users/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router