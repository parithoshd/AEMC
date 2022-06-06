
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require("express")
const router = express.Router()
const Authenticate = require('../middlewares/Authenticate')

require("../db/conn")
const User = require('../models/user')
const Course = require("../models/course")

// Home Page Route
router.get('/', (req, res) => {
    res.send("Hello Root from Auth.js")

})

// About Us Route
router.get('/about', (req, res) => {
    res.send("About Us Page")
})

router.get('/userdetails', Authenticate, (req, res) => {
    res.send(req.loggedInUser)
})



router.get('/courses', async (req, res) => {
    try {
        courseData = await Course.find()
        // console.log(courseData)
        req.courseData = courseData
        res.send(req.courseData)
    } catch (err) {
        console.log(err)
    }

})

router.get('/courses/description/:id', async (req, res) => {
    let newObject = await Course.findOne({ _id: req.params.id })
    req.newObject = newObject
    res.send(req.newObject)
})

router.get('/courses/test/:id', async (req, res) => {
    let newObject = await Course.findOne({ _id: req.params.id })
    req.newObject = newObject
    res.send(req.newObject)
})

router.get('/courses/contents/:id', (req, res) => {
    res.send("Contents of the selected course")
})

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