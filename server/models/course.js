const mongoose = require('mongoose')

// Course Schema
const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    listOfContents: [{
        contentName: {
            type: String,
            required: true
        },
        video_list: [{
            type: String,
            required: true
        }]
    }],
    exam: [{
        question: {
            type: String,
            required: true
        },
        choices: [{
            type: String,
            required: true
        }],
        answer: {
            type: String,
            required: true
        }
    }]
})


module.exports = mongoose.model("course", courseSchema)
