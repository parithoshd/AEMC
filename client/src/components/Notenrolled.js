import React from 'react'
import "./Notenrolled.css"
import { Link } from 'react-router-dom'

const Notenrolled = () => {
    return (
        <>
            <div class="alert alert-info warning-msg" role="alert">
                <h4 class="alert-heading">Please Enroll to Continue</h4>
                <p>It looks like you haven't Enrolled to this course yet. Please Enroll to Continue</p>
                <hr />
                <Link to="/courses">
                    <button type="button" className="mb-0 green-btn">
                        Enroll
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Notenrolled