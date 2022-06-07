import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Notenrolled from './Notenrolled'


const Coursenotes = () => {
    const [enrollAuth, setEnrollAuth] = useState(false)
    const navigate = useNavigate()
    const callEnrollAuthPage = async () => {
        const course_id = (window.location.href).split("/")[4]
        try {
            // console.log(course_id);
            const response = await fetch(`/courses/enrollAuth/${course_id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            console.log(data)

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

    return (
        <>
            {enrollAuth ? <div>Course Notes</div> : <Notenrolled />}
        </>

    )
}

export default Coursenotes