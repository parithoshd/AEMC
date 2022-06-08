import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import "./Coursedescription.css"
import WebDev from "./images/Web Dev.jpg"

const Coursedescription = ({ btnValue }) => {

    const navigate = useNavigate()

    const [onecourseData, setOneCourseData] = useState({
        courseName: "", duration: "", cost: "", courseDescription: "",
        listOfContents: [], exam: []
    })

    const callCourseDescriptionPage = async () => {
        try {
            const course_id = (window.location.href).split("/")[4]
            // console.log(course_id);
            const response = await fetch(`/courses/description/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await response.json();
            setOneCourseData(data);
            // console.log(onecourseData);

        } catch (err) {
            console.log(err)
            navigate('/courses')
        }
    }


    useEffect(() => {
        callCourseDescriptionPage()
    }, [])

    const PaymentProcessPage = async (courseID, courseName, paymentStatus) => {
        const res = await fetch("/paymentProcess", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ enrolledCourseID: courseID, enrolledCourseName: courseName, paymentStatus: paymentStatus })
        })

        const data = await res.json()
        // console.log(data)
        if (res.status === 402 || !data) {
            window.alert("Payment is not done LOL")
        } else if (res.status === 401 || !data) {
            window.alert("Please Log In to Enroll")
        }
        else {
            console.log("Payment Processed Successfully");
        }
        // navigate("/")
    }

    const handleSubmit = (courseName, e) => {
        e.preventDefault()
        const courseID = (window.location.href).split("/")[4]
        window.open("http://localhost:3000/payment")
        PaymentProcessPage(courseID, courseName, true)

    }


    return (
        <>
            <div className='course-main'>
                <div className='d-flex'>
                    <div className='course-img'>
                        <img src={WebDev} alt="Course" />
                    </div>
                    <div className='course-header'>
                        <h1 className='course-name'>{onecourseData.courseName}</h1>
                        <h4>Price: {onecourseData.cost}</h4>
                        <h6>Duration: {onecourseData.duration}</h6>
                        {/* <button onClick={() => window.open("http://localhost:3000")}>Enroll</button> */}
                        <button className={'px-4 mx-3 my-2 enroll-btn btn btn-primary btn-lg ' + (!btnValue && "disable-btn")} onClick={(e) => handleSubmit(onecourseData.courseName, e)}>{btnValue ? "Enroll" : "Enrolled"}</button>
                        {/* <div>{!btnValue && <h6 className='text-muted'>*Already enrolled for the course*</h6>}</div> */}
                    </div>
                </div>
                <div>
                    <p className='course-content mb-5 py-5'>{onecourseData.courseDescription}</p>
                </div>
            </div>


        </>
    )
}

export default Coursedescription