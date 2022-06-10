const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require("express")
const router = express.Router()
const Authenticate = require('../middlewares/Authenticate')
const AuthEnroll = require("../middlewares/AuthEnroll")

require("../db/conn")
const User = require('../models/user')
const Course = require("../models/course")
const { db } = require('../models/user')

// Home Page Route
router.get('/', (req, res) => {
    res.send("Hello Root from Auth.js")

})

// About Us Route
router.get('/about', (req, res) => {
    res.send("About Us Page")
})

// User Details Route
router.get('/userdetails', Authenticate, (req, res) => {
    res.send(req.loggedInUser)
})

// Make sure that the enrolled user can take up the exam only once
router.get('/user/checkAttempt/:id', Authenticate, (req, res) => {
    // console.log(req.params.id)
    // if (vendors.filter(e => e.Name === 'Magenic').length > 0)
    var hasAttempted = ((req.loggedInUser.enrolledCourses).filter(enrolledCourse => enrolledCourse.enrolledCourseID === req.params.id)[0].grade ? true : false)
    res.send({ hasAttempted: hasAttempted })
})

// Get the list of videos(Along with header) corresponding to the requested Course
router.get("/courses/getContent/:id", async (req, res) => {
    // console.log(req.params.id)
    let requestedCourse = await Course.findOne({ _id: req.params.id })
    // console.log(requestedCourse.listOfContents)
    res.send({ listOfContents: requestedCourse.listOfContents })
})

// Processing of Payment for the Course
router.post("/paymentProcess", Authenticate, async (req, res) => {
    const { enrolledCourseID, enrolledCourseName, paymentStatus } = req.body
    try {
        if (paymentStatus) {
            (req.loggedInUser).enrolledCourses = [...((req.loggedInUser).enrolledCourses), {
                enrolledCourseID,
                enrolledCourseName
            }]
            await ((req.loggedInUser).save())
        } else {
            res.status(402).json({ err: "Payment Unsuccessful" })
        }
    } catch (err) {
        console.log(err)
    }
    res.send(req.body)
})


// Get All the courses in database
router.get('/courses', async (req, res) => {
    try {
        courseData = await Course.find()
        req.courseData = courseData
        res.send(req.courseData)
    } catch (err) {
        console.log(err)
    }

})

// Get the course description of the requested page
router.get('/courses/description/:id', async (req, res) => {
    let newObject = await Course.findOne({ _id: req.params.id })
    req.newObject = newObject
    res.send(req.newObject)
})

// Get the Course Test of the requested page
router.get('/courses/test/:id', async (req, res) => {
    let newObject = await Course.findOne({ _id: req.params.id })
    req.newObject = newObject
    res.send(req.newObject)
})

// Update the grade of the user correspoinding to the course of the exam that they take
router.post('/courses/updateGrade/:id', Authenticate, AuthEnroll, async (req, res) => {
    ((req.loggedInUser).enrolledCourses)[(((req.loggedInUser).enrolledCourses).findIndex((enrolledCourse) => enrolledCourse.enrolledCourseID === req.params.id))].grade = parseInt(req.body.grade)
    await (req.loggedInUser).save()
    res.send({ message: "Grade updated successfully" })
})

// Check whether a User is enrolled to a course or not
router.get('/courses/enrollAuth/:id', Authenticate, AuthEnroll, async (req, res) => {
    res.send(req.enrollStatus)
})

// Get the course content
router.get('/courses/contents/:id', (req, res) => {
    res.send("Contents of the selected course")
})

// Logout Route
router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: "/" })
    res.status(200).send("User logged out successfully")
})

// Registration Route
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, enrolledCourses } = req.body

    if (!firstName || !lastName || !email || !password) {
        return res.status(422).json({ error: "Please fill all the data" })
    }

    try {
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(422).json({ error: "User already Exists" })
        }

        const newUser = new User({ firstName, lastName, email, password, enrolledCourses })

        const userRegister = await newUser.save()
        if (userRegister) {
            return res.status(201).json("User created successfully")
        } else {
            res.status(500).json({ error: "Failed to register" })
        }
    } catch (err) {
        console.log(err)
    }
})


// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill all the fields" })
        }

        const registeredUser = await User.findOne({ email: email })
        if (registeredUser) {
            const passwordMatch = await bcrypt.compare(password, registeredUser.password)
            if (!passwordMatch) {
                res.status(400).json("Invalid Credentials")
            } else {
                let token = await registeredUser.generateAuthToken()
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 43200000), // 43200000 = 12 HOURS
                    httpOnly: true
                })
                res.json({ message: "User login successfull", registeredUser })
            }
        } else {
            res.status(400).json({ error: "Please register" })
        }
    } catch (err) {
        console.log(err)
    }
})

// Create New Course
router.post('/newcourse', async (req, res) => {
    try {
        const { courseName, duration, cost, courseDescription, listOfContents, exam } = req.body
        // const [{ contentName, video_list }] = listOfContents
        // const [{ question, choices, answer }] = exam


        if (!courseName || !duration || !cost || !courseDescription || !listOfContents || !exam) {
            return res.status(400).json({ error: "Please fill all the fields" })
        }

        const newCourse = new Course({ courseName, duration, cost, courseDescription, listOfContents, exam })
        const courseSave = await newCourse.save()

        if (courseSave) {
            return res.status(201).json("Course created successfully")
        } else {
            res.status(500).json({ error: "Failed to create the course" })
        }
        res.send("Successful")
    } catch (err) {
        console.log("ERROR!!!!!");
        console.log(err);
    }

})

module.exports = router