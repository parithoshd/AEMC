import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavContext } from './UserContextProvider'

import "./Coursedescription.css"
import WebDev from "./images/Web Dev.jpg"

import Payment from './Payment'

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
            // window.alert("Payment is not done LOL")
            console.log("Payment is not done")
        } else if (res.status === 401 || !data) {
            // window.alert("Please Log In to Enroll")
            console.log('Payment Success')
        }
        else {
            console.log("Payment Processed Successfully");
        }
        // navigate("/")
    }
    const { val, setval } = useContext(NavContext);
    const handleSubmit = (courseName, e) => {

        // console.log(val);
        setval(false);
        e.preventDefault()
        const courseID = (window.location.href).split("/")[4]
        // document.getElementById("nav-id").classList.add = "disabled"
        // document.getElementById("nav-id").classList.remove = "active"

        // window.open("http://localhost:3000/payment")
        PaymentProcessPage(courseID, courseName, false)

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
                        <button className={'px-4 mx-3 my-2 enroll-btn btn btn-primary btn-lg ' + (!btnValue && "disable-btn")} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(e) => { handleSubmit(onecourseData.courseName, e) }}>{btnValue ? "Enroll" : "Enrolled"}</button>
                        {/* <div>{!btnValue && <h6 className='text-muted'>*Already enrolled for the course*</h6>}</div> */}
                    </div>
                </div>
                <div>
                    <p className='course-content mb-5 py-5'>{onecourseData.courseDescription}</p>
                </div>
                {/* 
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button> */}

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">PAY NOW!!!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setval(true)}></button>
                            </div>
                            <div className="modal-body">
                                <Payment price={onecourseData.cost} />
                            </div>
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Coursedescription