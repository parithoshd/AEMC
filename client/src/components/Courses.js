import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Courses.css"
import Onecourse from './Onecourse'

import WebDev from "./images/Web Dev.jpg"
import ML from "./images/ML.jpg"
import clang from "./images/c.png"



const Courses = () => {

    let thumbnails = [WebDev, ML, clang, ML]

    const navigate = useNavigate()


    const [courseData, setCourseData] = useState([{
        courseName: "", duration: "", cost: "", courseDescription: "",
        listOfContents: [], exam: []
    }])

    const callCoursesPage = async () => {
        try {
            const response = await fetch('/courses', {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await response.json()
            setCourseData(data)

        } catch (err) {
            console.log(err)
            navigate('/')
        }
    }

    useEffect(() => {
        callCoursesPage()
    }, [])


    let i = 0


    const handleClick = (newCourse) => {
        // console.log(newCourse);
        <Onecourse course={newCourse} />
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        window.open("http://localhost:3000/payment")

    }

    return (
        <div className='Course-BG'>

            <div className="d-flex row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5">
                {courseData.map((course, index) => {
                    return (
                        <div key={index} className="col d-flex">
                            <div className="card h-100">
                                <img src={thumbnails[i++]} className="card-img-top" alt="img" height="50%" />
                                <div className="card-body">
                                    {/* <h5 className="card-title">{course.Name}</h5> */}
                                    <NavLink to={`/courses/${course._id}`} className="card-title text-decoration-none font-weight-bold" onClick={() => handleClick(course)}>{(course.courseName).toUpperCase()}</NavLink>
                                    <p className="card-text">{course.courseDescription.slice(0, 100).concat("...")}</p>
                                </div>
                                <div className="d-flex card-footer justify-content-around">
                                    <div>
                                        <h6>Duration: {course.duration}</h6>
                                        <h6>Cost: Rs {course.cost}</h6>
                                    </div>
                                    <button className='enroll-btn btn px-4 mx-3 my-2' onClick={handleSubmit}>Enroll</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses