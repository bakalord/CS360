const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be "password"')
            }
        }
    },
    //array of tokens
    //this is a way of tracking when a user logs in or logs out on their device
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

/*
 * This is essentially: show me all tasks where user id (_id) = task owner (owner)
 * or in SQL: SELECT * FROM Tasks WHERE owner = <a user ID>
 */
userSchema.virtual('tasks', {
    ref: 'Tasks',
    localField: '_id',
    foreignField: 'owner'
})

//methods keyword makes this method accessible on an instance of the model (a specific user)
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'seriesofcharacters')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

//@override default stringification behavior
//returns user object without private information
userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

// statics keyword makes this method accessible on the model
userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email })

    // email not found
    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    //password did not match
    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

//Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('Users', userSchema)

module.exports = User