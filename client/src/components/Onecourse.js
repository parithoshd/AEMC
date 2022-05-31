import React, { useState, useEffect } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'
import WebDev from "./images/Web Dev.jpg"
import './Onecourse.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Login from './Login'

const Onecourse = (props) => {

    const navigate = useNavigate()

    const [onecourseData, setOneCourseData] = useState({
        courseName: "", duration: "", cost: "", courseDescription: "",
        listOfContents: [], exam: []
    })

    const callOnecoursePage = async () => {
        try {
            const course_id = (window.location.href).split("/")[4]
            console.log(course_id);
            const response = await fetch(`/courses/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await response.json();
            setOneCourseData(data);
            console.log(onecourseData);

        } catch (err) {
            console.log(err)
            navigate('/courses')
        }
    }




    useEffect(() => {
        callOnecoursePage()
    }, [])

    return (
        <>

            <Sidebar />
            {/* <Content /> */}
            <div className='course-main'>
                <div className='d-flex'>
                    <div className='course-img'>
                        <img src={WebDev} />
                    </div>
                    <div className='course-header'>
                        <h1 className='course-name'>{onecourseData.courseName}</h1>
                        <h4>Price: {onecourseData.cost}</h4>
                        <h6>Duration: {onecourseData.duration}</h6>
                        <button className='btn px-4 mx-3 my-2 button-27' onClick={() => window.open("http://localhost:3000")}>Enroll</button>
                    </div>
                </div>
                <div>
                    <p className='course-content mb-5 py-5'>{onecourseData.courseDescription}</p>
                </div>
            </div>


        </>
    )
}

export default Onecourse