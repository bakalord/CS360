const jwt = require('jsonwebtoken')
const User = require('../models/users')

//authenticate user routes
const auth = async(req, res, next) => {
    try {
        //look for header
        const token = req.header('Authorization').replace('Bearer ', '')
            //validate header
        const decoded = jwt.verify(token, 'seriesofcharacters')
            //find associated user
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = auth