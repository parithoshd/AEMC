import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from "react-bootstrap"

import Notenrolled from './Notenrolled'

import "./Coursenotes.css"


const Coursenotes = () => {
    const [enrollAuth, setEnrollAuth] = useState(false)
    const navigate = useNavigate()
    const callEnrollAuthPage = async () => {
        const course_id = (window.location.href).split("/")[4]
        try {
            const response = await fetch(`/courses/enrollAuth/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();

            if (data)
                setEnrollAuth(true)

        } catch (err) {
            console.log(err)
            navigate('/adn')
        }
    }

    useEffect(() => {
        callEnrollAuthPage()
    }, [])


    const Notes = () => {
        return (
            <>
                <Card style={{ width: '100%', margin: "10px", border: "2px solid black" }}>
                    <Card.Body className='d-flex'>
                        <Card.Title>Introduction to Web Development</Card.Title>
                        <Card.Link className='mx-auto' href="https://www.multitech.ac.ug/uploads/Introduction%20to%20Web%20Programming.pdf" target="_blank">Download</Card.Link>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <>
            {
                enrollAuth ?
                    <div className='course-notes'>
                        Course Notes
                        <div className=" m-4 p-4">
                            <Notes />
                            <Notes />
                            <Notes />
                        </div>
                    </div>
                    :
                    <Notenrolled />
            }
        </>

    )
}

export default Coursenotes