const express = require('express')
const User = require('../models/users')
const router = new express.Router()
const auth = require('../middleware/authentication')

//sign up user
router.post('/users', async(req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

// log in
router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

//log out
router.post('/users/logout', auth, async(req, res) => {
    try {
        //removes token from the token array
        req.user.tokens = req.user.tokens.filter((token) => {
            //walk array of tokens
            //if token in array not equal to token logging out, keep it
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//logout all sessions by emptying the token array
router.post('/users/logoutAll', auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//get user profile information
router.get('/users/me', auth, async(req, res) => {
    res.send(req.user)
})


//update user info
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
        const user = await User.findById(req.params.id)

        //updates each property with newly supplied property
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

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

//delete user
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