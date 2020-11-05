const mongoose = require('mongoose')
const validator = require('validator')

const goalSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    percentGoal: {
        type: Number,
        required: true
    },
    percentComplete: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }
}, {
    timestamps: true
})

goalSchema.virtual('tasks', {
    ref: 'Tasks',
    localField: '_id',
    foreignField: 'owner'
})

goalSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const Goal = mongoose.model('Goals', goalSchema)

module.exports = Goal