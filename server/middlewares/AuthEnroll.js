const User = require('../models/user')
const mongoose = require("mongoose")

const AuthEnroll = async (req, res, next) => {

    try {
        const enrolledUser = req.loggedInUser.enrolledCourses.find((enrolledCourse) => enrolledCourse.enrolledCourseID === req.params.id)
        if (enrolledUser) {
            req.enrollStatus = true
        }
        else {
            req.enrollStatus = false
        }
    } catch (err) {
        res.status(400).send("Bad Auth")
        console.log(err)
    }

    next()
}

module.exports = AuthEnroll